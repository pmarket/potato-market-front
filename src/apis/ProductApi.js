import axios from 'axios';
import HttpService from 'services/HttpService';
import AuthService from 'services/AuthService';

const { REACT_APP_API_URI } = process.env;

const registerProduct = (name, price, content, profileUrl, place) => {
  return axios.post(
    `${REACT_APP_API_URI}/api/v1/product`,
    {
      name,
      price,
      content,
      profileUrl,
      place,
    },
    HttpService.AuthorizationHeader(AuthService.getCurrentToken()),
  );
};

const retrieveMyProduct = () => {
  return axios.get(
    `${REACT_APP_API_URI}/api/v1/product/my`,
    HttpService.AuthorizationHeader(AuthService.getCurrentToken()),
  );
};

const deleteMyProduct = (productId) => {
  return axios.delete(
    `${REACT_APP_API_URI}/api/v1/product?productId=${productId}`,
    HttpService.AuthorizationHeader(AuthService.getCurrentToken()),
  );
};
const soldMyProduct = (productId) => {
  return axios.put(
    `${REACT_APP_API_URI}/api/v1/product/is_done`,
    {
      productId,
    },
    HttpService.AuthorizationHeader(AuthService.getCurrentToken()),
  );
};
export default {
  registerProduct,
  retrieveMyProduct,
  deleteMyProduct,
  soldMyProduct,
};
