import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Form from './Form';

const GamzaSignup = ({ isloggedin, setIsloggedin }) => {
  const history = useHistory();
  useEffect(() => {
    if (isloggedin) {
      alert('로그아웃 후 이용 가능합니다');
      history.push('/');
    }
  });
  return (
    <div>
      <Form setIsloggedin={setIsloggedin} />
    </div>
  );
};

export default GamzaSignup;
