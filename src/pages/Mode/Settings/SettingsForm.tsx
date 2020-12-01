import React, { FunctionComponent } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import { DropControl, SwitchControl } from 'components';
// import { StyleTheme } from '.';

export const SettingsForm: FunctionComponent = () => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      grid: {
        flexGrow: 1,
        maxWidth: '90%',
      },
      gridItem: {
        flexGrow: 1,
      },
    }),
  );
  const classes = useStyles();
  return (
    <Grid container className={classes.grid} spacing={2}>
      <Grid item className={classes.gridItem} xs={12}>
        {/* <DropControl
          id="theme"
                    // value={context.mode.item.settings.theme.toString()}
          options={[
            { name: 'dark', value: StyleTheme.Dark.toString() },
            {
              name: 'light',
              value: StyleTheme.Light.toString(),
            },
          ]}
        /> */}
      </Grid>
      <Grid item className={classes.gridItem} xs={12}>
        {/* <SwitchControl
          id="audio"
        /> */}
      </Grid>
    </Grid>
  );
};
