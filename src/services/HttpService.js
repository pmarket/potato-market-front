import AuthService from 'services/AuthService';

const AuthorizationHeader = {
  headers: {
    Authorization: `Bearer ${AuthService.getCurrentToken()}`,
    'Content-Type': 'application/json',
  },
};

export default {
  AuthorizationHeader,
};
