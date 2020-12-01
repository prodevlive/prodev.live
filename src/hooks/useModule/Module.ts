import { DataResult, DataStatus, DataMode } from 'models';

export class Module {
  
  key = '';  

  mode = DataMode.Undefined;
  
  name = '';
  
  path = '';
  
  roles = '';
  
  index = 0;
  
  isValid = false;
      
  save = async () => {
    return DataResult.fromStatus(DataStatus.Success);
  };
  
  load = async () => {
    return DataResult.fromStatus(DataStatus.Success);
  };
}