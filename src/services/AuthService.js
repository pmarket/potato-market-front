const logout = () => {
  localStorage.removeItem('token');
};

const getCurrentToken = () => {
  return localStorage.getItem('token');
};

const setAuthToken = (token) => {
  localStorage.setItem('token', token);
};

export default { logout, getCurrentToken, setAuthToken };
