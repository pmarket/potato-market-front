import React from 'react';
import List from './List.js';
import data from './data.js';

const Board = () => {
  return (
    <div>
      <div className="row center">
        {data.products.map(product => (
          <List key={product._id} product={product}></List>))
        }

      </div>

    </div>
  )
}

export default Board;
