import React from 'react';

import Tooltips from 'components/tooltips/Tooltips';
import TooltipsDialog from 'components/tooltips/TooltipsDialog';

const MarketLine = () => {
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

  return (
    <div>
      <TooltipsDialog
        toolTipsOpen={state.toolTipsOpen}
        handleCloseTooltips={handleCloseTooltips}
      />
      <Tooltips handleOnClickTooltip={handleOnClickTooltips} />
    </div>
  );
};

export default MarketLine;
