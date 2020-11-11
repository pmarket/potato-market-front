import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { makeStyles, TextField, Icon, Grid } from '@material-ui/core';

import Paper from 'elements/Paper';
import Avatar from 'elements/Avatar';
import Button from 'elements/Button';

const { REACT_APP_API_URI } = process.env;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
    marginTop: '10%',
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

  const [name, setName] = useState(profile.name);

  useEffect(() => {
    if (profile.email === undefined) {
      history.push('/auth');
    }
  }, [history, profile.email]);

  const signUpButtonOnClick = async () => {
    const response = await axios.post(`${REACT_APP_API_URI}/api/v1/member`, {
      email: profile.email,
      name,
      profileUrl: profile.profileUrl,
    });
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
            <Avatar alt="Remy Sharp" src={profile.profileUrl} />
            <div>
              <TextField value={profile.email} size="small" disabled />
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
