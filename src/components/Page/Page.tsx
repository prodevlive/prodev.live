import React, { FunctionComponent } from 'react';
import {
  Theme,
  createStyles,
  makeStyles,
} from '@material-ui/core/styles';

export const Page: FunctionComponent = ({ children }) => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      app: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      },
    }),
  );
  const classes = useStyles();
  return (
    <div className={classes.app}>
      {children}
    </div>
  );
};
