import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export interface ModalProps {
  open: boolean;
  title: string;
  message: string;
  confirm?: string;
  deny?: string;
  onDone?: (confirm: boolean) => void;
}

export function Modal({
  open = false,
  title = 'do you agree?',
  message = 'to this',
  confirm = 'yes',
  deny = 'no',
  onDone = (c: boolean) => {},
}: ModalProps) {
  const doAgree = () => {
    onDone(true);
  };
  const doClose = () => {
    onDone(false);
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={doClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={doClose} color="primary">
            {deny}
          </Button>
          <Button onClick={doAgree} color="primary" autoFocus>
            {confirm}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
