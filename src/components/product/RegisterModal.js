import React from 'react';
import { Button, DialogActions, DialogTitle } from '@material-ui/core';
import Dialog from 'elements/Dialog';
import RegisterCard from 'components/product/RegisterCard';

const RegisterModal = ({ toolTipsOpen, handleCloseTooltips }) => {
  const onClickRegisterButton = () => {
    handleCloseTooltips();
  };
  return (
    <Dialog
      toolTipsOpen={toolTipsOpen}
      handleCloseTooltips={handleCloseTooltips}
    >
      <DialogTitle id="alert-dialog-slide-title">상품 등록하기</DialogTitle>
      <RegisterCard />
      <DialogActions>
        <Button onClick={handleCloseTooltips} color="primary">
          취소하기
        </Button>
        <Button onClick={onClickRegisterButton} color="primary">
          등록하기
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default RegisterModal;
