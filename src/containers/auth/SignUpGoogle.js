import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles, TextField, Icon, Grid } from '@material-ui/core';

import Paper from 'elements/Paper';
import Avatar from 'elements/Avatar';
import Button from 'elements/Button';
import AuthApi from 'apis/AuthApi';
import AuthService from 'services/AuthService';

import potato from 'assets/images/gamza1.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
    marginTop: '5%',
    height: '100%',
    '& .MuiTextField-root': {
      margin: theme.spacing(2.5),
      width: '80%',
      marginLeft: '10%',
      top: '10%',
    },
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(4),
  },
}));

const SignUpGoogle = ({ googleProfile }) => {
  const classes = useStyles();
  const history = useHistory();

  const [name, setName] = useState(
    googleProfile.name || 'Potato (Mock for test)',
  );

  useEffect(() => {
    if (googleProfile.email === undefined) {
      history.push('/');
    }
  }, [history, googleProfile.email]);

  const signUpButtonOnClick = async () => {
    try {
      const response = await AuthApi.googleSignUp(
        googleProfile.email,
        name,
        googleProfile.profileUrl,
      );
      AuthService.setAuthToken(response.data.data);
      history.push('/');
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  return (
    <div className={classes.root}>
      <Paper>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item xs zeroMinWidth>
            <Avatar alt="Remy Sharp" src={googleProfile.profileUrl || potato} />
            <div>
              <TextField
                value={googleProfile.email || 'potato@gmail.com'}
                size="small"
                disabled
              />
            </div>
            <div>
              <TextField value={name} size="small" onChange={onChangeName} />
            </div>
            <Button
              variant="contained"
              color="primary"
              icon={<Icon>send</Icon>}
              onClick={signUpButtonOnClick}
            >
              SignUp
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default SignUpGoogle;
