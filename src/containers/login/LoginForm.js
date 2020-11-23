import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import GoogleButton from 'components/auth/GoogleButton';
import AuthApi from 'apis/AuthApi';
import AuthService from 'services/AuthService';
import './LoginMain.css';

const LoginForm = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const OnChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const OnChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthApi.localLogin(email, password);
      AuthService.setAuthToken(response.data.data);
      history.push('/board');
    } catch (error) {
      alert(error.response.data.message);
    }
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
