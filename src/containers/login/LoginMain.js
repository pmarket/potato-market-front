import React from 'react';
import LoginForm from './LoginForm';
import GAMZALOGIN from '../../assets/images/logingamza.jpg';
import './LoginMain.css';

const LoginMain = ({ setIsloggedin }) => {
  return (
    <div className="login-container">
      <div className="login-container-top">
        <img src={GAMZALOGIN} alt="login" className="login-img" />
      </div>
      <LoginForm setIsloggedin={setIsloggedin} />
    </div>
  );
};

export default LoginMain;
