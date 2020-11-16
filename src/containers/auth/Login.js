import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles, Grid } from '@material-ui/core';
import GoogleButton from 'components/auth/GoogleButton';
import Paper from 'elements/Paper';

const { REACT_APP_API_URI } = process.env;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
    marginTop: '10%',
    height: '100%',
  },
}));

const Login = ({ token }) => {
  const classes = useStyles();
  const [profile, setProfile] = useState({
    email: '',
    name: '',
    profileUrl: '',
  });

  useEffect(() => {
    axios
      .get(`${REACT_APP_API_URI}/api/v1/member`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        setProfile(response.data.data);
      });
  }, [token]);

  return (
    <div className={classes.root}>
      <Paper>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item xs zeroMinWidth>
            <div>
              <h2>로그인 테스트</h2>
              <h4>{profile.email}</h4>
              <h4>{profile.name}</h4>
            </div>
            <GoogleButton />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Login;
