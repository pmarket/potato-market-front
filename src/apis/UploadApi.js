import axios from 'axios';

const { REACT_APP_API_URI } = process.env;

const uploadFile = (formData) => {
  return axios.post(`${REACT_APP_API_URI}/api/v1/upload`, formData);
};

export default { uploadFile };
