import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { makeStyles, Grid, Avatar, Button } from '@material-ui/core';
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
  center: {
    textAlign: 'center',
  },
  image: {
    marginLeft: '45%',
  },
}));

const Profile = () => {
  const classes = useStyles();
  const history = useHistory();
  const [profile, setProfile] = useState({
    email: '',
    name: '',
    profileUrl: '',
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios
      .get(`${REACT_APP_API_URI}/api/v1/member`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        setProfile(response.data.data);
      })
      .catch((error) => {
        alert(error.response.data.message);
        history.push('/');
      });
  }, [history]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    history.push('/');
  };

  return (
    <div className={classes.root}>
      <Paper variant="outlined">
        <Grid container wrap="nowrap" direction="column" justify="center">
          <Grid item>
            <h2 className={classes.center}>마이 페이지</h2>
          </Grid>
          <Grid item>
            <Avatar
              alt="프로필 사진"
              src={profile.profileUrl}
              className={classes.image}
            />
          </Grid>
          <h4 className={classes.center}>{profile.email}</h4>
          <h4 className={classes.center}>{profile.name}</h4>
          <Button variant="contained" color="primary" onClick={handleLogout}>
            로그아웃 하기
          </Button>
        </Grid>
      </Paper>
    </div>
  );
};

export default Profile;
