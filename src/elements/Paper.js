import React from 'react';
import { Paper as BasePaper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(4),
  },
}));
const Paper = ({ children }) => {
  const classes = useStyles();
  return (
    <div>
      <BasePaper className={classes.paper}>{children}</BasePaper>
    </div>
  );
};

export default Paper;
