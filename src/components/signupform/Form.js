import React, { useState } from 'react';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import './Form.css';

const Form = ({ setIsloggedin }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
    setIsloggedin(true);
  }

  return (
    <>
      <div className="form-container">
        <div className="form-content-left">
          <img src="img/logingamza.jpg" alt="success" className="form-img" />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} setIsloggedin={setIsloggedin} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;
