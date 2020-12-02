import React from 'react';
import { List } from '@material-ui/core';

import NavigationItem from 'components/navigator/NavigationItem';

const navigatorList = [
  { id: 1, title: '메인 페이지', link: '/', logout: true, login: true },
  { id: 2, title: '거래 게시판', link: '/board', logout: false, login: true },
  {
    id: 3,
    title: '나의 판매 관리',
    link: '/myproduct',
    logout: false,
    login: true,
  },
  { id: 4, title: '회원 가입', link: '/signup', logout: true, login: false },
  { id: 5, title: '로그인', link: '/loginmain', logout: true, login: false },
  { id: 6, title: '마이 페이지', link: '/profile', logout: false, login: true },
];

const NavigatorList = ({ navigationDrawersHandler, isloggedin }) => {
  return (
    <div
      role="presentation"
      onClick={navigationDrawersHandler(false)}
      onKeyDown={navigationDrawersHandler(false)}
    >
      <List>
        {isloggedin ? (
          <div>
            {navigatorList
              .filter((navigator) => navigator.login)
              .map((navigator, index) => (
                <NavigationItem
                  navigator={navigator}
                  key={navigator.id}
                  index={index}
                />
              ))}
          </div>
        ) : (
          <div>
            {navigatorList
              .filter((navigator) => navigator.logout)
              .map((navigator, index) => (
                <NavigationItem
                  navigator={navigator}
                  key={navigator.id}
                  index={index}
                />
              ))}
          </div>
        )}
      </List>
    </div>
  );
};

export default NavigatorList;
