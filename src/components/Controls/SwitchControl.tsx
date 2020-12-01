import React, { FunctionComponent } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export interface SwitchControlProps {
  id: string;
  value?: boolean;
  onChange?: (e: { target: { name?: string; value: unknown } }) => void;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
}

export const SwitchControl: FunctionComponent<SwitchControlProps> = ({
  id,
  value,
  onChange,
  disabled,
  required,
  error,
}: SwitchControlProps) => {
  return (
    <FormControlLabel
      label={id}
      style={{ width: '50%' }}
      control={
        <Switch
                    // checked={value}
          onChange={onChange}
          value={value}
          color="primary"
        />
            }
    />
  );
};
