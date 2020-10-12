import React from 'react';

import Tooltips from './components/Tooltips';
import TooltipsDialog from './components/TooltipsDialog';

const App = () => {
  const [toolTipsOpen, setTooltipsOpen] = React.useState(false);

  const handleCloseTooltips = () => {
    setTooltipsOpen(false);
  };

  const handleOnClickTooltips = () => {
    setTooltipsOpen(true);
  };

  return (
    <div>
      <TooltipsDialog
        toolTipsOpen={toolTipsOpen}
        handleCloseTooltips={handleCloseTooltips}
      />
      <Tooltips handleOnClickTooltip={handleOnClickTooltips} />
    </div>
  );
};

export default App;
