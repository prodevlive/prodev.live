// import { FileContext } from './FileContext';
// import {
//   ContentNode,
//   ContentContainer,
//   ContentType,
//   ContentIndex,
//   ContentViewer,
//   ContentEditor,
// } from 'components';
// import { DataMode } from 'modules';
// import { FileContext, FileForm } from '.';

interface FileContentProps {
  context: string;
}

export function FileContent({ context }: FileContentProps) {
  return null;
  //   const container = ContentNode.fromId('file-container', ContentType.Node);
  //   container.contents = [
  //     ContentNode.fromGroup('file-index-group', 15, [
  //       ContentNode.fromPath(
  //         'file-index',
  //         'file-index',
  //         <ContentIndex
  //           content={context.content}
  //                     // onSelect={context.doRead}
  //           disabled={context.mode !== DataMode.Undefined}
  //         />,
  //       ),
  //     ]),
  //   ];
  //   const selectedFile = context.getSelectedFile();
  //   const elements = [];
  //   switch (context.mode) {
  //     case DataMode.Create:
  //       elements.push(
  //         ContentNode.fromPath(
  //           'content',
  //           'content',
  //           <FileForm context={context} />,
  //         ),
  //       );
  //       break;
  //     case DataMode.Update:
  //       elements.push(
  //         ContentNode.fromPath(
  //           'content',
  //           'content',
  //           <ContentEditor context={context} />,
  //         ),
  //       );
  //       break;
  //     default:
  //       elements.push(
  //         ContentNode.fromPath(
  //           'content',
  //           'content',
  //           <ContentViewer file={selectedFile} />,
  //         ),
  //       );
  //       break;
  //   }

  //   container.contents.push(
  //     ContentNode.fromGroup('file-content', 70, elements),
  //   );

//   container.contents.push(
//     ContentNode.fromGroup('file-help', 15, [
//       ContentNode.fromPath('help', 'help', <div>Help</div>),
//     ]),
//   );
//   return <ContentContainer content={container} />;
}
