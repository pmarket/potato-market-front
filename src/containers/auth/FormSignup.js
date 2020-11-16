import React from 'react';

const FormSignup = () => {
  return (
    <div className="form-content-right">
      <form className="form">
        <h1>Get Started with us today!</h1>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            사용자명
          </label>
          <input
            id="username"
            type="text"
            name="username"
            className="form-input"
            placeholder="사용자명을 입력하시오"
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
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="비밀번호를 입력하시오"
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="password2" className="form-label">
            비밀번호 확인
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="비밀번호를 확인하시오"
          />
        </div>
      </form>
    </div>
  );
};

export default FormSignup;
