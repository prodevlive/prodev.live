import React, { FunctionComponent } from 'react';
import { FileModule } from './FileModule/FileModule';

class ModuleState {
  fileModule = new FileModule();

  setFileModule = (fileModule: FileModule) => {};
}  

const ModuleContext = React.createContext<ModuleState | undefined>(undefined);

export const  ModuleProvider: FunctionComponent = ({ children } ) => {
  const [state, setState] = React.useState<ModuleState>(new ModuleState());
  state.setFileModule = (fileModule: FileModule) => {
    setState({ ...state, fileModule });
  };
  return (
    <ModuleContext.Provider value={state}>
      {children}
    </ModuleContext.Provider>
  );
};

export function useModule() {
  const context = React.useContext(ModuleContext);
  if (context === undefined) {
    throw new Error('useModule must be used within a ModuleProvider');
  }
  return { ModuleProvider, ...context };
}

// type ModuleState = {
//     count: number | undefined
//     setCount: (count: number) => void
//   };
  
//   const ModuleContext = React.createContext<ModuleState | undefined>(undefined);
  
//   export const  ModuleProvider: FunctionComponent = ({ children } ) => {
//     const [count, setCount] = React.useState<number>();
//     return (
//       <ModuleContext.Provider value={{ count, setCount }}>
//         {children}
//       </ModuleContext.Provider>
//     );
//   };
  
//   export function useModule() {
//     const context = React.useContext(ModuleContext);
//     if (context === undefined) {
//       throw new Error('useModule must be used within a ModuleProvider');
//     }
//     const { count, setCount } = context;   
//     return { ModuleProvider, count, setCount };
//   }