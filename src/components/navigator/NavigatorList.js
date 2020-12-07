import React from 'react';
import { useHistory } from 'react-router-dom';
import { List } from '@material-ui/core';
import {
  Backspace as BackspaceIcon,
  Home as HomeIcon,
} from '@material-ui/icons';

import NavigationItem from 'components/navigator/NavigationItem';
import NavigationCustomItem from 'components/navigator/NavigationCustomItem';

const navigatorList = [
  { id: 2, title: '거래 게시판', link: '/board', logout: false, login: true },
  {
    id: 3,
    title: '판매 관리',
    link: '/board/myboard',
    logout: false,
    login: true,
  },
  {
    id: 4,
    title: '회원 가입',
    link: '/auth/signup',
    logout: true,
    login: false,
  },
  { id: 5, title: '로그인', link: '/auth/login', logout: true, login: false },
  {
    id: 6,
    title: '마이 페이지',
    link: '/auth/profile',
    logout: false,
    login: true,
  },
];

const NavigatorList = ({ navigationDrawersHandler, isloggedin }) => {
  const history = useHistory();

  const buttonOnClick = (link) => {
    history.push(link);
  };

  const buttonGoBackOnClick = () => {
    history.goBack(1);
  };
  return (
    <div
      role="presentation"
      onClick={navigationDrawersHandler(false)}
      onKeyDown={navigationDrawersHandler(false)}
    >
      <List>
        <NavigationCustomItem
          title="뒤로가기"
          buttonOnClick={buttonGoBackOnClick}
        >
          <BackspaceIcon />
        </NavigationCustomItem>
        <NavigationCustomItem
          title="메인 페이지"
          buttonOnClick={() => buttonOnClick('/')}
        >
          <HomeIcon />
        </NavigationCustomItem>
        {isloggedin ? (
          <div>
            {navigatorList
              .filter((navigator) => navigator.login)
              .map((navigator, index) => (
                <NavigationItem
                  buttonOnClick={() => {
                    buttonOnClick(navigator.link);
                  }}
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
                  buttonOnClick={() => {
                    buttonOnClick(navigator.link);
                  }}
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
