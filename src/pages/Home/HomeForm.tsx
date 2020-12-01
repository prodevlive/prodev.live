import React, { FunctionComponent } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import { TextControl } from 'components';

export const HomeForm: FunctionComponent = () => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      grid: {
        flexGrow: 1,
      },
      text: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '50%',
      },
    }),
  );
  const classes = useStyles('');
  return (
    <Grid container className={classes.grid} spacing={2}>
      <Grid item xs={12}>
        {/* <TextControl
          id="name"
            // value={context.home.item.name}
            // onChange={updateProgramName}
            // error={nameError}
          required
        /> */}
      </Grid>
    </Grid>
  );
};
