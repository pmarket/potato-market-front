import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
}));

const Tooltips = ({ handleOnClickTooltip }) => {
  const classes = useStyles();
  return (
    <Tooltip title="Add" aria-label="add">
      <Fab
        color="primary"
        className={classes.absolute}
        aria-label="like"
        onClick={handleOnClickTooltip}
      >
        <FavoriteIcon />
      </Fab>
    </Tooltip>
  );
};

export default Tooltips;
