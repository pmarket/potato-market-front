import React from 'react';
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Divider,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';

import {
  Delete as DeleteIcon,
  Replay as ReplayIcon,
  Help as HelpIcon,
} from '@material-ui/icons';

const MyProductSellingItem = ({
  product,
  onDeleteButtonClick,
  onUpdateButtonOnClick,
  onDetailButtonOnClick,
}) => {
  return (
    <div key={product.id}>
      <ListItem>
        <ListItemAvatar>
          <Avatar src={product.profile_url} />
        </ListItemAvatar>
        <ListItemText primary={product.name} secondary={product.price} />
        <IconButton onClick={onDetailButtonOnClick}>
          <HelpIcon />
        </IconButton>
        <IconButton onClick={onUpdateButtonOnClick}>
          <ReplayIcon />
        </IconButton>
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={onDeleteButtonClick}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider variant="inset" component="li" />
    </div>
  );
};
export default MyProductSellingItem;
