const AuthorizationHeader = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };
};

export default {
  AuthorizationHeader,
};
