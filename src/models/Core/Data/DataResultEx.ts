/* eslint-disable @typescript-eslint/no-shadow */
import { DataResult } from './DataResult';
import { DataStatus } from './DataStatus';

export class DataResultEx<T> extends DataResult {
  item?: T;

  items?: T[];

  static fromItem<T>(item: T) {
    const result = new DataResultEx<T>();
    result.status = DataStatus.Success;
    result.item = item;
    return result;
  }

  static fromItems<T>(items: T[]) {
    const result = new DataResultEx<T>();
    result.status = DataStatus.Success;
    result.items = items;
    return result;
  }
}
