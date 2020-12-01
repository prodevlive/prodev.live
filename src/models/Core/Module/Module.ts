export class Module<T> {
  item: T;

  index = 0;

  isValid = false;

  constructor(Ctr: new () => T) {
    this.item = new Ctr();
  }

  save = async () => {
    return '';
  };

  load = async () => {
    return '';
  };
}
