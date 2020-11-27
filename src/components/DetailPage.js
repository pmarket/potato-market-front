import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './DetailPage.css';
import Comment from './Comment';
import gamzapf from '../assets/images/profilepic.jpg';

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
    <>
      <Link to="/board">게시판으로 돌아가기</Link>
      <div className="detail-container">
        <div className="detail-container-top">
          <img src={product.profileUrl} alt="" />
        </div>
        <div className="detail-container-mid1">
          {!sender.profileUrl ? (
            <img className="mid1-img" src={gamzapf} alt="" />
          ) : (
            <img className="mid1-img" src={sender.profileUrl} alt="" />
          )}

          <div className="mid1-info">
            {sender.name}({sender.email})<br />
            <h6>작성시간:{product.createdDateTime}</h6>
          </div>
        </div>
        <div className="detail-container-mid2">
          <div className="mid2-info">
            <h1>{product.name}</h1>
            {product.price}원
          </div>
        </div>
        <div className="detail-container-bot">
          <h4>{product.content}</h4>
        </div>
        <Comment />
      </div>
    </>
  );
};

export default DetailPage;
