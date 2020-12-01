import { FunctionComponent } from 'react';
// import { FileEx } from 'contexts/File/FileEx';
// import { ModelRenderer } from './ModelRenderer';

export interface ModelViewerProps {
  file: string;
}

export const ModelViewer: FunctionComponent<ModelViewerProps> = ({
  file,
}: ModelViewerProps) => {
  return null;
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);
//   const rendererRef = useRef<ModelRenderer | null>(null);
//   useEffect(() => {
//     if (!canvasRef.current) {
//       return;
//     }
//     if (!rendererRef.current) {
//       setTimeout(() => {
//         const renderer = new ModelRenderer(
//           canvasRef.current as HTMLCanvasElement,
//         );
//         rendererRef.current = renderer;
//         window.addEventListener('resize', renderer.resize);
//         if (file.dataUrl) {
//           renderer.loadFile(file.dataUrl);
//         }
//       });
//     } else {
//       rendererRef.current.resize();
//     }
//   }, [canvasRef, file.dataUrl]);
//   // if (rendererRef.current) {
//   //     rendererRef.current.render();
//   // }
//   return <canvas ref={canvasRef} />;
};
