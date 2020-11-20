import React, { useState } from 'react';
import axios from 'axios';
import { Button, DialogActions, DialogTitle } from '@material-ui/core';
import Dialog from 'elements/Dialog';
import RegisterCard from 'components/product/RegisterCard';

const { REACT_APP_API_URI } = process.env;

const baseImage = 'https://byline.network/wp-content/uploads/2017/07/mac_1.jpg';

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
    const token = localStorage.getItem('token');
    axios
      .post(
        `${REACT_APP_API_URI}/api/v1/product`,
        {
          name,
          price,
          content,
          profileUrl,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        },
      )
      .then(() => {
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
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  const fileOnChange = (e) => {
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    axios
      .post(`${REACT_APP_API_URI}/api/v1/upload`, formData)
      .then((response) => {
        setProfileUrl(response.data.data);
      });
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
