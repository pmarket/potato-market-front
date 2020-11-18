import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { makeStyles, TextField, Icon, Grid } from '@material-ui/core';
import potato from 'assets/images/gamza1.jpg';

import Paper from 'elements/Paper';
import Avatar from 'elements/Avatar';
import Button from 'elements/Button';

const { REACT_APP_API_URI } = process.env;

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

const SignUp = ({ profile }) => {
  const classes = useStyles();
  const history = useHistory();

  const [name, setName] = useState(profile.name || 'Potato (Mock for test)');

  useEffect(() => {
    if (profile.email === undefined) {
      history.push('/');
    }
  }, [history, profile.email]);

  const signUpButtonOnClick = async () => {
    const response = await axios.post(
      `${REACT_APP_API_URI}/api/v1/signup/google`,
      {
        email: profile.email,
        name,
        profileUrl: profile.profileUrl,
      },
    );
    localStorage.setItem('token', response.data.data);
    history.push('/');
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  return (
    <div className={classes.root}>
      <Paper>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item xs zeroMinWidth>
            <Avatar alt="Remy Sharp" src={profile.profileUrl || potato} />
            <div>
              <TextField
                value={profile.email || 'potato@gmail.com'}
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

export default SignUp;
