import React from 'react';
import { IconButton } from '@material-ui/core';
import { Check as CheckIcon } from '@material-ui/icons';

const SoldOutButton = ({ onSoldOutButtonClick, product, setIsChanged }) => {
  return (
    <IconButton
      aria-label="check"
      onClick={() => {
        onSoldOutButtonClick(product.id);
        setIsChanged();
      }}
    >
      <CheckIcon />
    </IconButton>
  );
};
export default SoldOutButton;
