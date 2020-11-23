import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import querystring from 'querystring';

import Loading from 'components/loading/Loading';
import AuthApi from 'apis/AuthApi';

const GoogleAuthCallback = ({ setGoogleProfile }) => {
  const history = useHistory();
  useEffect(() => {
    if (!window.location.search) {
      return;
    }
    const { code } = querystring.parse(window.location.search);
    AuthApi.googleLogin(code)
      .then((response) => {
        if (response.data.data.type === 'SIGN_UP') {
          setGoogleProfile(response.data.data);
          history.push('/signup/google');
          return;
        }
        localStorage.setItem('token', response.data.data.token);
        history.push('/board');
      })
      .catch((error) => {
        alert(error.response.data.message);
        history.push('/signup');
      });
  });

  return <Loading />;
};

export default GoogleAuthCallback;
