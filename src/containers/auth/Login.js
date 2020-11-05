import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import GOOGLE_OAUTH_URL from 'constants/GoogleOAuth';
import axios from 'axios';

const { REACT_APP_API_URI } = process.env;

const Login = () => {
  useEffect(() => {
    axios
      .get(`${REACT_APP_API_URI}/ping`)
      .then((response) => {
        console.log('서버 연결 완료');
      })
      .catch(() => {
        alert('서버와 연결되어 있지 않습니다');
      });
  }, []);
  return (
    <div>
      <Button variant="contained" href={GOOGLE_OAUTH_URL}>
        Continue with Google
      </Button>
    </div>
  );
};

export default Login;
