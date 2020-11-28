import React from 'react';
import ButtonSignUp from 'elements/ButtonSignUp';
import './Home.css';

const Home = ({ isloggedin }) => {
  return (
    <div className="container">
      <h1>POTATO MARKET</h1>
      <p>대학생 학우들을 위한 중고 마켓!</p>
      <div className="btns">
        {isloggedin ? (
          <></>
        ) : (
          <ButtonSignUp
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            회원가입
          </ButtonSignUp>
        )}
      </div>
    </div>
  );
};

export default Home;
