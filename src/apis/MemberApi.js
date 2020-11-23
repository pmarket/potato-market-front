import axios from 'axios';
import HttpService from 'services/HttpService';

const { REACT_APP_API_URI } = process.env;

const getProfile = () => {
  return axios.get(
    `${REACT_APP_API_URI}/api/v1/member`,
    HttpService.AuthorizationHeader,
  );
};

const updateProfile = (name, profileUrl) => {
  return axios.put(
    `${REACT_APP_API_URI}/api/v1/member`,
    {
      name,
      profileUrl,
    },
    HttpService.AuthorizationHeader,
  );
};

export default {
  getProfile,
  updateProfile,
};
