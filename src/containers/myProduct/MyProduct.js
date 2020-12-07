import React, { useEffect, useState } from 'react';
import { makeStyles, List, Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';

import ProductApi from 'apis/ProductApi';
import MyProductItemList from 'components/myProduct/MyProductItemList';

const useStyles = makeStyles(() => ({
  root: {
    marginLeft: '10%',
    width: '80%',
  },
  bottom: {
    backgroundColor: '#eacca8',
    position: 'fixed',
    width: '100%',
    bottom: 0,
  },
  list: {
    marginTop: '10%',
    backgroundColor: 'white',
  },
}));

export default function MyProduct() {
  const classes = useStyles();
  const history = useHistory();
  const [myProducts, setMyProducts] = useState([]);
  const [isChanged, setIsChanged] = useState(false);
  const [isSoldout, setIsSoldOut] = React.useState(false);

  useEffect(() => {
    ProductApi.retrieveMyProduct()
      .then((response) => {
        setMyProducts(response.data.data);
      })
      .catch((error) => {
        alert(error.response.data.message);
        history.push('/');
      });
  }, [history, isChanged]);

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
    history.push(`/board/detail/${productId}`);
  };

  const onSoldOutButtonClick = async (productId) => {
    if (!window.confirm('판매완료 하시겠습니까?')) {
      return;
    }
    try {
      await ProductApi.soldMyProduct(productId);
      setIsChanged(!isChanged);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div>
      <div className={classes.root}>
        <List className={classes.list}>
          <Grid container spacing={2} alignContent="center">
            {isSoldout ? (
              <MyProductItemList
                myProducts={myProducts.filter((product) => product.is_sold)}
                onDetailButtonOnClick={onDetailButtonOnClick}
              />
            ) : (
              <MyProductItemList
                myProducts={myProducts.filter((product) => !product.is_sold)}
                onDetailButtonOnClick={onDetailButtonOnClick}
                onDeleteButtonClick={onDeleteButtonClick}
                onSoldOutButtonClick={onSoldOutButtonClick}
                deleteButton
              />
            )}
          </Grid>
        </List>
      </div>
      <BottomNavigation
        value={isSoldout}
        onChange={(event, newValue) => {
          setIsSoldOut(newValue);
        }}
        showLabels
        className={classes.bottom}
      >
        <BottomNavigationAction
          label="판매 중인 상품"
          value={false}
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          label="판매 완료 상품"
          value
          icon={<FavoriteIcon />}
        />
      </BottomNavigation>
    </div>
  );
}
