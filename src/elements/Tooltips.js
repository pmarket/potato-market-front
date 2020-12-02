import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  absolute: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
}));

const Tooltips = ({ children, handleOnClickTooltip, title }) => {
  const classes = useStyles();

  return (
    <Tooltip title={title} aria-label="add">
      <Fab
        color="primary"
        className={classes.absolute}
        aria-label="like"
        onClick={handleOnClickTooltip}
      >
        {children}
      </Fab>
    </Tooltip>
  );
};

export default Tooltips;
