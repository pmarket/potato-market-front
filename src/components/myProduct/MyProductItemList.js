import React from 'react';
import { Grid, Typography, ListItemSecondaryAction } from '@material-ui/core';

import MyProductItem from 'components/myProduct/MyProductItem';
import DeleteButton from 'components/myProduct/DeleteButton';
import SoldOutButton from 'components/myProduct/SoldOutBotton';

const MyProductItemList = ({
  myProducts,
  onDetailButtonOnClick,
  onDeleteButtonClick,
  title,
  deleteButton,
  onSoldOutButtonClick,
}) => {
  return (
    <Grid item xs={12} md={6}>
      <Typography variant="h6" align="center" gutterBottom>
        {title}
      </Typography>
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
                <DeleteButton
                  product={product}
                  onDeleteButtonClick={onDeleteButtonClick}
                />
              </ListItemSecondaryAction>
            ) : (
              <></>
            )}
            {deleteButton ? (
              <ListItemSecondaryAction>
                <SoldOutButton
                  product={product}
                  onSoldOutButtonClick={onSoldOutButtonClick}
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
