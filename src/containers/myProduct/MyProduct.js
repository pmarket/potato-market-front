import React, { useEffect, useState } from 'react';
import { makeStyles, List, Grid, Typography } from '@material-ui/core';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import MySellingProductItem from 'components/myProduct/MySellingProductItem';
import MySoldProductItem from 'components/myProduct/MySoldProductItem';

const { REACT_APP_API_URI } = process.env;

const useStyles = makeStyles(() => ({
  root: {
    marginLeft: '7%',
    width: '86%',
  },
  title: {
    textAlign: 'center',
    marginTop: '8%',
    marginBottom: '8%',
  },
}));

export default function MyProduct() {
  const classes = useStyles();
  const history = useHistory();
  const [myProducts, setMyProducts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios
      .get(`${REACT_APP_API_URI}/api/v1/product/my`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        setMyProducts(response.data.data);
      })
      .catch((error) => {
        alert(error.response.data.message);
        history.push('/signup');
      });
  }, [history]);

  const onDeleteButtonClick = (productId) => {
    if (!window.confirm('정말 삭제하시겠습니까?')) {
      return;
    }

    const token = localStorage.getItem('token');
    axios
      .delete(`${REACT_APP_API_URI}/api/v1/product?productId=${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then(() => {
        setMyProducts(myProducts.filter((product) => product.id !== productId));
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  const onUpdateButtonOnClick = () => {
    alert('수정 기능');
  };

  const onDetailButtonOnClick = () => {
    alert('세부 정보 버튼');
  };

  return (
    <div className={classes.root}>
      <List>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" className={classes.title}>
              판매 중인 물건 리스트
            </Typography>
            {myProducts
              .filter((product) => !product.is_sold)
              .map((product) => {
                return (
                  <MySellingProductItem
                    key={product.id}
                    product={product}
                    onDeleteButtonClick={onDeleteButtonClick}
                    onUpdateButtonOnClick={onUpdateButtonOnClick}
                    onDetailButtonOnClick={onDetailButtonOnClick}
                  />
                );
              })}
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" className={classes.title}>
              판매 완료된 물건 리스트
            </Typography>
            {myProducts
              //   .filter((product) => product.is_sold)
              .map((product) => {
                return (
                  <MySoldProductItem
                    key={product.id}
                    product={product}
                    onDetailButtonOnClick={onDetailButtonOnClick}
                  />
                );
              })}
          </Grid>
        </Grid>
      </List>
    </div>
  );
}
