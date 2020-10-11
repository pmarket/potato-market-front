import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const TooltipsDialog = ({ toolTipsOpen, handleCloseTooltips }) => {
  return (
    <Dialog
      open={toolTipsOpen}
      maxWidth="sm"
      fullWidth
      onClose={handleCloseTooltips}
    >
      <DialogTitle id="alert-dialog-slide-title">Test</DialogTitle>
      <DialogContent>
        <DialogContentText>Dialog Test</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseTooltips} color="primary">
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default TooltipsDialog;
