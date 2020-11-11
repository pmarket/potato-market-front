import React from 'react';
import { Dialog as BaseDialog } from '@material-ui/core';

const Modal = ({ children, toolTipsOpen, handleCloseTooltips }) => {
  return (
    <BaseDialog
      open={toolTipsOpen}
      maxWidth="md"
      fullWidth
      onClose={handleCloseTooltips}
      disableEscapeKeyDown="true"
      scroll="body"
    >
      {children}
    </BaseDialog>
  );
};

export default Modal;
