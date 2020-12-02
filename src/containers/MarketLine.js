import React from 'react';
<<<<<<< HEAD

import Tooltips from 'components/tooltips/Tooltips';
import TooltipsDialog from 'components/tooltips/TooltipsDialog';
import NavigationDrawers from 'components/navigation/NavigationDrawers';

const MarketLine = () => {
=======
import AddIcon from '@material-ui/icons/Add';
import Tooltips from 'elements/Tooltips';
import RegisterModal from 'components/product/RegisterModal';

const MarketLine = ({ token, setProducts, products }) => {
>>>>>>> 4a2a354749f76d50d2789380882bcc66a7e81657
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

<<<<<<< HEAD
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
=======
  return (
    <div>
      <RegisterModal
        toolTipsOpen={state.toolTipsOpen}
        handleCloseTooltips={handleCloseTooltips}
        token={token}
        products={products}
        setProducts={setProducts}
      />
      <Tooltips handleOnClickTooltip={handleOnClickTooltips} title="등록하기">
        <AddIcon />
      </Tooltips>
>>>>>>> 4a2a354749f76d50d2789380882bcc66a7e81657
    </div>
  );
};

export default MarketLine;
