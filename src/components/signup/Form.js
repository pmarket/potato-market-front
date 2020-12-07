import React from 'react';

import FormSignup from 'components/signup/FormSignup';
import 'components/signup/Form.css';

import logingamza from 'assets/images/logingamza.jpg';

const Form = () => {
  return (
    <div className="form-container">
      <div className="form-content-left">
        <img src={logingamza} alt="success" className="form-img" />
      </div>
      <FormSignup />
    </div>
  );
};

export default Form;
