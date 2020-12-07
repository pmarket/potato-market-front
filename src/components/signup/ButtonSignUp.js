import React from 'react';
import { Link } from 'react-router-dom';
import 'components/signup/ButtonSignUp.css';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

const ButtonSignUp = ({ children, onClick, buttonStyle, buttonSize }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to="/auth/signup">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type="button"
      >
        {children}
      </button>
    </Link>
  );
};

export default ButtonSignUp;
