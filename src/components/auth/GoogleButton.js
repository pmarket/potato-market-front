import React from 'react';

import GOOGLE_OAUTH_URL from 'constants/GoogleOAuth';
import googleIcon from 'assets/icon/google_icon.png';

const GoogleButton = () => {
  return (
    <a href={GOOGLE_OAUTH_URL}>
      <img
        src={googleIcon}
        alt="google"
        style={{ marginTop: '20px', width: '100%', height: '70%' }}
      />
    </a>
  );
};

export default GoogleButton;
