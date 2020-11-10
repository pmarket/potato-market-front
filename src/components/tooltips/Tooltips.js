import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  absolute: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
}));

const Tooltips = ({ handleOnClickTooltip }) => {
  const classes = useStyles();

  return (
    <Tooltip title="등록하기" aria-label="add">
      <Fab
        color="primary"
        className={classes.absolute}
        aria-label="like"
        onClick={handleOnClickTooltip}
      >
        <AddIcon />
      </Fab>
    </Tooltip>
  );
};

export default Tooltips;
