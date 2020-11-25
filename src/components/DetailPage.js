import React, { useEffect, useState } from 'react';
import axios from 'axios';

const { REACT_APP_API_URI } = process.env;

const DetailPage = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get(`${REACT_APP_API_URI}`).then((response) => {
      setProduct(response.data);
    });
  }, []);

  return (
    <div className="">
      <h1>{product}</h1>
      <h4>판매자:</h4>
      <h4>판매자이메일:</h4>
      <h4>내용:</h4>
    </div>
  );
};

export default DetailPage;
