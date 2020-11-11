import React from 'react';
import axios from 'axios';
import { Button, DialogActions, DialogTitle } from '@material-ui/core';
import Dialog from 'elements/Dialog';
import RegisterCard from 'components/product/RegisterCard';

const RegisterModal = ({ toolTipsOpen, handleCloseTooltips }) => {
  const [name, setName] = React.useState();
  const [price, setPrice] = React.useState();
  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleOnChangePrice = (event) => {
    setPrice(event.target.value);
  };
  const onClickRegisterButton = () => {
    handleCloseTooltips();
  };
  return (
    <Dialog
      toolTipsOpen={toolTipsOpen}
      handleCloseTooltips={handleCloseTooltips}
    >
      <DialogTitle id="alert-dialog-slide-title">상품 등록하기</DialogTitle>
      <RegisterCard
        name={name}
        price={price}
        handleChange={handleChange}
        handleOnChangePrice={handleOnChangePrice}
      />
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
