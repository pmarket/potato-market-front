import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import GoogleButton from 'components/auth/GoogleButton';
import './LoginMain.css';
import AuthService from '../../services/AuthService';

const LoginForm = (props) => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const OnChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const OnChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onSubmitLogin = (e) => {
    e.preventDefault();

    AuthService.login(email, password).then(() => {
      const token = localStorage.getItem('token');
      if (token) {
        history.push('/board');
        window.location.reload();
      } else {
        history.push('/signup');
      }
    });
  };

  return (
    <div className="login-container-bottom">
      <form className="login" onSubmit={onSubmitLogin}>
        <div className="login-inputs">
          <label className="login-label">이메일</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={OnChangeEmail}
            className="login-input"
            placeholder="이메일을 입력하시오"
          />
        </div>
        <div className="login-inputs">
          <label className="login-label">비밀번호</label>
          <input
            type="password"
            name="password"
            onChange={OnChangePassword}
            value={password}
            className="login-input"
            placeholder="비밀번호를 입력하시오"
          />
        </div>
        <button className="login-input-btn" type="submit">
          로그인
        </button>
        <GoogleButton
          style={{
            marginTop: '25px',
            marginLeft: '9%',
            width: '83%',
            height: '70%',
          }}
        />
      </form>
    </div>
  );
};

export default LoginForm;
