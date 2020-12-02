import axios from 'axios';
import HttpService from 'services/HttpService';
import AuthService from 'services/AuthService';

const { REACT_APP_API_URI } = process.env;

const getProfile = () => {
  return axios.get(
    `${REACT_APP_API_URI}/api/v1/member`,
    HttpService.AuthorizationHeader(AuthService.getCurrentToken()),
  );
};

const updateProfile = (name, profileUrl) => {
  return axios.put(
    `${REACT_APP_API_URI}/api/v1/member`,
    {
      name,
      profileUrl,
    },
    HttpService.AuthorizationHeader(AuthService.getCurrentToken()),
  );
};

export default {
  getProfile,
  updateProfile,
};
