import React, { useState } from 'react';
import Routes from 'routes';

import Navigator from 'components/navigator/Navigator';
import Header from 'containers/header/Header';

const App = () => {
  const [googleProfile, setGoogleProfile] = useState({});
  const [state, setState] = React.useState({
    nav: false,
    toolTipsOpen: false,
  });
  const [isloggedin, setIsloggedin] = useState(false);

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
        isloggedin={isloggedin}
        googleProfile={googleProfile}
        setGoogleProfile={setGoogleProfile}
        setIsloggedin={setIsloggedin}
      />
    </>
  );
};

export default App;
