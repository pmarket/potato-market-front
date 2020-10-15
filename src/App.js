import React from 'react';

import Tooltips from 'components/tooltips/Tooltips';
import TooltipsDialog from 'components/tooltips/TooltipsDialog';
import NavigationDrawers from 'components/navigation/NavigationDrawers';

const App = () => {
  const [state, setState] = React.useState({
    nav: false,
    toolTipsOpen: false,
  });

  const handleCloseTooltips = () => {
    setState({ ...state, toolTipsOpen: false });
  };

  const handleOnClickTooltips = () => {
    setState({ ...state, toolTipsOpen: true });
  };

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
    <div>
      <NavigationDrawers
        navOpen={state.navOpen}
        navigationDrawersHandler={navigationDrawersHandler}
      />
      <TooltipsDialog
        toolTipsOpen={state.toolTipsOpen}
        handleCloseTooltips={handleCloseTooltips}
      />
      <Tooltips handleOnClickTooltip={handleOnClickTooltips} />
    </div>
  );
};

export default App;
