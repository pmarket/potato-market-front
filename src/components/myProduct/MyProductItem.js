import React from 'react';
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@material-ui/core';

const MyProductItem = ({ children, product, onDetailButtonOnClick }) => {
  return (
    <ListItem button onClick={onDetailButtonOnClick} divider>
      <ListItemAvatar>
        <Avatar src={product.profile_url} />
      </ListItemAvatar>
      <ListItemText
        primary={product.name}
        secondary={`${product.place} ${product.price}원`}
      />
      {children}
    </ListItem>
  );
};
export default MyProductItem;
