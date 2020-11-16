import React, { useState } from 'react';
import Routes from 'routes';
import Navigator from 'components/navigator/Navigator';
import Form from './Form';

const App = () => {
  const [profile, setProfile] = useState({});
  const [state, setState] = React.useState({
    nav: false,
    toolTipsOpen: false,
  });
  const [token, setToken] = useState(localStorage.getItem('token'));

  const navigationDrawersHandler = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, navOpen: open });
  };
  return (
    <>
      <Navigator
        navOpen={state.navOpen}
        navigationDrawersHandler={navigationDrawersHandler}
      />
      <Routes
        profile={profile}
        setProfile={setProfile}
        token={token}
        setToken={setToken}
      />
      <div>
        <Form />
      </div>
    </>
  );
};

export default App;
