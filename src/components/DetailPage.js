import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DetailPage.css';
import gamza from '../assets/images/logingamza.jpg';

const { REACT_APP_API_URI } = process.env;

const DetailPage = () => {
  const [product, setProduct] = useState([]);
  const [sender, setSender] = useState([]);

  useEffect(() => {
    const productId = window.location.href.split('detailpage/')[1];
    axios
      .get(`${REACT_APP_API_URI}/api/v1/product?productId=${productId}`)
      .then((response) => {
        setProduct(response.data.data.product);
        setSender(response.data.data.sender);
      });
  }, []);

  return (
    <div className="detail-container">
      <div className="detail-container-top">
        <img src={product.profileUrl} alt="" />
      </div>
      <div className="detail-container-mid1">
        <img className="mid1-img" src={sender.profileUrl} alt="pf" />
        <h5>
          {sender.name}({sender.email})
        </h5>
      </div>
      <div className="detail-container-mid2">
        <div className="">
          <h1>제목:{product.name}</h1>
          <h4>가격:{product.price}</h4>
        </div>
      </div>
      <div className="detail-container-bot">
        <h4>내용:{product.content}</h4>
      </div>
    </div>
  );
};

export default DetailPage;
