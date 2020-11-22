import axios from 'axios';

const { REACT_APP_API_URI } = process.env;

const login = (email, password) => {
  return axios
    .post(`${REACT_APP_API_URI}/api/v1/auth/local`, {
      email,
      password,
    })
    .then((response) => {
      if (response.data.data) {
        localStorage.setItem('token', response.data.data);
      }

      return response.data.data;
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
};

const logout = () => {
  localStorage.removeItem('token');
};

const getCurrentUser = () => {
  return JSON.parse(localStorage('token'));
};

export default { login, logout, getCurrentUser };
