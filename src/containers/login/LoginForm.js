import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import GoogleButton from 'components/auth/GoogleButton';
import './LoginMain.css';

const { REACT_APP_API_URI } = process.env;

const LoginForm = () => {
  const history = useHistory();
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const OnChangeLogin = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const onSubmitLogin = (e) => {
    e.preventDefault();
    axios
      .post(`${REACT_APP_API_URI}/api/v1/auth/local`, {
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        localStorage.setItem('token', response.data.data);
        history.push('/board');
      })
      .catch((error) => {
        alert(error.response.data.message);
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
            value={values.email}
            onChange={OnChangeLogin}
            className="login-input"
            placeholder="이메일을 입력하시오"
          />
        </div>
        <div className="login-inputs">
          <label className="login-label">비밀번호</label>
          <input
            type="password"
            name="password"
            onChange={OnChangeLogin}
            value={values.password}
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
