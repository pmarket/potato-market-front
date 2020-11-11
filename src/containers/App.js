import React, { useState } from 'react';
import Routes from 'routes';

const App = () => {
  const [profile, setProfile] = useState({});

  const [token, setToken] = useState(localStorage.getItem('token'));
  return (
    <>
      <Routes
        profile={profile}
        setProfile={setProfile}
        token={token}
        setToken={setToken}
      />
    </>
  );
};

export default App;
