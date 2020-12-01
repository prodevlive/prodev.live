import React, { FunctionComponent, useRef, useState } from 'react';
import { SnackbarProvider, useSnackbar } from 'notistack';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { DataResult, DataStatus } from 'models';
import { Modal, ModalProps } from 'components/Modal/Modal';

type UtilityState = {
  state: ModalProps | undefined,
  setState: (state: ModalProps | undefined) => void
};

const UtilityContext = React.createContext<UtilityState | undefined>(undefined);

export const UtilityProvider: FunctionComponent = ({ children }) => {
  const notistackRef = useRef(null);
  const [state, setState] = useState<ModalProps>();
  const onAlertDismiss = (key: string) => () => {
    if (notistackRef.current) {
      const snackbar = (notistackRef.current as unknown) as {
        closeSnackbar: (key: string) => void;
      };
      snackbar.closeSnackbar(key);
    }
  };
  return (
    <UtilityContext.Provider value={{ state, setState }}>
      <SnackbarProvider
        ref={notistackRef}
        action={key => (
          <IconButton
            onClick={onAlertDismiss(key as string)}
            color="inherit"
          >
            <CloseIcon />
          </IconButton>
        )}
      >
        {children}
        <Modal {...state as ModalProps} />
      </SnackbarProvider>
    </UtilityContext.Provider>
  );
};
export function useUtility() {
  const context = React.useContext(UtilityContext);
  if (context === undefined) {
    throw new Error('useUtility must be used within a UtilityProvider');
  }
  const { enqueueSnackbar } = useSnackbar();
  const doAlert = (alert: string) => {
    enqueueSnackbar(alert);
  };
  const doAlertResult = (result: DataResult) => {
    if (!result){
      enqueueSnackbar('undefined result');
      return;
    }
    const message = result.message ? result.message : 'undefined message';
    switch (result.status) {
      case DataStatus.Success:
        enqueueSnackbar(message, { variant: 'success' });
        break;
      case DataStatus.Failure:
        enqueueSnackbar(message, { variant: 'error' });
        break;
      default:
        enqueueSnackbar(message);
        break;
    }
  };
  const doModal = (m: ModalProps) => {
    const { onDone } = m;
    m.onDone = (c: boolean) => {
      context.setState({ ...m, open: false });
      if (onDone) {
        onDone(c);
      }
    };
    context.setState(m);
  };
  const getErrorString = (e: string | { errors: [{ message: string }] }) => {
    if (typeof e === 'string') {
      return e;
    }
    let message = 'exception - ';
    if (e) {
      if (e.errors) {
        e.errors.forEach(error => {message += error.message;});
      } else {
        message += e.toString();
      }
    }
    return message;
  };
  return {
    UtilityProvider,
    doAlert,
    doAlertResult,
    doModal,
    getErrorString,
  };
}