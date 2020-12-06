import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

const listItemTextStyle = {
  paddingRight: '10vh',
};

const NavigationItem = ({ children, title, buttonOnClick }) => {
  return (
    <ListItem button onClick={buttonOnClick}>
      <ListItemIcon>{children}</ListItemIcon>
      <ListItemText primary={title} style={listItemTextStyle} />
    </ListItem>
  );
};

export default NavigationItem;
