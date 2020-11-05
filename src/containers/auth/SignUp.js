import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

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
  button: {
    margin: theme.spacing(3),
    width: '80%',
    marginLeft: '10%',
  },
  avatar: {
    width: '40%',
    height: 'auto',
    left: '30%',
  },
}));

const SignUp = ({ profile }) => {
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    if (profile.email === undefined) {
      history.push('/auth');
    }
  });

  const signUpButtonOnClick = async () => {
    const response = await axios.post(`${REACT_APP_API_URI}/api/v1/member`, {
      email: profile.email,
      name: profile.name,
      profileUrl: profile.profileUrl,
    });
    console.log(response);
    // 토큰 체크 후 로컬 스토리지에 저장해야함.
    history.push('/');
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item xs zeroMinWidth>
            <Avatar
              className={classes.avatar}
              variant="circle"
              alt="Remy Sharp"
              src={profile.profileUrl}
            />
            <div>
              <TextField
                label="Email"
                defaultValue={profile.email}
                size="small"
                disabled
              />
            </div>
            <div>
              <TextField
                label="Name"
                defaultValue={profile.name}
                size="small"
              />
            </div>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              endIcon={<Icon>send</Icon>}
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
