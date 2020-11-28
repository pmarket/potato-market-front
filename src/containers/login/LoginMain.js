import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import LoginForm from './LoginForm';
import GAMZALOGIN from '../../assets/images/logingamza.jpg';
import './LoginMain.css';

const LoginMain = ({ isloggedin, setIsloggedin }) => {
  const history = useHistory();
  useEffect(() => {
    if (isloggedin) {
      alert('로그아웃 후 이용 가능합니다');
      history.push('/');
    }
  });
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
