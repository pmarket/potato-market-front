import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Favorite as FavoriteIcon, Loyalty } from '@material-ui/icons';

const listItemTextStyle = {
  paddingRight: '10vh',
};

const NavigationItem = ({ navigator, index, buttonOnClick }) => {
  return (
    <ListItem button onClick={buttonOnClick}>
      <ListItemIcon>
        {index % 2 === 0 ? <FavoriteIcon /> : <Loyalty />}
      </ListItemIcon>
      <ListItemText primary={navigator.title} style={listItemTextStyle} />
    </ListItem>
  );
};

export default NavigationItem;
