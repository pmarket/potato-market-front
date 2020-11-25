import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DetailPage.css';
import gamza from '../assets/images/logingamza.jpg';

const { REACT_APP_API_URI } = process.env;

const DetailPage = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const productId = window.location.href.split('detailpage/')[1];
    axios
      .get(`${REACT_APP_API_URI}/api/v1/product?productId=${productId}`)
      .then((response) => {
        setProduct(response.data.data.product);
      });
  }, []);

  return (
    <div className="detail-container">
      <div className="detail-container-top">
        <div className="dct-left">
          <img src={gamza} alt="wtf" />
        </div>
        <div className="dct-right">
          <h1>제목:{product.name}</h1>
          <h4>판매자:</h4>
        </div>
      </div>
      <div>
        <h4>판매자이메일:</h4>
        <h4>내용:</h4>
      </div>
    </div>
  );
};

export default DetailPage;
