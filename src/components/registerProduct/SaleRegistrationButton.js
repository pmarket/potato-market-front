import React from 'react';
import AddIcon from '@material-ui/icons/Add';

import Tooltips from 'elements/Tooltips';
import SaleRegistrationModal from 'components/registerProduct/SaleRegistrationModal';

const SaleRegistrationButton = ({ token, setProducts, products }) => {
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
      <SaleRegistrationModal
        toolTipsOpen={state.toolTipsOpen}
        handleCloseTooltips={handleCloseTooltips}
        token={token}
        products={products}
        setProducts={setProducts}
      />
      <Tooltips handleOnClickTooltip={handleOnClickTooltips} title="등록하기">
        <AddIcon />
      </Tooltips>
    </div>
  );
};

export default SaleRegistrationButton;
