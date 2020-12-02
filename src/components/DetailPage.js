import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import formatDate from 'utils/DateUtils';
import './DetailPage.css';
import writer from 'assets/images/wrr.png';
import gamzapf from '../assets/images/profilepic.jpg';

const { REACT_APP_API_URI } = process.env;

const DetailPage = () => {
  const [product, setProduct] = useState([]);
  const [sender, setSender] = useState([]);
  const [comments, setComments] = useState([]);
  const [isChanged, setIsChanged] = useState(false);
  const token = localStorage.getItem('token');

  const deleteComment = (commentId) => {
    axios
      .delete(
        `${REACT_APP_API_URI}/api/v1/product/comment?commentId=${commentId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        },
      )
      .then(() =>
        setComments(comments.filter((comment) => comment.id !== commentId)),
      )
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  const [input, setInput] = useState([]);

  const handleComment = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    const productId = window.location.href.split('detailpage/')[1];

    axios
      .get(`${REACT_APP_API_URI}/api/v1/product?productId=${productId}`)
      .then((response) => {
        setProduct(response.data.data.product);
        setSender(response.data.data.sender);
        setComments(response.data.data.comments);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  }, [isChanged]);

  const AddComment = () => {
    axios
      .post(
        `${REACT_APP_API_URI}/api/v1/product/comment`,
        {
          content: input,
          productId: product.id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        },
      )
      .then(() => {
        setIsChanged(!isChanged);
        setInput('');
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };
  const commentslist = comments.map((comment) => (
    <li key={comment.id}>
      <div className="li-container">
        {!comment.commenter.profileUrl ? (
          <img className="com-img" src={gamzapf} alt="" />
        ) : (
          <img className="com-img" src={comment.commenter.profileUrl} alt="" />
        )}
        <div className="commentline">
          <div className="commentline-1">{formatDate(comment.createdAt)}</div>
          <div>
            <b>{comment.commenter.name}</b>
            {comment.commenter.email === sender.email ? (
              <img src={writer} className="writericon" alt="d" />
            ) : (
              ''
            )}
            : {comment.content}
          </div>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              deleteComment(comment.id);
            }}
          >
            x
          </button>
        </div>
      </div>
    </li>
  ));
  console.log(product);
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
            <h6>작성시간:{formatDate(product.createdDateTime)}</h6>
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
        <div className="comment_container">
          <h4> 댓글 {comments.length}</h4>
          <div className="comment_write">
            <textarea
              rows="3"
              value={input}
              onChange={handleComment}
              maxLength="100"
              placeholder="댓글을 입력하시오."
            />
            <button type="button" onClick={AddComment}>
              등록
            </button>
          </div>
        </div>
        <div className="commentctr">
          <ul>{commentslist}</ul>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
