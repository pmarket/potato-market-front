import React, { useState } from 'react';
import { Button, DialogActions, DialogTitle } from '@material-ui/core';
import Dialog from 'elements/Dialog';
import RegisterCard from 'components/product/RegisterCard';
import ProductApi from 'apis/ProductApi';
import UploadApi from 'apis/UploadApi';
import baseImage from 'assets/images/gamza1.jpg';

const RegisterModal = ({
  toolTipsOpen,
  handleCloseTooltips,
  products,
  setProducts,
}) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [content, setContent] = useState('');
  const [profileUrl, setProfileUrl] = useState(baseImage);

  const clearField = () => {
    setName('');
    setPrice(0);
    setContent('');
    setProfileUrl(baseImage);
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
    if (!(name && price)) {
      alert('정보를 입력해주세요!');
      return;
    }
    try {
      await ProductApi.registerProduct(name, price, content, profileUrl);
      clearField();
      handleCloseTooltips();
      setProducts(
        products.concat({
          id: products[products.length - 1].id + 1,
          name,
          price,
          content,
          profile_url: profileUrl,
        }),
      );
      window.location.reload();
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const fileOnChange = async (e) => {
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    const response = await UploadApi.uploadFile(formData);
    setProfileUrl(response.data.data);
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
        profileUrl={profileUrl}
        fileOnChange={fileOnChange}
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
