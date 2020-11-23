import axios from 'axios';
import AuthService from 'services/AuthService';

const { REACT_APP_API_URI } = process.env;

const registerProduct = (name, price, content, profileUrl) => {
  const token = AuthService.getCurrentToken();
  return axios.post(
    `${REACT_APP_API_URI}/api/v1/product`,
    {
      name,
      price,
      content,
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

const retrieveMyProduct = () => {
  const token = AuthService.getCurrentToken();
  return axios.get(`${REACT_APP_API_URI}/api/v1/product/my`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
};

const deleteMyProduct = (productId) => {
  const token = AuthService.getCurrentToken();
  return axios.delete(
    `${REACT_APP_API_URI}/api/v1/product?productId=${productId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    },
  );
};

export default { registerProduct, retrieveMyProduct, deleteMyProduct };
