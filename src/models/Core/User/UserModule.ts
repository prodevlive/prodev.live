import { User } from './User';

export interface UserModule {
  item: User;
  auth: boolean;
  signIn: () => void;
  signOut: () => void;
  onSignIn: (user: User) => void;
  onSignOut: () => void;

  signUp: () => void;
  sendPayment: () => void;
  ReceivePayment: () => void;
}
