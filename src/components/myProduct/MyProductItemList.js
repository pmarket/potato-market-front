import React from 'react';
import { Grid, ListItemSecondaryAction } from '@material-ui/core';

import MyProductItem from 'components/myProduct/MyProductItem';
import DeleteButton from 'components/myProduct/DeleteButton';
import SoldOutButton from 'components/myProduct/SoldOutBotton';

const MyProductItemList = ({
  myProducts,
  onDetailButtonOnClick,
  onDeleteButtonClick,
  deleteButton,
  onSoldOutButtonClick,
}) => {
  return (
    <Grid item xs={6} md={12}>
      {myProducts.map((product) => {
        return (
          <MyProductItem
            key={product.id}
            product={product}
            onDetailButtonOnClick={() => {
              onDetailButtonOnClick(product.id);
            }}
          >
            {deleteButton ? (
              <ListItemSecondaryAction>
                <SoldOutButton
                  product={product}
                  onSoldOutButtonClick={onSoldOutButtonClick}
                />
                <DeleteButton
                  product={product}
                  onDeleteButtonClick={onDeleteButtonClick}
                />
              </ListItemSecondaryAction>
            ) : (
              <></>
            )}
          </MyProductItem>
        );
      })}
    </Grid>
  );
};
export default MyProductItemList;
