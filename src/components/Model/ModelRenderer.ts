import {
  Scene,
  Engine,
  HemisphericLight,
  ArcRotateCamera,
  Vector3,
  Color3,
  SceneLoader,
} from 'babylonjs';
import 'babylonjs-loaders';

export class ModelRenderer {
  canvas: HTMLCanvasElement;

  engine: Engine;

  scene: Scene;

  light: HemisphericLight;

  camera: ArcRotateCamera;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.engine = new Engine(
      this.canvas,
      true,
      { preserveDrawingBuffer: true, stencil: true },
      true,
    );
    this.scene = new Scene(this.engine);
    this.light = new HemisphericLight(
      'hemi',
      new Vector3(0, 1, 0),
      this.scene,
    );
    this.light.groundColor = new Color3(1.0, 1.0, 1.0);
    this.light.intensity = 0.5;
    this.camera = new ArcRotateCamera(
      'Camera',
      Math.PI / 2,
      0,
      2.5,
      Vector3.Zero(),
      this.scene,
    );
    this.camera.attachControl(canvas, true);
    this.scene.getEngine().runRenderLoop(this.render);
  }

  loadFile = (url: string) => {
    SceneLoader.Append(url);
  };

  resize = () => {
    if (this.engine) {
      this.engine.resize();
    }
  };

  render = () => {
    this.scene.render();
  };
}
