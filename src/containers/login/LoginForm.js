import React, { useState } from 'react';
import './LoginMain.css';
import axios from 'axios';

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
  //여기서부터이따구현해보기
  const onSubmitLogin = (e) => {};

  return (
    <div className="login-container-bottom">
      <form className="login">
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
