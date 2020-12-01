// import React from 'react';

// import { DataStatus, DataResultEx, DataMode } from 'modules';
// import { SidebarItem, ContentNode, ContentType } from 'components';
// import FileHelp from './FileHelp.md';
// import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
// import DescriptionTwoToneIcon from '@material-ui/icons/DescriptionTwoTone';
// import { FileEx } from './FileEx';

// import { FileContent, FileData, FileEx, FileFooter } from '.';

export class FileContext {
  // urls: string[] = [];
//   file = FileEx.fromNew();

  //   content = ContentNode.fromNew();

  //   constructor() {
  //     super(FileEx, 'File', '/file', '', new FileData());
  //   }

  //   getSidebar = () => {
  //     return (
  //       <SidebarItem
  //         key={`sbi_${this.name}`}
  //         name={this.name}
  //         path={this.path}
  //         icon={<DescriptionOutlinedIcon />}
  //         iconSelected={<DescriptionTwoToneIcon />}
  //       />
  //     );
  //   };

  //   getContent = () => {
  //     this.getData();
  //     return <FileContent key={this.key} context={this} />;
  //   };

  //   getFooter = () => {
  //     this.getData();
  //     return <FileFooter key={this.content.key} context={this} />;
  //   };

  //   getSelectedFile = () => {
  //     const selectedNode = this.content.getSelected();
  //     if (!selectedNode) {
  //       return null;
  //     }
  //     const selectedFile = this.file.find(selectedNode.id);
  //     if (!selectedFile) {
  //       return null;
  //     }
  //     return selectedFile as FileEx;
  //   };

  //   getData = async (reload?: boolean) => {
  //     if (!reload && this.content.id) {
  //       return;
  //     }
  //     const useCache = !reload;
  //     const result = (await this.load(useCache)) as DataResultEx<FileEx>;
  //     if (result.status === DataStatus.Success) {
  //       this.file = result.item as FileEx;
  //       this.content = this.file.toContent();
  //     }
  //     if (reload) {
  //       this.reload();
  //     }
  //   };

  //   doUpload = async (files: FileList) => {
  //     const selectedFile = this.getSelectedFile();
  //     if (!selectedFile) {
  //       return;
  //     }
  //     const file = files[0];
  //     const fileEx = FileEx.fromFile(file, selectedFile.path);
  //     if (this.data){
  //       await this.data.Create(fileEx);
  //     }        
  //     this.getData(true);
  //   };

  //   doCreate = () => {
  //     this.mode = DataMode.Create;
  //     this.item = FileEx.fromNew();
  //     this.item.type = ContentType.Node;
  //     this.setName('filename');
  //     this.reload();
  //   };

  //   doRead = async (id: string) => {
  //     this.content.select(id);
  //     const selectedFile = this.getSelectedFile();
  //     // if (selectedFile && selectedFile.type === ContentType.Text) {
  //     if (selectedFile) {
  //       if (this.data){
  //         await this.data.Read(selectedFile as FileEx);
  //       }
  //     }
  //     this.reload();
  //   };

  //   doUpdate = () => {
  //     const selectedFile = this.getSelectedFile();
  //     if (!selectedFile) {
  //       return;
  //     }
  //     this.mode = DataMode.Update;
  //     this.item = selectedFile;
  //     this.reload();
  //   };

  //   doDelete = async () => {
  //     const selectedFile = this.getSelectedFile();
  //     if (!selectedFile) {
  //       return;
  //     }
  //     if (this.data){
  //       await this.data.Delete(selectedFile as FileEx);
  //     }
  //     this.getData(true);
  //   };

  //   doCancel = () => {
  //     this.mode = DataMode.Undefined;
  //     this.reload();
  //   };

  //   doBeforeSave = async () => {};

  //   doSave = async () => {
  //     if (this.doBeforeSave) {
  //       await this.doBeforeSave();
  //     }
  //     if (this.data){
  //       if (this.mode === DataMode.Create) {
  //         const saveResult = await this.data.Create(this.item);
  //         if (saveResult.status !== DataStatus.Success) {
  //           this.getRoot().utility.handleError(saveResult);
  //           return;
  //         }
  //       } else {
  //         const updateResult = await this.data.Update(this.item);
  //         if (updateResult.status !== DataStatus.Success) {
  //           this.getRoot().utility.handleError(updateResult);
  //           return;
  //         }
  //       }
  //     }
  //     this.mode = DataMode.Undefined;
  //     this.getData(true);
  //   };

  //   setName = (name: string) => {
  //     const selectedFile = this.getSelectedFile();
  //     if (!selectedFile) {
  //       return;
  //     }
  //     this.item.name = name;
  //     this.item.path = `${selectedFile.path}${this.item.name}/`;
  //     this.item.url = `${selectedFile.url}${this.item.name}/`;
  //     this.item.id = this.item.url;
  //   };

  //   setText = (text: string) => {
  //     this.item.text = text;
  //   };

  // updateUrls(urls: string[]) {
  //     this.urls = urls;
  // }
  // async updateProp(index: number, field: string, value: string = '') {
  //     const item = this.items[index];
  //     switch (field) {
  //         case 'name':
  //             item.name = value;
  //             if (item.status !== 'new') {
  //                 item.status = 'updated';
  //             }
  //             break;
  //         case 'selected':
  //             item.selected = !item.selected;
  //             break;
  //     }
  //     const result = await this.updateItems(this.items);
  //     return result;
  // }
  // async deleteItem(index: number) {
  //     const item = this.items[index];
  //     item.status = 'deleted';
  //     // this.items.splice(index, 1);
  //     const result = await this.updateItems(this.items);
  //     return result;
  // }
  // async updateItems(items: FileEx[]) {
  //     // items.forEach(item => {
  //     //     let isFound = false;
  //     //     this.items.forEach(existing => {
  //     //         if (existing.key === item.key) {
  //     //             isFound = true;
  //     //         }
  //     //     });
  //     //     if (!isFound) {
  //     //         item.status = 'new';
  //     //         this.items.push(item);
  //     //     }
  //     // });
  //     // if (!this.validateItems()) {
  //     //     return new DataResult(DataStatus.Failure, 'invalid files');
  //     // }
  //     // return await this.save();
  // }
  // validateItems() {
  //     let isValid = true;
  //     this.items.forEach(i0 => {
  //         i0.error = '';
  //         this.items.forEach(i1 => {
  //             if (i0 !== i1) {
  //                 if (i0.name === i1.name) {
  //                     i0.error = 'file name must be unique';
  //                     isValid = false;
  //                 }
  //             }
  //         });
  //     });
  //     return isValid;
  // }
  // async save() {
  //     try {
  //         for (let i = 0; i < this.items.length; i++) {
  //             let item = this.items[i];
  //             switch (item.status) {
  //                 case 'new':
  //                     item = await FileData.Create(item);
  //                     this.items[i] = item;
  //                     break;
  //                 // case 'deleted':
  //                 //     item = await FileData.Delete(item);
  //                 //     break;
  //             }
  //         }
  //         return new DataResult(DataStatus.Success);
  //     } catch (e) {
  //         return new DataResult(DataStatus.Failure, getException(e));
  //     }
  // }
}
