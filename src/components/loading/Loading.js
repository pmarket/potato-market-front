import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(() => ({
  root: {
    marginLeft: '50%',
    marginTop: '40vh',
    width: '50vh',
  },
  loading: {
    marginLeft: '30vh',
  },
}));

export default function Loading() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress
        className-={classes.loading}
        color="secondary"
        size={70}
      />
    </div>
  );
}
