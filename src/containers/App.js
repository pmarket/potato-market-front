<<<<<<< HEAD
import React from 'react';
import Routes from 'routes';

const App = () => {
  return (
    <>
      <Routes />
=======
import React, { useState } from 'react';
import Routes from 'routes';
import Navigator from 'components/navigator/Navigator';
import Header from './Header';

const App = () => {
  const [googleProfile, setGoogleProfile] = useState({});
  const [state, setState] = React.useState({
    nav: false,
    toolTipsOpen: false,
  });
  const [isloggedin, setIsloggedin] = useState(undefined);

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
          isloggedin={isloggedin}
        />
        <Header isloggedin={isloggedin} setIsloggedin={setIsloggedin} />
      </div>
      <Routes
        googleProfile={googleProfile}
        setGoogleProfile={setGoogleProfile}
        setIsloggedin={setIsloggedin}
      />
>>>>>>> 4a2a354749f76d50d2789380882bcc66a7e81657
    </>
  );
};

export default App;
