import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MarketLine from 'containers/MarketLine';
import GoogleButton from 'components/auth/GoogleButton';

const { REACT_APP_API_URI } = process.env;

const Login = ({ token }) => {
  const [profile, setProfile] = useState({
    email: '',
    name: '',
    profileUrl: '',
  });

  useEffect(() => {
    axios
      .get(`${REACT_APP_API_URI}/api/v1/member`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        setProfile(response.data.data);
      });
  }, [token]);

  return (
    <div>
      <div>
        <h2>로그인 테스트</h2>
        <h4>{profile.email}</h4>
        <h4>{profile.name}</h4>
      </div>
      <GoogleButton />
      <MarketLine token={token} />
    </div>
  );
};

export default Login;
