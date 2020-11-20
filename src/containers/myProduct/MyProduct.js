import React, { useEffect, useState } from 'react';
import { makeStyles, List, Grid, Typography } from '@material-ui/core';
import axios from 'axios';

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
        alert(error.response.message);
      });
  }, []);

  const onDeleteButtonClick = () => {
    alert('삭제');
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
