import React from 'react';
import notFound from 'assets/images/notFound.jpg';

const NotFound = () => {
  return (
    <div className="App">
      404 not pages !
      <img src={notFound} alt="Not Found" />
    </div>
  );
};

export default NotFound;
