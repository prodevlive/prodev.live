import { DataStatus } from './DataStatus';

export class DataResult {
  status = DataStatus.Undefined;

  message = '';

  error?: Error;

  static fromNew(status: DataStatus, message: string) {
    const result = new DataResult();
    result.status = status;
    result.message = message;
    return result;
  }

  static fromStatus(status: DataStatus) {
    const result = new DataResult();
    result.status = status;
    return result;
  }

  static fromError(error: Error) {
    const result = new DataResult();
    result.error = error;
    result.status = DataStatus.Failure;
    result.message = error.message;
    if (!error.message) {
      result.message = error.toString();
    }
    return result;
  }

  static fromFailure(message: string) {
    const result = new DataResult();
    result.status = DataStatus.Failure;
    result.message = message;
    return result;
  }
}
