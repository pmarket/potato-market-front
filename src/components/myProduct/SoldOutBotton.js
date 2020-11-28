import React from 'react';
import { IconButton } from '@material-ui/core';
import { Check as CheckIcon } from '@material-ui/icons';

const SoldOutButton = ({ onSoldOutButtonClick, product }) => {
  return (
    <IconButton
      edge="center"
      aria-label="check"
      onClick={() => {
        onSoldOutButtonClick(product.id);
      }}
    >
      <CheckIcon />
    </IconButton>
  );
};
export default SoldOutButton;
