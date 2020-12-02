import React, { FunctionComponent } from 'react';
import {
  Theme,
  createStyles,
  makeStyles,
} from '@material-ui/core/styles';

export const Main: FunctionComponent = ({ children }) => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      main: {
        flexGrow: 1,
      },
    }),
  );
  const classes = useStyles();
  return (
    <div className={classes.main}>
      {children}
    </div>
  );
};
