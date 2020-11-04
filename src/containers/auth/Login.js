import React from 'react';
import Button from '@material-ui/core/Button';
import GOOGLE_OAUTH_URL from 'constants/GoogleOAuth';

const Login = () => {
  return (
    <div>
      <Button variant="contained" href={GOOGLE_OAUTH_URL}>
        Google OAuth
      </Button>
    </div>
  );
};

export default Login;
