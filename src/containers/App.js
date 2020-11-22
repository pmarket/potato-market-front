import React, { useEffect, useState } from 'react';
import Routes from 'routes';
import Navigator from 'components/navigator/Navigator';
import AuthService from './AuthService';
import Header from './Header';

const App = () => {
  const [googleProfile, setGoogleProfile] = useState({});
  const [state, setState] = React.useState({
    nav: false,
    toolTipsOpen: false,
  });
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
      <div className="navheader">
        <Navigator
          navOpen={state.navOpen}
          navigationDrawersHandler={navigationDrawersHandler}
        />
        <Header />
      </div>
      <Routes
        googleProfile={googleProfile}
        setGoogleProfile={setGoogleProfile}
      />
    </>
  );
};

export default App;
