import { ReactNode } from 'react';
import { ContentType } from './ContentType';

export class ContentNode {
  private count = 0;

  id: string;

  key: string;

  type: string;

  name: string;

  path: string;

  size?: number;

  visible: boolean;

  element?: ReactNode;

  contents?: ContentNode[];

  selected?: boolean;

  expanded?: boolean;

  constructor(id: string, type: string, name: string, path: string) {
    this.id = id;
    this.key = this.getKey();
    this.type = type;
    this.name = name;
    this.path = path;
    this.visible = true;
  }

  getKey() {
    this.count += 1;
    let k = `${this.id}-${this.count}`;
    k = k.replace(/\./g, '-');
    k = k.replace(/\//g, '-');
    k = k.replace(/--/g, '-');
    return k;
  }

  sort() {
    if (!this.contents) {
      return;
    }
    this.contents.forEach(content => content.sort());
    const nodes = this.contents.filter(
      node => node.type === ContentType.Node,
    );
    nodes.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    const items = this.contents.filter(
      item => item.type !== ContentType.Node,
    );
    items.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    this.contents = nodes.concat(items);
  }

  find(id: string): ContentNode | null {
    if (this.id === id) {
      return this;
    }
    if (this.contents) {
      for (let i = 0; i < this.contents.length; i++) {
        const item = this.contents[i].find(id);
        if (item) {
          return item;
        }
      }
    }
    return null;
  }

  getSelected(): ContentNode | null {
    if (this.selected) {
      return this;
    }
    if (this.contents) {
      for (let i = 0; i < this.contents.length; i++) {
        const node = this.contents[i].getSelected();
        if (node) {
          return node;
        }
      }
    }
    if (this.type === ContentType.Root) {
      return this;
    }
    return null;
  }

  select(id: string) {
    if (this.id === id) {
      this.selected = !this.selected;
      const expanded = !!this.selected;
      if (
        this.type === ContentType.Root ||
                this.type === ContentType.Node
      ) {
        this.expanded = expanded;
        if (this.contents) {
          this.contents.forEach(content => {
            content.visible = expanded;
            content.selected = false;
            content.expanded = false;
          });
        }
      }
      // if (this.selected) {
      //     this.selected = true;
      //     if (
      //         this.type === ContentType.Root ||
      //         this.type === ContentType.Node
      //     ) {
      //         this.expanded = true;
      //         if (this.contents) {
      //             this.contents.forEach(content => {
      //                 content.visible = true;
      //                 content.selected = false;
      //                 content.expanded = false;
      //             });
      //         }
      //     }
      // }
      this.key = this.getKey();
      return true;
    }
    let changed = false;
    if (this.selected) {
      this.selected = false;
      changed = true;
    }
    if (this.contents) {
      let changedType = '';
      let changedIndex = 0;
      let changedVisible = false;
      for (let i = 0; i < this.contents.length; i++) {
        const content = this.contents[i];
        if (content.select(id)) {
          changed = true;
        }
        if (content.id === id) {
          changedType = content.type;
          changedIndex = i;
          changedVisible = !content.selected;
        }
      }
      if (
        changedType &&
                (changedType === ContentType.Root ||
                    changedType === ContentType.Node)
      ) {
        for (let i = 0; i < this.contents.length; i++) {
          if (i !== changedIndex) {
            this.contents[i].visible = changedVisible;
          }
        }
      }
    }
    if (changed) {
      this.key = this.getKey();
    }
    return changed;
  }

  static fromNew() {
    return new ContentNode('', '', '', '');
  }

  static fromId(id: string, type: string) {
    return new ContentNode(id, type, id, id);
  }

  static fromType(id: string, type: string, path: string) {
    return new ContentNode(id, type, id, path);
  }

  //   toContent() {
  //     const content = ContentNode.fromNew();
  //     content.id = this.id;
  //     content.path = this.url;
  //     content.name = this.name;
  //     content.type = this.type;
  //     content.key = content.getKey();
  //     if (content.type === ContentType.Root) {
  //       content.selected = true;
  //       content.expanded = true;
  //     }
  //     if (this.files && this.files.length) {
  //       content.contents = this.files.map(file => {
  //         const fileEx = file as FileEx;
  //         return fileEx.toContent();
  //       });
  //     }
  //     content.sort();
  //     return content;
  //   }


  //* *** */
  static fromContents(id: string, contents: ContentNode[]) {
    const node = new ContentNode(id, ContentType.Node, id, id);
    node.contents = contents;
    return node;
  }

  static fromGroup(id: string, size: number, contents: ContentNode[]) {
    const node = new ContentNode(id, ContentType.Node, id, id);
    node.size = size;
    node.contents = contents;
    return node;
  }

  static fromPath(
    id: string,
    type: string,
    name: string,
    path: string,
    element: ReactNode,
  ) {
    const node = new ContentNode(id, type, name, path);
    node.element = element;
    return node;
  }
}
