import React from 'react';

const FormSignup = () => {
  return (
    <div className="form-content-right">
      <form className="form">
        <h1>CREATE YOUR ACCOUNT</h1>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            아이디
          </label>
          <input
            id="username"
            type="text"
            name="username"
            className="form-input"
            placeholder="아이디를 입력하시오"
          />
        </div>
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
          />
        </div>

        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            비밀번호
          </label>
          <input
            id="password"
            type="text"
            name="password"
            className="form-input"
            placeholder="비밀번호를 입력하시오"
          />
        </div>

        <div className="form-inputs">
          <label htmlFor="password2" className="form-label">
            비밀번호 확인
          </label>
          <input
            id="password2"
            type="text"
            name="password2"
            className="form-input"
            placeholder="비밀번호 확인"
          />
        </div>
      </form>
    </div>
  );
};

export default FormSignup;
