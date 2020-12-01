import { FunctionComponent } from 'react';
// import {
//   Footer,
//   UploadButton,
//   HelpButton,
//   ContentNode,
//   ContentType,
//   FooterButton,
// } from 'components';
// import AddCircleIcon from '@material-ui/icons/AddCircle';
// import EditIcon from '@material-ui/icons/Edit';
// import CancelIcon from '@material-ui/icons/Cancel';
// import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
// import CheckCircleIcon from '@material-ui/icons/CheckCircle';
// import { DataMode } from 'modules';
import { FileContext } from './FileContext';

interface FileFooterProps {
  context: FileContext;
}

export const FileFooter: FunctionComponent<FileFooterProps> = ({
  context,
}: FileFooterProps) => {
  return null;
//   const loadButtons = (buttons: ReactNode[], selected: ContentNode) => {
//     switch (selected.type) {
//       case ContentType.Root:
//         buttons.push(
//           <FooterButton
//             key={`${selected.key}-footer-create-button`}
//             name="create"
//             icon={<AddCircleIcon />}
//             onClick={context.doCreate}
//           />,
//         );
//         buttons.push(
//           <UploadButton
//             key={`${selected.key}-footer-upload-button`}
//             onUpload={context.doUpload}
//           />,
//         );
//         break;
//       case ContentType.Node:
//         buttons.push(
//           <FooterButton
//             key={`${selected.key}-footer-create-button`}
//             name="create"
//             icon={<AddCircleIcon />}
//             onClick={context.doCreate}
//           />,
//         );
//         buttons.push(
//           <UploadButton
//             key={`${selected.key}-footer-upload-button`}
//             onUpload={context.doUpload}
//           />,
//         );
//         buttons.push(
//           <FooterButton
//             key={`${selected.key}-footer-delete-button`}
//             name="delete"
//             icon={<DeleteForeverIcon />}
//             onClick={context.doDelete}
//           />,
//         );
//         break;
//       default:
//         buttons.push(
//           <FooterButton
//             key={`${selected.key}-footer-edit-button`}
//             name="edit"
//             icon={<EditIcon />}
//             onClick={context.doUpdate}
//           />,
//         );
//         buttons.push(
//           <FooterButton
//             key={`${selected.key}-footer-delete-button`}
//             name="delete"
//             icon={<DeleteForeverIcon />}
//             onClick={context.doDelete}
//           />,
//         );
//         break;
//     }
//   };
//   const buttons: ReactNode[] = [];
//   const selected = context.content.getSelected();
//   if (selected) {
//     if (context.mode === DataMode.Undefined) {
//       loadButtons(buttons, selected);
//     } else {
//       buttons.push(
//         <FooterButton
//           key={`${selected.key}-footer-save-button`}
//           name="save"
//           icon={<CheckCircleIcon />}
//           onClick={context.doSave}
//         />,
//       );
//       buttons.push(
//         <FooterButton
//           key={`${selected.key}-footer-cancel-button`}
//           name="cancel"
//           icon={<CancelIcon />}
//           onClick={context.doCancel}
//         />,
//       );
//     }
//   }
//   buttons.push(<HelpButton key="footer-help-button" />);
//   return <Footer>{buttons}</Footer>;
};
