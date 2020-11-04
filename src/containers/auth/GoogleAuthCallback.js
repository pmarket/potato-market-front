import React, { useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import querystring from 'querystring';

const GoogleAuthCallback = () => {
  const history = useHistory();
  useEffect(() => {
    if (window.location.search) {
      const { code } = querystring.parse(window.location.search);
      axios
        .get(`http://localhost:8000/api/v1/auth/google?code=${code}`)
        .then((response) => {
          if (response.data.type === 'SIGN_UP') {
            history.push('/auth');
            // 회원 가입 처리
          }
          history.push('/');
          // 로그인 처리
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });

  return <>Loading</>;
};

export default GoogleAuthCallback;
