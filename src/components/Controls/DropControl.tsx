import React, { FunctionComponent } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export interface DropControlProps {
  id: string;
  value?: string;
  options: { name: string; value: string }[];
  onChange?: (e: { target: { name?: string; value: unknown } }) => void;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
}

export const DropControl: FunctionComponent<DropControlProps> = ({
  id,
  value,
  options,
  onChange,
  disabled,
  required,
  error,
}: DropControlProps) => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
    }),
  );
  const classes = useStyles('');
  const labelId = `${id}-label`;
  let showError;
  let errorMessage;
  if (required && !value) {
    showError = true;
    errorMessage = `${id} is required`;
  } else if (error) {
    showError = true;
    errorMessage = error;
  }
  return (
    <FormControl
      className={classes.formControl}
      disabled={disabled}
      required={required}
      error={error}
    >
      <InputLabel id={labelId}>{id}</InputLabel>
      <Select labelId={labelId} id={id} value={value} onChange={onChange}>
        {options.map(o => (
          <MenuItem key={`${o.name}-${o.value}`} value={o.value}>
            {o.name}
          </MenuItem>
        ))}
      </Select>
      {showError && <FormHelperText>{errorMessage}</FormHelperText>}
    </FormControl>
  );
};
