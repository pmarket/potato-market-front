import React from 'react';
import Button from '@material-ui/core/Button';
import GOOGLE_OAUTH_URL from 'constants/GoogleOAuth';

const Login = () => {
  return (
    <div>
      <Button variant="contained" href={GOOGLE_OAUTH_URL}>
        Continue with Google
      </Button>
    </div>
  );
};

export default Login;
