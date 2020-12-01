export enum StyleTheme {
  Dark,
  Light,
}

export class Settings {
  id?: string;

  owner?: string;

  theme = StyleTheme.Dark;

  audio = true;
}

// export class Mode {

//   signInAttempted = false;

//   signedIn = false;

//   play = false;

//   mute = false;

//   show = false;

//   help = false;

//   content = false;

//   drawer = false;

//   drawerWidth = 55;

//   drawerOpenWidth = 200;

//   drawerClosedWidth = 55;

//   size = { width: 0, height: 0 };

//   displayWidth = 500;

//   settings = new SettingsX();

//   contentCoords = { x1: 55, y1: 64, x2: 0, y2: 56 };
// }
