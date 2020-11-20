import React from 'react';
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@material-ui/core';

const MyProductItem = ({ children, product, onDetailButtonOnClick }) => {
  return (
    <div>
      <ListItem button onClick={onDetailButtonOnClick} dense divider>
        <ListItemAvatar>
          <Avatar src={product.profile_url} />
        </ListItemAvatar>
        <ListItemText primary={product.name} secondary={product.price} />
        {children}
      </ListItem>
    </div>
  );
};
export default MyProductItem;
