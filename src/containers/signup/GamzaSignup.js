import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Form from 'components/signup/Form';

const GamzaSignup = ({ isloggedin }) => {
  const history = useHistory();
  useEffect(() => {
    if (isloggedin) {
      alert('로그아웃 후 이용 가능합니다');
      history.push('/');
    }
  });
  return (
    <div>
      <Form />
    </div>
  );
};

export default GamzaSignup;
