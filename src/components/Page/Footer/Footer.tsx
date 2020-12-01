import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';

interface FooterProps {
  children: React.ReactNode;
}

export const Footer: FunctionComponent<FooterProps> = ({
  children,
}: FooterProps) => {
  const useStyles = makeStyles({
    footer: {
    //   position: 'fixed',
    //   bottom: '0px',
      width: '100%',
    //   zIndex: 1300,
    },
  });
  const classes = useStyles('');
  return (
    <BottomNavigation showLabels className={classes.footer}>
      {children}
    </BottomNavigation>
  );
};
