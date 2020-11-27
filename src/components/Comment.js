import React from 'react';

const Comment = () => {
  return (
    <div className="comment_container">
      <h4> 댓글</h4>
      <div className="comment_write">
        <textarea rows="3" maxLength="100" placeholder="댓글을 입력하시오." />
        <button type="button">등록</button>
      </div>
    </div>
  );
};

export default Comment;
