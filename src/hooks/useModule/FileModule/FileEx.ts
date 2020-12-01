import { File as FileBase, FileType } from 'models';

const typeMap: { [index: string]: string } = {
  txt: FileType.Text,
  md: FileType.Text,
  ts: FileType.Text,
  jpg: FileType.Image,
  jpeg: FileType.Image,
  png: FileType.Image,
  mp3: FileType.Audio,
  mp4: FileType.Video,
  glb: FileType.Model,
};

export class FileEx extends FileBase {
  selected = false;

  file?: File;

  data?: Response;

  text?: string;

  dataUrl?: string;

  blobUrl?: string;

  init() {
    this.normalize();
    this.arrange();
    this.sort();
  }

  normalize() {
    if (!this.files || !this.files.length) {
      return;
    }
    for (let i = 0; i < this.files.length; i++) {
      const item = this.files[i] as FileEx;
      if (!item.path.includes('/')) {
        item.name = item.path;
      } else {
        const parts = item.path.split('/');
        item.name = parts.pop() as string;
        if (!item.name) {
          item.name = parts.pop() as string;
        }
        const index = item.path.lastIndexOf('/') + 1;
        const parentPath = item.path.substring(0, index);
        let added = false;
        for (let j = 0; j < this.files.length; j++) {
          const parent = this.files[j] as FileEx;
          if (parent.path === parentPath) {
            added = true;
            break;
          }
        }
        if (!added) {
          this.files.push(
            FileEx.fromName(item.root, parentPath, FileType.Node),
          );
        }
      }
    }
  }

  arrange() {
    if (!this.files || !this.files.length) {
      return;
    }
    const items: FileEx[] = [];
    for (let i = 0; i < this.files.length; i++) {
      const item = this.files[i] as FileEx;
      item.id = item.url;
      if (!item.path.includes('/')) {
        items.push(item);
      } else if (item.type === FileType.Node) {
        for (let j = 0; j < this.files.length; j++) {
          const child = this.files[j];
          if (
            child.path !== item.path &&
                        child.path.startsWith(item.path)
          ) {
            const remainder = child.path.substring(
              item.path.length,
            );
            if (
              remainder &&
                            (!remainder.includes('/') ||
                                remainder.endsWith('/'))
            ) {
              if (!item.files) {
                item.files = [];
              }
              item.files.push(child);
            }
          }
        }
        const parts = item.path.split('/');
        if (parts.length <= 2) {
          items.push(item);
        }
      }
    }
    this.files = items;
  }

  static fromNew() {
    return new FileEx();
  }

  static fromRoot(root: string, name: string) {
    const fileEx = new FileEx();
    fileEx.root = root;
    fileEx.name = name;
    fileEx.type = FileType.Root;
    fileEx.url = root;
    fileEx.id = root;
    return fileEx;
  }

  static fromPath(root: string, path: string, size: number) {
    const fileEx = new FileEx();
    fileEx.root = root;
    fileEx.path = path;
    fileEx.size = size;
    fileEx.type = !fileEx.size ? FileType.Node : FileType.File;
    const parts = path.split('/');
    while (parts.length) {
      const name = parts.pop();
      if (name) {
        fileEx.name = name;
        break;
      }
    }
    const names = fileEx.name.split('.');
    if (names.length > 1) {
      const type = names.pop();
      if (type) {
        const key = type.toLowerCase();
        const ct = typeMap[key];
        if (ct) {
          fileEx.type = ct as FileType;
        }
      }
    }
    fileEx.url = `${root}${path}`;
    fileEx.id = fileEx.url;
    return fileEx;
  }

  static fromName(root: string, path: string, type: string) {
    const fileEx = new FileEx();
    fileEx.path = path;
    fileEx.type = type as FileType;
    fileEx.url = `${root}${path}`;
    fileEx.id = fileEx.url;
    return fileEx;
  }

  static fromFile(file: File, path: string) {
    const fileEx = new FileEx();
    fileEx.file = file;
    fileEx.name = file.name;
    fileEx.path = `${path}${file.name}`;
    return fileEx;
  }
}
