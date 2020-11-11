import React from 'react';

import AddIcon from '@material-ui/icons/Add';

import Tooltips from 'elements/Tooltips';
import RegisterModal from 'components/product/RegisterModal';

const MarketLine = ({ token }) => {
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
      <RegisterModal
        toolTipsOpen={state.toolTipsOpen}
        handleCloseTooltips={handleCloseTooltips}
        token={token}
      />
      <Tooltips handleOnClickTooltip={handleOnClickTooltips} title="등록하기">
        <AddIcon />
      </Tooltips>
    </div>
  );
};

export default MarketLine;
