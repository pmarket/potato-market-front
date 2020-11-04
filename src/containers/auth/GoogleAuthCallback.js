import React, { useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import querystring from 'querystring';

const GoogleAuthCallback = ({ setProfile }) => {
  const history = useHistory();
  useEffect(() => {
    if (window.location.search) {
      const { code } = querystring.parse(window.location.search);
      axios
        .get(`http://localhost:8000/api/v1/auth/google?code=${code}`)
        .then((response) => {
          if (response.data.data.type === 'SIGN_UP') {
            setProfile({
              email: response.data.data.email,
              name: response.data.data.name,
              profileUrl: response.data.data.profileUrl,
            });
            history.push('/auth/signup');
            return;
          }
          history.push('/auth');
          // 로그인 처리
        })
        .catch(() => {
          alert('에러가 발생하였습니다');
        });
    }
  });

  return <>Loading</>;
};

export default GoogleAuthCallback;
