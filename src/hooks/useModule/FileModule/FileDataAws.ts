
import { DataModule, DataResultEx, DataStatus, DataResult, FileType } from 'models';
import { Storage } from 'aws-amplify';
import { FileEx } from './FileEx';

const bucketUrl = process.env.FILE_BUCKET_URL as string;

export class FileDataAws extends DataModule<FileEx> {
  public async Create(item: FileEx): Promise<DataResultEx<FileEx>> {
    this.result = DataResult.fromNew(DataStatus.Pending, 'saving...');
    try {
      const { type, name, path, file } = item;
      if (type === FileType.Node) {
        await Storage.put(path, '');
      } else {
        await Storage.put(path, file);
      }
      item.url = `${bucketUrl}${name}`;
      this.result = DataResultEx.fromItem(item);
    } catch (e) {
      this.result = DataResultEx.fromError(e);
    }
    return this.result;
  }

  public async Read(item: FileEx): Promise<DataResultEx<FileEx>> {
    this.result = DataResult.fromNew(DataStatus.Pending, 'loading...');
    try {
      const { type, path } = item;
      if (type !== FileType.Root && type !== FileType.Node) {
        item.dataUrl = (await Storage.get(path)) as string;
        const data = await Storage.get(path, { download: true });
        const { Body } = data as { Body: Uint8Array };
        const blob = new Blob([Body]);
        if (Body) {
          item.blobUrl = URL.createObjectURL(blob);
          if (type === FileType.Text) {
            item.text = await new Response(blob).text();
          }
        }
      }
      this.result = DataResultEx.fromItem(item);
    } catch (e) {
      this.result = DataResultEx.fromError(e);
    }
    return this.result;
  }

  public async Update(item: FileEx): Promise<DataResultEx<FileEx>> {
    this.result = DataResult.fromNew(DataStatus.Pending, 'saving...');
    try {
      let blob = null;
      const { type, path, text, blobUrl } = item;
      switch (type) {
        case FileType.Text:
          if (text) {
            blob = new Blob([text], { type: 'text/plain' });
          }
          break;
        case FileType.Image:
          if (blobUrl) {
            const blobData = await fetch(blobUrl);
            blob = await blobData.blob();
          }
          break;
      }
      if (blob) {
        await Storage.put(path, blob);
      }
      this.result = DataResultEx.fromItem(item);
    } catch (e) {
      this.result = DataResultEx.fromError(e);
    }
    return this.result;
  }

  public async Delete(item: FileEx): Promise<DataResultEx<FileEx>> {
    this.result = DataResult.fromNew(DataStatus.Pending, 'deleting...');
    try {
      const { path } = item;
      await Storage.remove(path);
      this.result = DataResult.fromStatus(DataStatus.Success);
    } catch (e) {
      this.result = DataResultEx.fromError(e);
    }
    return this.result;
  }

  public async List(): Promise<DataResultEx<FileEx>> {
    this.result = DataResult.fromNew(DataStatus.Pending, 'loading...');
    try {
      const fileEx = FileEx.fromRoot(bucketUrl, 's3');
      fileEx.files = [];
      const items = await Storage.list('');
      if (items && items.length) {
        items.forEach((r: { key: string; size: number }) => {
          if (r.key) {
            fileEx.files.push(
              FileEx.fromPath(bucketUrl, r.key, r.size),
            );
          }
        });
        fileEx.init();
      }
      this.result.item = fileEx;
      this.result.status = DataStatus.Success;
    } catch (e) {
      this.result = DataResultEx.fromError(e);
    }
    return this.result;
  }
}
