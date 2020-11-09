import React, { useState } from 'react';
import Routes from 'routes';

const App = () => {
  const [profile, setProfile] = useState({});

  return (
    <>
      <Routes profile={profile} setProfile={setProfile} />
    </>
  );
};

export default App;
