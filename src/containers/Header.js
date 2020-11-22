import React, { useEffect, useState } from 'react';
import './Home.css';
import AuthService from './AuthService';

const Header = () => {
  const [isloggedin, setIsloggedin] = useState(undefined);

  useEffect(() => {
    const token = AuthService.getCurrentToken();
    if (token) {
      setIsloggedin(token);
    }
  }, [isloggedin]);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <div className="container-header">
      <div className="container-header-login">
        {isloggedin ? (
          <a href="/">로그아웃</a>
        ) : (
          <a href="/loginmain">로그인</a>
        )}
      </div>
    </div>
  );
};

export default Header;
