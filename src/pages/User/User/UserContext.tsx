// import React from 'react';
// import { User, DataModule } from 'modules';
// import { User } from 'models/Core/User';
// import UserHelp from './UserHelp.md';
// import { Hub, Auth } from 'aws-amplify';
// import { UserFooter } from '.';

export class UserContext {
//   auth = false;

  //   constructor() {
  //     super(User, 'User', '/user', '', new DataModule<User>());
  //     Hub.listen('auth', async capsule => {
  //       switch (capsule.payload.event) {
  //         case 'signIn':
  //           this.item.name = capsule.payload.data.username;
  //           this.onSignIn(this.item);
  //           break;
  //         case 'signOut':
  //           this.onSignOut();
  //           break;
  //       }
  //     });
  //   }

  //   signIn = () => {
  //     try {
  //       Auth.federatedSignIn();
  //       // return new DataResult(DataStatus.Success);
  //     } catch (e) {
  //       // return new DataResult(DataStatus.Failure, e.toString());
  //     }

  //     // this.getRoot().utility.alertResult(result);
  //   };

  //   signOut = () => {
  //     try {
  //       Auth.signOut();
  //       // return new DataResult(DataStatus.Success);
  //       // const result = await Auth.signOut();
  //       // if (result) {
  //       //     return 'save';
  //       // }
  //       // return 'error';
  //     } catch (e) {
  //       // return new DataResult(DataStatus.Failure, e.toString());
  //     }
  //   };

  //   onSignIn = (user: User) => {
  //     this.auth = true;
  //     this.item = user;
  //     const context = this.getRoot();
  //     context.utility.confirmCancel();
  //     context.save();
  //   };

  //   onSignOut = () => {
  //     this.auth = false;
  //     this.item = new User();
  //     const context = this.getRoot();
  //     context.session.revertNextContext();
  //     context.save();
  //   };

//   // getContent = () => {
//   //     return (
//   //         <TabContainer
//   //             tabs={[
//   //                 {
//   //                     id: 'User_Form',
//   //                     title: 'Details',
//   //                     content: <UserForm />,
//   //                     visible: true,
//   //                 },
//   //                 {
//   //                     id: 'User_Help',
//   //                     title: 'Help',
//   //                     content: <TextPanel content={UserHelp} />,
//   //                     visible: true,
//   //                 },
//   //             ]}
//   //         />
//   //     );
//   // };
//   getFooter = () => <UserFooter />;
  // doSignIn() {
  //     try {
  //         Auth.federatedSignIn();
  //         return 'load';
  //     } catch (e) {
  //         return getException(e);
  //     }
  // }
  // async onSignIn(username: string) {
  //     const result = new DataResult();
  //     try {
  //         const users = await UserData.List();
  //         if (!users || !users.length) {
  //             const result = await Auth.currentAuthenticatedUser();
  //             this.item.token = result.attributes.sub;
  //             this.item.email = result.attributes.email;
  //             this.item.username = username;
  //             this.item = await UserData.Save(this.item);
  //         } else {
  //             this.item = users[0];
  //             console.log(this.item.username);
  //         }
  //         result.set(DataStatus.Success, 'user signed in');
  //     } catch (e) {
  //         result.set(DataStatus.Failure, getException(e));
  //     }
  //     return result;
  // }
  // async doSignOut() {
  //     try {
  //         const result = await Auth.signOut();
  //         if (result) {
  //             return 'save';
  //         }
  //         return 'error';
  //     } catch (e) {
  //         return getException(e);
  //     }
  // }
  // async onSignOut() {
  //     const result = new DataResult();
  //     this.item.username = '';
  //     result.set(DataStatus.Success, 'user signed out');
  //     return result;
  // }
  // async save() {
  //     try {
  //         const user = await UserData.Save(this.item);
  //         if (!user) {
  //             return 'error';
  //         }
  //         this.item = user;
  //         return 'save';
  //     } catch (e) {
  //         return getException(e);
  //     }
  // }
}
