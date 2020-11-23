import axios from 'axios';
import HttpService from 'services/HttpService';

const { REACT_APP_API_URI } = process.env;

const registerProduct = (name, price, content, profileUrl) => {
  return axios.post(
    `${REACT_APP_API_URI}/api/v1/product`,
    {
      name,
      price,
      content,
      profileUrl,
    },
    HttpService.AuthorizationHeader,
  );
};

const retrieveMyProduct = () => {
  return axios.get(
    `${REACT_APP_API_URI}/api/v1/product/my`,
    HttpService.AuthorizationHeader,
  );
};

const deleteMyProduct = (productId) => {
  return axios.delete(
    `${REACT_APP_API_URI}/api/v1/product?productId=${productId}`,
    HttpService.AuthorizationHeader,
  );
};

export default { registerProduct, retrieveMyProduct, deleteMyProduct };
