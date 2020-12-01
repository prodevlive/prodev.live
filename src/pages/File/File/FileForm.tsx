import { FunctionComponent } from 'react';
// import { TextControl } from 'components';
// import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
import { FileContext } from './FileContext';

interface FileFormProps {
  context: FileContext;
}

export const FileForm: FunctionComponent<FileFormProps> = ({
  context,
}: FileFormProps) => {
  return null;
//   const [item, setItem] = useState({ ...context.item });
//   const useStyles = makeStyles((theme: Theme) =>
//     createStyles({
//       grid: {
//         flexGrow: 1,
//       },
//       details: {
//         alignItems: 'center',
//       },
//       text: {
//         marginLeft: theme.spacing(1),
//         marginRight: theme.spacing(1),
//         width: '50%',
//       },
//     }),
//   );
//   const classes = useStyles();
//   return (
//     <Grid container className={classes.grid} spacing={2}>
//       <Grid item xs={12}>
//         <TextControl
//           id="file-form-id"
//           label="id"
//           value={item.id}
//           disabled
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <TextControl
//           id="file-form-url"
//           label="url"
//           value={item.url}
//           disabled
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <TextControl
//           id="file-form-path"
//           label="path"
//           value={item.path}
//           disabled
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <TextControl
//           id="file-form-name"
//           label="name"
//           value={item.name}
//           onChange={(id, value) => {
//             context.setName(value);
//             const newItem = { ...context.item };
//             setItem(newItem);
//           }}
//         />
//       </Grid>
//     </Grid>
//   );
};
