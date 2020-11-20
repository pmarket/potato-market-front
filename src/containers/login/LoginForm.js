import React, { useState } from 'react';
import './LoginMain.css';
import axios from 'axios';

const { REACT_APP_API_URI } = process.env;

const LoginForm = () => {
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
  //여기작동안됨 개빢치므ㅡㅡㅡㅡㅡ
  const onSubmitLogin = (e) => {
    axios
      .post(
        `${REACT_APP_API_URI}/api/v1/auth/local`,
        {
          email: values.email,
          password: values.password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .then((response) => response.json())
      .then((response) => {
        if (response.data.data) {
          localStorage.setItem('token', response.data.data);
        } else if (!response.data.data) {
          alert('회원이 아닙니다');
        }
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
      </form>
    </div>
  );
};

export default LoginForm;
