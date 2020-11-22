import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Header = () => {
  return (
    <div className="container-header">
      <div className="container-header-login">
        <Link to="/loginmain">
          <button className="btnlogin">로그인</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
