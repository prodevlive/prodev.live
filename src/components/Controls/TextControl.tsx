import React, { FunctionComponent } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export interface TextControlProps {
  id: string;
  label?: string;
  value?: string;
  onChange?: (id: string, value: string) => void;
  disabled?: boolean;
  required?: boolean;
  error?: string;
}

export const TextControl: FunctionComponent<TextControlProps> = ({
  id,
  label,
  value,
  onChange,
  disabled,
  required,
  error,
}: TextControlProps) => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      text: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '80%',
      },
    }),
  );
  let showError;
  let errorMessage;
  if (required && !value) {
    showError = true;
    errorMessage = `${id} is required`;
  } else if (error) {
    showError = true;
    errorMessage = error;
  }
  const classes = useStyles('');
  return (
    <TextField
      id={id}
      label={label || id}
      placeholder={label || id}
      className={classes.text}
      margin="normal"
      value={value}
      onChange={(e: { target: { id: string; value: string } }) => {
        if (onChange) {
          onChange(e.target.id, e.target.value);
        }
      }}
      disabled={disabled}
      required={required}
      error={showError}
      helperText={errorMessage}
    />
  );
};
