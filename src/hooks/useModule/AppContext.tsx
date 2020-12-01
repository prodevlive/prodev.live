import React, { FunctionComponent, useState } from 'react';
// import React, { FunctionComponent, useEffect, useState } from 'react';
// import { useHistory, useLocation } from 'react-router-dom';
// import {
//   HomeContext,
//   TextContext,
//   FileContext,
//   LockContext,
//   UserContext,
//   SettingsContext,
// } from 'contexts';

// import { Utility } from 'components';
// import { DataResult } from 'modules';
// import { AppContextName, AppContextBase } from '.';
// import { AppSession } from './AppSession';

export interface AppState {
//   utility: Utility;
//   session: AppSession;
//   contexts: { [index: string]: AppContextBase };
//   activeContext: AppContextBase;
//   setActiveContext: (name: string) => void;
//   save: (persist?: boolean) => void;
//   load: () => void;
}

export class AppStateEx implements AppState {
//   utility = new Utility();

  //   session = new AppSession();

  //   contexts: { [index: string]: AppContextBase } = {};

  //   activeContext = new AppContextBase('', '', '');

  //   setActiveContext = (name: string) => {};

  //   getActive = () => {
  //     return new AppContextBase('', '', '');
  //   };

  //   save = (persist?: boolean) => {};

//   load = () => {};
}

export const AppContext = React.createContext<AppState>({} as AppStateEx);

interface AppProps {
  children: React.ReactNode;
}

// const homeContext = new HomeContext();
// const textContext = new TextContext();
// const fileContext = new FileContext();
// const lockContext = new LockContext();
// const userContext = new UserContext();
// const settingsContext = new SettingsContext();

export const AppProvider: FunctionComponent<AppProps> = ({
  children,
}: AppProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [context, setContext] = useState<AppState>({});
  setContext({});
  //   const history = useHistory();
  //   const location = useLocation();
  //   const [context, setContext] = useState<AppState>({
  //     utility: new Utility(),
  //     session: new AppSession(),
  //     contexts: {
  //       [AppContextName.Home]: homeContext,
  //       [AppContextName.Text]: textContext,
  //       [AppContextName.File]: fileContext,
  //       [AppContextName.Lock]: lockContext,
  //       [AppContextName.User]: userContext,
  //       [AppContextName.Settings]: settingsContext,
  //     },
  //     activeContext: new AppContextBase('', '', ''),
  //     setActiveContext: (next: string) => {            
  //       if (context.contexts[next]) {
  //         context.session.setNextContext(next);
  //         context.save();
  //       }
  //     },
  //     save: (dontPersist?: boolean) => {
  //       const userCtx = context.contexts[
  //         AppContextName.User
  //       ] as UserContext;
  //       const updateNextContext = () => {
  //         const next = context.session.getNextContext();
  //         if (!next) {
  //           updateNameContext();
  //           return;
  //         }
  //         const nextCtx = context.contexts[next];
  //         if (!nextCtx) {
  //           context.utility.handleError(
  //             DataResult.fromFailure('Next context not found.'),
  //           );
  //           context.session.revertNextContext();
  //           updateNameContext();
  //           return;
  //         }
  //         if (!nextCtx.roles) {
  //           context.session.applyNextContext();
  //           updateNameContext();
  //           return;
  //         }
  //         if (!userCtx) {
  //           context.utility.handleError(
  //             DataResult.fromFailure('User context not found.'),
  //           );
  //           context.session.revertNextContext();
  //           updateNameContext();
  //           return;
  //         }
  //         if (!userCtx.auth) {
  //           context.utility.confirmAction({
  //             open: false,
  //             title: 'Login required',
  //             message: 'Do you wish to login?',
  //             confirm: 'Yes login',
  //             deny: 'No',
  //             onDone: confirm => {
  //               if (!confirm) {
  //                 context.session.revertNextContext();
  //               } else {
  //                 context.session.applyNextContext();
  //                 userCtx.signIn();
  //               }
  //               updateNameContext();
  //               updateContext();
  //             },
  //           });
  //           updateContext();
  //           return;
  //         }
  //         context.session.applyNextContext();
  //         updateNameContext();
  //       };
  //       const updateNameContext = () => {
  //         const name = context.session.getContext();
  //         const nameContext = context.contexts[name];
  //         if (!nameContext) {
  //           context.utility.handleError(
  //             DataResult.fromFailure('Context not found.'),
  //           );
  //           updateContext();
  //           return;
  //         }
  //         if (nameContext.roles) {
  //           if (!userCtx) {
  //             context.utility.handleError(
  //               DataResult.fromFailure('User context not found.'),
  //             );
  //             updateContext();
  //             return;
  //           }
  //           if (!userCtx.auth) {
  //             context.utility.confirmAction({
  //               open: false,
  //               title: 'Logging in...',
  //               message: 'Cancel?',
  //               confirm: 'Cancel',
  //               deny: 'Wait',
  //               onDone: confirm => {
  //                 if (confirm) {
  //                   dontPersist = false;
  //                   context.session.revertNextContext();
  //                   updateNameContext();
  //                   return;
  //                 }
  //                 updateContext();
  //               },
  //             });
  //             updateContext();
  //             return;
  //           }
  //         }
  //         if (context.activeContext) {
  //           context.activeContext.sidebarSelected = false;
  //         }
  //         context.activeContext = nameContext;
  //         context.activeContext.sidebarSelected = true;
  //         updateContext();
  //       };
  //       const updateContext = () => {
  //         if (!dontPersist) {
  //           context.session.setAuth(userCtx.auth);
  //           context.session.save();
  //         }
  //         const newContext = { ...context };
  //         const newContexts = Object.values(newContext.contexts);
  //         newContexts.forEach(
  //           (c: AppContextBase) => { c.root = newContext; },
  //         );
  //         setContext(newContext);
  //       };
  //       updateNextContext();
  //     },
  //     load: async () => {
  //       context.session.load();
  //       if (context.session.getAuth()) {
  //         const userCtx = context.contexts[
  //           AppContextName.User
  //         ] as UserContext;
  //         if (userCtx && !userCtx.auth) {
  //           userCtx.signIn();
  //           context.save(false);
  //         }
  //       }
  //       context.save(true);
  //     },
  //   });
  //   React.useEffect(() => {
  //     context.load();
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);
  //   useEffect(() => {
  //     // Default paths
  //     const parts = location.pathname.split('/').filter(p => p);
  //     if (!parts.length) {
  //       history.push('/home/creators');
  //       return;
  //     }
  //     const part = parts[0];
  //     if (parts.length === 1 && part === 'home'){
  //       history.push('/home/creators');
  //       return;
  //     }
  //     if (part) {
  //       context.setActiveContext(part);
  //     }
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [location]);
  return (
    <AppContext.Provider value={context}>{children}</AppContext.Provider>
  );
};


