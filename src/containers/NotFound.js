import React from 'react';
<<<<<<< HEAD
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const NotFound = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Alert severity="error">
        <AlertTitle>404 Error</AlertTitle>
        Not Found
      </Alert>
=======
import gamza from 'assets/images/gamza.jpg';

const NotFound = () => {
  return (
    <div className="App">
      404 not pages !
      <img src={gamza} alt="Not Found" />
>>>>>>> 4a2a354749f76d50d2789380882bcc66a7e81657
    </div>
  );
};

export default NotFound;
