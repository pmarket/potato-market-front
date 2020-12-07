import React from 'react';
import { Grid, ListItemSecondaryAction } from '@material-ui/core';

import MyProductItem from 'components/myProduct/MyProductItem';
import DeleteButton from 'components/myProduct/DeleteButton';
import SoldOutButton from 'components/myProduct/SoldOutBotton';
import ShowAvatarModal from 'components/myProduct/CommentProfiles';

const MyProductItemList = ({
  myProducts,
  onDetailButtonOnClick,
  onDeleteButtonClick,
  deleteButton,
  onSoldOutButtonClick,
}) => {
  return (
    <Grid item xs={12} md={12}>
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
                <ShowAvatarModal product={product} />

                <SoldOutButton
                  product={product}
                  onSoldOutButtonClick={onSoldOutButtonClick}
                />
                <DeleteButton
                  product={product}
                  onDeleteButtonClick={onDeleteButtonClick}
                  style={{ marginLeft: '35px' }}
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
