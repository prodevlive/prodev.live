import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

export interface SliderControlProps {
  value: number;
  onValueChange: (value: number) => void;
}

export const SliderControl: FunctionComponent<SliderControlProps> = ({
  value,
  onValueChange,
}: SliderControlProps) => {
  const useStyles = makeStyles({
    slider: {
      width: '400px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 600,
    },
  });
  const classes = useStyles('');
  const doChange = (
    event: React.ChangeEvent<{}>,
    newValue: number | number[],
  ) => {
    let newNumber = newValue as number;
    newNumber /= 100;
    onValueChange(newNumber);
  };
  const showValue = value * 100;
  return (
    <div className={classes.slider}>
      <Slider
        value={showValue}
        onChange={doChange}
        valueLabelDisplay="off"
        aria-labelledby="discrete-slider-always"
        getAriaValueText={v => {
          return `${v}%`;
        }}
      />
      {value}
    </div>
  );
};
