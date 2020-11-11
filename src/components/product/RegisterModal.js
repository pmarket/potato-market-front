import React from 'react';
import axios from 'axios';
import { Button, DialogActions, DialogTitle } from '@material-ui/core';
import Dialog from 'elements/Dialog';
import RegisterCard from 'components/product/RegisterCard';

const { REACT_APP_API_URI } = process.env;

const RegisterModal = ({ toolTipsOpen, handleCloseTooltips }) => {
  const [name, setName] = React.useState('');
  const [price, setPrice] = React.useState(0);
  const [content, setContent] = React.useState('');

  const clearField = () => {
    setName('');
    setPrice(0);
    setContent('');
  };

  const handleOnCloseTooltips = () => {
    handleCloseTooltips();
    clearField();
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleOnChangePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleOnChangeContent = (event) => {
    setContent(event.target.value);
  };

  const onClickRegisterButton = async () => {
    if (!(name && price && content)) {
      alert('정보를 입력해주세요!');
      return;
    }
    try {
      await axios.post(`${REACT_APP_API_URI}/api/v1/product`, {
        name,
        price,
        content,
      });
      alert('등록 되었습니다!');
      clearField();
    } catch {
      alert('에러가 발생하였습니다');
    }
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
        content={content}
        handleChange={handleChange}
        handleOnChangePrice={handleOnChangePrice}
        handleOnChangeContent={handleOnChangeContent}
      />
      <DialogActions>
        <Button onClick={handleOnCloseTooltips} color="primary">
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
