import { DataModule, DataStatus, DataResult } from 'models';
import { Module } from './Module';

export class ModuleEx<T> extends Module {
  item?: T;
  
  items?: T[];
  
  data?: DataModule<T>;

  result?: DataResult;
  
  load = async (useCache?: boolean) => {
    // eslint-disable-next-line no-debugger
    debugger;
    if (!this.data) {
      this.result = DataResult.fromNew(DataStatus.Success, 'No data');
      return this.result;
    }
    if (useCache) {
      if (this.data.result.status === DataStatus.Success) {
        return this.data.result;
      }
    }
    const result = await this.data.List();
    if (result.status === DataStatus.Success) {
      this.item = result.item as T;
      this.items = result.items as T[];
    }
    return result;
  };
}