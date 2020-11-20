import React from 'react';
import LoginForm from './LoginForm';
import './LoginMain.css';

const LoginMain = () => {
  return (
    <div className="login-container">
      <div className="login-container-top">
        <img src="img/logingamza.jpg" alt="logingz" className="form-img" />
      </div>
      <LoginForm />
    </div>
  );
};

export default LoginMain;
