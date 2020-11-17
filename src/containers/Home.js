import ButtonSignUp from 'elements/ButtonSignUp';
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="container">
      <h1>POTATO MARKET</h1>
      <p>한세대 학우를 위한 중고마켓!</p>
      <div className="btns">
        <ButtonSignUp
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          회원가입
        </ButtonSignUp>
      </div>
    </div>
  );
};

export default Home;
