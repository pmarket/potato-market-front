import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LoginMain.css';
import AuthService from '../AuthService';

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

  // e.preventDefault();
  // axios
  //   .post(`${REACT_APP_API_URI}/api/v1/auth/local`, {
  //     email: values.email,
  //     password: values.password,
  //   })
  //   .then((response) => {
  //     localStorage.setItem('token', response.data.data);
  //     history.push('/board');
  //   })
  //   .catch((error) => {
  //     alert(error.response.data.message);
  //   });

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
      </form>
    </div>
  );
};

export default LoginForm;
