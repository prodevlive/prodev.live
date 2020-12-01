
export enum FileType {
  Null = '',
  Root = 'Root',
  Node = 'Node',
  File = 'File',
  Text = 'Text',
  Image = 'Image',
  Audio = 'Audio',
  Video = 'Video',
  Model = 'Model',
}

export class File {
  id: string = Date.now().toString();

  url = '';

  root = '';

  path = '';

  name = '';

  type = FileType.Null;

  size = 0;

  files: File[] = [];

  error = '';

  status = '';

  find(id: string): File | null {
    if (this.id === id) {
      return this;
    }
    if (this.files && this.files.length) {
      for (let i = 0; i < this.files.length; i++) {
        const found = this.files[i].find(id);
        if (found) {
          return found;
        }
      }
    }
    return null;
  }

  sort() {
    if (!this.files || !this.files.length) {
      return;
    }
    this.files.forEach(file => file.sort());
    const nodes = this.files.filter(file => file.type === FileType.Node);
    nodes.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    const files = this.files.filter(file => file.type !== FileType.Node);
    files.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    this.files = nodes.concat(files);
  }
}
