import React, { useEffect, useState } from 'react';
import { makeStyles, List, Grid } from '@material-ui/core';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import MyProductItemList from 'components/myProduct/MyProductItemList';

const { REACT_APP_API_URI } = process.env;

const useStyles = makeStyles(() => ({
  root: {
    marginLeft: '7%',
    width: '86%',
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

  const onDetailButtonOnClick = () => {
    alert('세부 정보 버튼');
  };

  return (
    <div className={classes.root}>
      <List>
        <Grid container spacing={2} alignContent="center">
          <MyProductItemList
            myProducts={myProducts}
            onDetailButtonOnClick={onDetailButtonOnClick}
            onDeleteButtonClick={onDeleteButtonClick}
            title="판매 중인 리스트"
            deleteButton
          />
          <MyProductItemList
            myProducts={myProducts}
            // myProducts={myProducts.filter((product) => product.is_sold)}
            onDetailButtonOnClick={onDetailButtonOnClick}
            title="판매 완료된 물건 리스트 (임시 데이터)"
          />
        </Grid>
      </List>
    </div>
  );
}
