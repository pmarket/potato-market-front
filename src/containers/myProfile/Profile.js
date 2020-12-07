import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles, Grid, Avatar, Button, TextField } from '@material-ui/core';

import Paper from 'elements/Paper';
import MemberApi from 'apis/MemberApi';
import AuthService from 'services/AuthService';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
    marginTop: '7%',
    height: '100%',
    '& .MuiTextField-root': {
      margin: '3%',
      marginLeft: '10%',
      marginRight: '10%',
      width: '80%',
    },
  },
  center: {
    textAlign: 'center',
  },
  image: {
    marginLeft: '45%',
  },
  button: {
    width: '80%',
    marginLeft: '7%',
    marginRight: '10%',
    marginTop: '6%',
  },
}));

const Profile = ({ setIsloggedin }) => {
  const classes = useStyles();
  const history = useHistory();
  const [profile, setProfile] = useState({
    email: '',
    name: '',
    profileUrl: '',
  });

  useEffect(() => {
    MemberApi.getProfile()
      .then((response) => {
        setProfile(response.data.data);
      })
      .catch((error) => {
        alert(error.response.data.message);
        history.push('/');
      });
  }, [history]);

  const handleLogout = () => {
    AuthService.logout();
    history.push('/');
    setIsloggedin(false);
  };

  const nameOnChange = (e) => {
    setProfile({
      id: profile.id,
      email: profile.email,
      profileUrl: profile.profileUrl,
      provider: profile.provider,
      name: e.target.value,
    });
  };

  const handleUpdateProfile = async () => {
    try {
      await MemberApi.updateProfile(profile.name, profile.profileUrl);
      alert('수정되었습니다');
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className={classes.root}>
      <Paper variant="outlined">
        <Grid container wrap="nowrap" direction="column" justify="center">
          <Grid item>
            <Avatar
              alt="프로필 사진"
              src={profile.profileUrl}
              className={classes.image}
            />
          </Grid>
          <TextField
            label="Email"
            multiline
            rowsMax={2}
            value={profile.email}
            disabled
          />
          <TextField
            label="Name"
            multiline
            rowsMax={2}
            value={profile.name}
            onChange={nameOnChange}
          />
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={handleUpdateProfile}
          >
            프로필 수정하기
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            onClick={handleLogout}
          >
            로그아웃 하기
          </Button>
        </Grid>
      </Paper>
    </div>
  );
};

export default Profile;
