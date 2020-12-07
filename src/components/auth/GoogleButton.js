import React from 'react';
import GOOGLE_OAUTH_URL from 'constants/GoogleOAuth';
import googleIcon from 'assets/icon/google_icon.png';

const GoogleButton = ({ style }) => {
  return (
    <a href={GOOGLE_OAUTH_URL}>
      <img src={googleIcon} alt="google" style={style} />
    </a>
  );
};

export default GoogleButton;
