import React from 'react';
import { Grid, Typography, ListItemSecondaryAction } from '@material-ui/core';

import MyProductItem from 'components/myProduct/MyProductItem';
import DeleteButton from 'components/myProduct/DeleteButton';

const MyProductItemList = ({
  myProducts,
  onDetailButtonOnClick,
  onDeleteButtonClick,
  title,
  deleteButton,
}) => {
  return (
    <Grid item xs={12} md={6}>
      <Typography variant="h6" align="center" gutterBottom>
        {title}
      </Typography>
      {myProducts
        .filter((product) => !product.is_sold)
        .map((product) => {
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
            </MyProductItem>
          );
        })}
    </Grid>
  );
};
export default MyProductItemList;
