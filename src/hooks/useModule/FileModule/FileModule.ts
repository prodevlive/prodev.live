import { ModuleEx } from '../ModuleEx';
import { FileDataAws } from './FileDataAws';
import { FileEx } from './FileEx';

export class FileModule extends ModuleEx<FileEx> {
  data = new FileDataAws();

  count = 0;

  setCount = (count: number) => { this.count = count; };
}