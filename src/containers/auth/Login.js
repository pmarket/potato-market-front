import React, { useState, useEffect } from 'react';
import Tooltips from 'components/tooltips/Tooltips';
import TooltipsDialog from 'components/tooltips/TooltipsDialog';

import GOOGLE_OAUTH_URL from 'constants/GoogleOAuth';
import axios from 'axios';
import googleIcon from '../../assets/icon/google_icon.png';

const { REACT_APP_API_URI } = process.env;

const Login = () => {
  const [profile, setProfile] = useState({
    email: '',
    name: '',
    profileUrl: '',
  });
  const [state, setState] = React.useState({
    nav: false,
    toolTipsOpen: false,
  });

  const handleCloseTooltips = () => {
    setState({ ...state, toolTipsOpen: false });
  };

  const handleOnClickTooltips = () => {
    setState({ ...state, toolTipsOpen: true });
  };

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
        <h2>로그인 테스트</h2>
        <h4>{profile.email}</h4>
        <h4>{profile.name}</h4>
      </div>

      <a href={GOOGLE_OAUTH_URL}>
        <img src={googleIcon} alt="google" />
      </a>
      <div>
        <TooltipsDialog
          toolTipsOpen={state.toolTipsOpen}
          handleCloseTooltips={handleCloseTooltips}
        />
        <Tooltips handleOnClickTooltip={handleOnClickTooltips} />
      </div>
    </div>
  );
};

export default Login;
