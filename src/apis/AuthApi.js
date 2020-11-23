import axios from 'axios';
import AuthService from 'services/AuthService';

const { REACT_APP_API_URI, REACT_APP_REDIRECT_URI } = process.env;

const localSignUp = (email, name, password) => {
  return axios.post(`${REACT_APP_API_URI}/api/v1/signup/local`, {
    email,
    name,
    password,
  });
};

const localLogin = (email, password) => {
  return axios.post(`${REACT_APP_API_URI}/api/v1/auth/local`, {
    email,
    password,
  });
};

const googleSignup = (email, name, profileUrl) => {
  return axios.post(`${REACT_APP_API_URI}/api/v1/signup/google`, {
    email,
    name,
    profileUrl,
  });
};

const googleLogin = (code) => {
  return axios.get(
    `${REACT_APP_API_URI}/api/v1/auth/google?code=${code}&redirectUri=${REACT_APP_REDIRECT_URI}`,
  );
};

const getProfile = () => {
  const token = AuthService.getCurrentToken();
  return axios.get(`${REACT_APP_API_URI}/api/v1/member`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
};

const updateProfile = (name, profileUrl) => {
  const token = AuthService.getCurrentToken();
  return axios.put(
    `${REACT_APP_API_URI}/api/v1/member`,
    {
      name,
      profileUrl,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    },
  );
};

export default {
  localSignUp,
  localLogin,
  googleSignup,
  googleLogin,
  getProfile,
  updateProfile,
};
