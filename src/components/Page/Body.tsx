import React, { FunctionComponent } from 'react';
import {
  Theme,
  createStyles,
  makeStyles,
} from '@material-ui/core/styles';

export const Body: FunctionComponent = ({ children }) => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      body: {
        flexGrow: 1,
        display: 'flex',
        margin: '1px',
        border: '1px solid yellow',
      },
    }),
  );
  const classes = useStyles();
  return (
    <div className={classes.body}>
      {children}
    </div>
  );
};
