import React from 'react';

import { Button as BaseButton, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(3),
    width: '80%',
    marginLeft: '10%',
  },
}));

const Button = ({ children, onClick, icon, color, variant }) => {
  const classes = useStyles();

  return (
    <BaseButton
      className={classes.button}
      variant={variant || 'text'}
      color={color || 'primary'}
      endIcon={icon}
      onClick={onClick}
    >
      {children}
    </BaseButton>
  );
};
export default Button;
