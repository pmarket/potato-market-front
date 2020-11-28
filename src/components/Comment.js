import React, { useState } from 'react';
import axios from 'axios';

const { REACT_APP_API_URI } = process.env;

const Comment = () => {
  const [comment, setComment] = useState({
    content: '',
    productId: '',
  });

  const handleComment = (e) => {
    setComment(e.target.value);
  };

  const AddComment = () => {
    const token = localStorage.getItem('token');
    axios.post(
      `${REACT_APP_API_URI}/api/v1/product/comment`,
      {
        content: comment.content,
        productId: comment.productId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    );
    alert('comment added');
  };

  return (
    <>
      <div className="comment_container">
        <h4> 댓글</h4>
        <div className="comment_write">
          <textarea
            rows="3"
            value={comment}
            onChange={handleComment}
            maxLength="100"
            placeholder="댓글을 입력하시오."
          />
          <button type="button" onClick={AddComment}>
            등록
          </button>
        </div>
      </div>
      <div className="comment_list_container">
        <div></div>
      </div>
    </>
  );
};

export default Comment;
