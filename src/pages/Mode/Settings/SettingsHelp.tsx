import React, { FunctionComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const SettingsHelp: FunctionComponent = () => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      grid: {
        flexGrow: 1,
      },
    }),
  );
  const classes = useStyles('');
  return (
    <Grid container className={classes.grid} spacing={2}>
      <Grid item xs={12}>
        <Typography>Settings - help</Typography>
      </Grid>
    </Grid>
  );
};
