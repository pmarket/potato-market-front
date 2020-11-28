import React, { useEffect, useState } from 'react';
import { makeStyles, List, Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import ProductApi from 'apis/ProductApi';
import MyProductItemList from 'components/myProduct/MyProductItemList';

const useStyles = makeStyles(() => ({
  root: {
    marginLeft: '7%',
    width: '86%',
  },
  list: {
    backgroundColor: '#eacca8',
  },
}));

export default function MyProduct() {
  const classes = useStyles();
  const history = useHistory();
  const [myProducts, setMyProducts] = useState([]);

  useEffect(() => {
    ProductApi.retrieveMyProduct()
      .then((response) => {
        setMyProducts(response.data.data);
      })
      .catch((error) => {
        alert(error.response.data.message);
        history.push('/');
      });
  }, [history]);

  const onDeleteButtonClick = async (productId) => {
    if (!window.confirm('정말 삭제하시겠습니까?')) {
      return;
    }
    try {
      await ProductApi.deleteMyProduct(productId);
      setMyProducts(myProducts.filter((product) => product.id !== productId));
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const onDetailButtonOnClick = (productId) => {
    history.push(`/detailpage/${productId}`);
  };

  return (
    <div className={classes.root}>
      <List className={classes.list}>
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
