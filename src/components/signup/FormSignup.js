import React from 'react';
import { Link } from 'react-router-dom';

import GoogleButton from 'components/auth/GoogleButton';
import useForm from 'components/signup/useForm';
import validate from 'components/signup/validateInfo';
import 'components/signup/Form.css';

const FormSignup = () => {
  const { handleChange, values, handleSubmit, errors } = useForm(validate);
  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>CREATE YOUR ACCOUNT</h1>

        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            이메일
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="이메일을 입력하시오"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            비밀번호
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="form-input"
            placeholder="비밀번호를 입력하시오"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="password2" className="form-label">
            비밀번호 확인
          </label>
          <input
            id="password2"
            type="password"
            name="password2"
            className="form-input"
            placeholder="비밀번호 확인"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            닉네임
          </label>
          <input
            id="username"
            type="text"
            name="username"
            className="form-input"
            placeholder="닉네임을 입력하시오"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <button className="form-input-btn" type="submit">
          회원가입하기
        </button>
        <span className="form-input-login">
          이미 아이디가 있으신가요? 로그인 <Link to="/loginmain">HERE</Link>
        </span>
        <GoogleButton
          style={{ marginTop: '20px', width: '100%', height: '70%' }}
        />
      </form>
    </div>
  );
};

export default FormSignup;
