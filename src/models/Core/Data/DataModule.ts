import { DataResultEx } from './DataResultEx';

export class DataModule<T> {
  result: DataResultEx<T> = new DataResultEx<T>();

  public async Save(_item: T): Promise<DataResultEx<T>> {
    return this.result;
  }

  public async Create(_item: T): Promise<DataResultEx<T>> {
    return this.result;
  }

  public async Update(_item: T): Promise<DataResultEx<T>> {
    return this.result;
  }

  public async Delete(_item: T): Promise<DataResultEx<T>> {
    return this.result;
  }

  public async Read(_item: T): Promise<DataResultEx<T>> {
    return this.result;
  }

  public async List(): Promise<DataResultEx<T>> {
    return this.result;
  }
}
