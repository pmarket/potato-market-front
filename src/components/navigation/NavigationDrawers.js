import React from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const NavigationDrawers = ({ navigationDrawersHandler, navOpen }) => {
  const list = () => (
    <div
      role="presentation"
      onClick={navigationDrawersHandler(false)}
      onKeyDown={navigationDrawersHandler(false)}
    >
      <List>
        {['Navigation1', 'Navigation2', 'Navigation3', 'Navigation4'].map(
          (text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ),
        )}
      </List>
    </div>
  );

  return (
    <div>
      <Button onClick={navigationDrawersHandler(true)}>
        <MoreVertIcon fontSize="large" color="action" />
      </Button>
      <Drawer
        anchor="top"
        open={navOpen}
        onClose={navigationDrawersHandler(false)}
      >
        {list()}
      </Drawer>
    </div>
  );
};

export default NavigationDrawers;
