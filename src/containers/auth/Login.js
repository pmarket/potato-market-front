import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import GOOGLE_OAUTH_URL from 'constants/GoogleOAuth';
import axios from 'axios';

const { REACT_APP_API_URI } = process.env;

const Login = () => {
  const [profile, setProfile] = useState({
    email: '',
    name: '',
    profileUrl: '',
  });

  const authToken = localStorage.getItem('token');

  useEffect(() => {
    axios
      .get(`${REACT_APP_API_URI}/api/v1/member`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        setProfile(response.data.data);
      });
  }, [authToken]);

  return (
    <div>
      <div>
        <h2>로그인 사용자</h2>
        <h4>{profile.email}</h4>
        <h4>{profile.name}</h4>
      </div>

      <Button variant="contained" href={GOOGLE_OAUTH_URL}>
        Continue with Google
      </Button>
    </div>
  );
};

export default Login;