// export class AppContextBase {
//     private c = 0;
  
//     key = '';
  
//     root?: AppState;
  
//     mode = DataMode.Undefined;
  
//     name = '';
  
//     path = '';
  
//     roles = '';
  
//     index = 0;
  
//     isValid = false;
  
//     sidebarSelected = false;
  
//     constructor(name: string, path: string, roles: string) {
//       this.name = name;
//       this.path = path;
//       this.roles = roles;
//     }
  
//     getRoot() {
//       if (this.root) {
//         return this.root;
//       }
//       return new AppStateEx();
//     }
  
//     refresh() {
//       this.c += 1;
//       this.key = `${this.name}-context-${this.c}`;
//     }
  
//     reload = () => {
//       // if (this.root) {
//       //   this.root.save();
//       // }
//     };
  
//     getSidebar?: () => ReactNode;
  
//     getContent?: () => ReactNode;
  
//     getFooter?: () => ReactNode;
  
//     save = async () => {
//       return DataResult.fromStatus(DataStatus.Success);
//     };
  
//     load = async () => {
//       return DataResult.fromStatus(DataStatus.Success);
//     };
//   }

// interface AppContextBaseExCtor<T> {
//     new (): T;
//   }
  
//   export class AppContextBaseEx<T> extends AppContextBase {
//     item: T;
  
//     items: T[];
  
//     data?: DataModule<T>;
  
//     constructor(
//       Ctr: AppContextBaseExCtor<T>,
//       name: string,
//       path: string,
//       roles: string,
//       data?: DataModule<T>,
//     ) {
//       super(name, path, roles);
//       this.item = new Ctr();
//       this.items = [];
//       this.data = data;
//     }
  
//     load = async (useCache?: boolean) => {
//       if (!this.data) {
//         return DataResult.fromNew(DataStatus.Success, 'No data');
//       }
//       if (useCache) {
//         if (this.data.result.status === DataStatus.Success) {
//           return this.data.result;
//         }
//       }
//       const result = await this.data.List();
//       if (result.status === DataStatus.Success) {
//         this.item = result.item as T;
//         this.items = result.items as T[];
//       }
//       return result;
//     };
//   }
  