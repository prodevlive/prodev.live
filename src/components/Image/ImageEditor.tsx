import { FunctionComponent } from 'react';

// import ImageEditor from '@toast-ui/react-image-editor';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'tui-image-editor/dist/tui-image-editor.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'tui-color-picker/dist/tui-color-picker.css';
import './ImageEditor.css';
// import { FileContext } from 'contexts/File/FileContext';

export interface ImageEditorExProps {
  context: string;
}

export const ImageEditorEx: FunctionComponent<ImageEditorExProps> = ({
  context,
}: ImageEditorExProps) => {
  return null;
  //   const editorRef = useRef<typeof ImageEditor>(null);
  //   const file = context.getSelectedFile();
  //   const saveImage = async () => {
  //     if (editorRef.current && editorRef.current.imageEditorInst) {
  //       const editor = editorRef.current.imageEditorInst;
  //       try {
  //         // eslint-disable-next-line no-underscore-dangle
  //         const url = editor._graphics.toDataURL();
  //         const data = await fetch(url);
  //         const blob = await data.blob();
  //         const dataUrl = URL.createObjectURL(blob);
  //         if (file) {
  //           file.blobUrl = dataUrl;
  //         }
  //       } catch (e) {
  //         // console.log(e);
  //       }
  //     }
  //   };
  //   context.doBeforeSave = saveImage;
  //   // UNDO THIS
  //   // useEffect(() => {
  //   //     context.doBeforeUpdate = saveImage;
  //   // }, []);

//   if (!file) {
//     return <div>no file</div>;
//   }
//   return (
//     <>
//       <ImageEditor
//         ref={editorRef}
//         includeUI={{
//           loadImage: {
//             path: file.blobUrl,
//             name: file.name,
//           },
//           // theme: myTheme,
//           // menu: ['shape', 'filter'],
//           // initMenu: 'filter',
//           // uiSize: {
//           //     width: '1000px',
//           //     height: '700px',
//           // },
//           menuBarPosition: 'right',
//         }}
//                 // cssMaxHeight={500}
//                 // cssMaxWidth={700}
//         selectionStyle={{
//           cornerSize: 20,
//           rotatingPointOffset: 70,
//         }}
//         usageStatistics={false}
//       />
//     </>
//   );
};
