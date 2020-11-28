import React, { useState } from 'react';
import axios from 'axios';

const { REACT_APP_API_URI } = process.env;

const Comment = ({ product }) => {
  const [input, setInput] = useState([]);

  const handleComment = (e) => {
    setInput(e.target.value);
  };

  const AddComment = () => {
    const token = localStorage.getItem('token');
    axios.post(
      `${REACT_APP_API_URI}/api/v1/product/comment`,
      {
        content: input.content,
        productId: product.Id,
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
    </>
  );
};

export default Comment;
