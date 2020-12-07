import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import 'containers/home/Home.css';
import AuthService from 'services/AuthService';

const Header = ({ isloggedin, setIsloggedin }) => {
  useEffect(() => {
    const token = AuthService.getCurrentToken();
    if (token) {
      setIsloggedin(token);
    }
  }, [setIsloggedin]);

  const logOut = () => {
    AuthService.logout();
    setIsloggedin(false);
  };
  return (
    <div className="container-header">
      <div className="container-header-login">
        {isloggedin ? (
          <Link to="/" className="alogin" onClick={logOut}>
            로그아웃
          </Link>
        ) : (
          <Link to="/login" className="alogin">
            로그인
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
