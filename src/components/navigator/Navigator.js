import React from 'react';
import {
  Drawer,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

import {
  MoreVert as MoreVertIcon,
  Inbox as InboxIcon,
  Mail as MailIcon,
} from '@material-ui/icons';

import { useHistory } from 'react-router-dom';

const listItemTextStyle = {
  paddingRight: '10vh',
};

const navigatorList = [
  { id: 1, title: '메인 페이지', link: '/' },
  { id: 2, title: '거래 게시판', link: '/board' },
  { id: 4, title: '회원 가입', link: '/signup' },
  { id: 3, title: '마이 페이지', link: '/profile' },
  { id: 5, title: '나의 판매 관리', link: '/myproduct' },
];

const Navigator = ({ navigationDrawersHandler, navOpen }) => {
  const history = useHistory();

  const buttonOnClick = (link) => {
    history.push(link);
  };

  const list = () => (
    <div
      role="presentation"
      onClick={navigationDrawersHandler(false)}
      onKeyDown={navigationDrawersHandler(false)}
    >
      <List>
        {navigatorList.map((navigator, index) => (
          <ListItem
            button
            key={navigator.id}
            onClick={() => buttonOnClick(navigator.link)}
          >
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={navigator.title} style={listItemTextStyle} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <Button onClick={navigationDrawersHandler(true)}>
        <MoreVertIcon fontSize="large" color="action" />
      </Button>
      <Drawer
        anchor="left"
        open={navOpen}
        onClose={navigationDrawersHandler(false)}
      >
        {list()}
      </Drawer>
    </div>
  );
};

export default Navigator;
