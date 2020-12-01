import React, { FunctionComponent } from 'react';
import { Route, useHistory } from 'react-router-dom';
import { Footer } from 'components/Page/Footer/Footer';
import { FooterButton } from 'components/Page/Footer/FooterButton';
import CancelIcon from '@material-ui/icons/Cancel';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import { useUtility } from 'hooks';
import { HomePaths } from './HomeEnum';

export const HomeFooter: FunctionComponent = () => {
  const history = useHistory();
  const { doAlert, doModal } = useUtility();
  return (
    <Footer>
      <FooterButton
        key="home-footer-register-button"
        name="register"
        icon={<ContactMailIcon />}
        onClick={() => {
          doModal({ open: true, title:'title',  message: 'message', onDone: c => {
            if (c) {
              doAlert('confirmed');
            }
          } });
        //   history.push(HomePaths.Register);
        }}
      />
      <Route exact path={HomePaths.Home}>
        <FooterButton
          key="home-footer-register-button"
          name="register"
          icon={<ContactMailIcon />}
          onClick={() => {
            history.push(HomePaths.Register);
          }}
        />
      </Route>
      <Route exact path={HomePaths.Register}>
        <FooterButton
          key="home-footer-cancel-button"
          name="cancel"
          icon={<CancelIcon />}
          onClick={() => {
            history.push(HomePaths.Home);
          }}
        />
      </Route>
    </Footer>
  );
};
