import React, { useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import querystring from 'querystring';

const { REACT_APP_API_URI, REACT_APP_REDIRECT_URI } = process.env;

const GoogleAuthCallback = ({ setGoogleProfile }) => {
  const history = useHistory();
  useEffect(() => {
    if (window.location.search) {
      const { code } = querystring.parse(window.location.search);
      axios
        .get(
          `${REACT_APP_API_URI}/api/v1/auth/google?code=${code}&redirectUri=${REACT_APP_REDIRECT_URI}`,
        )
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
    }
  });

  return <>Loading</>;
};

export default GoogleAuthCallback;
