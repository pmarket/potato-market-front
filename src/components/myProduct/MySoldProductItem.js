import React from 'react';
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Divider,
  IconButton,
} from '@material-ui/core';

import { Help as HelpIcon } from '@material-ui/icons';

const MySoldProductItem = ({ product, onDetailButtonOnClick }) => {
  return (
    <div>
      <ListItem>
        <ListItemAvatar>
          <Avatar src={product.profile_url} />
        </ListItemAvatar>
        <ListItemText primary={product.name} secondary={product.price} />
        <IconButton onClick={onDetailButtonOnClick}>
          <HelpIcon />
        </IconButton>
      </ListItem>
      <Divider variant="inset" component="li" />
    </div>
  );
};
export default MySoldProductItem;
