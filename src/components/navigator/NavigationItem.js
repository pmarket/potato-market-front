import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Inbox as InboxIcon, Mail as MailIcon } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

const listItemTextStyle = {
  paddingRight: '10vh',
};

const NavigationItem = ({ navigator, index }) => {
  const history = useHistory();

  const buttonOnClick = (link) => {
    history.push(link);
  };
  return (
    <ListItem button onClick={() => buttonOnClick(navigator.link)}>
      <ListItemIcon>
        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
      </ListItemIcon>
      <ListItemText primary={navigator.title} style={listItemTextStyle} />
    </ListItem>
  );
};

export default NavigationItem;
