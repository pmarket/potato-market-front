import React from 'react';

import FormSignup from 'components/signup/FormSignup';
import 'components/signup/Form.css';

const Form = () => {
  return (
    <div className="form-container">
      <div className="form-content-left">
        <img src="img/logingamza.jpg" alt="success" className="form-img" />
      </div>
      <FormSignup />
    </div>
  );
};

export default Form;
