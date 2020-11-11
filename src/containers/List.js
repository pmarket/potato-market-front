import React, { Component } from 'react';

const List = (props) => {
  const { product } = props;

  return (

    <div key={product.id} className="card">
      <a href="">
        <img className="medium" src={product.profie_url}></img>
      </a>
      <div className="card-body">
        <a href="">
          <h2>{product.name}</h2>
        </a>
        <div className="price">{product.price}</div>
      </div>
    </div>

  )




}

export default List;


// <div key={product._id} className="card">
// <a href={`/product/${product._id}`}>
//   <img className="medium" src={product.image} alt={product._id} />
// </a>
// <div className="card-body">
//   <a href={`/product/${product._id}`}>
//     <h2>{product.name}</h2>
//   </a>
//   <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
//   <div className="price">${product.price}</div>
// </div>
// </div>