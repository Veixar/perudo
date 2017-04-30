import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = (props) => (
  <div className="Button">
    <button onClick={ props.onClick }>{ props.text }</button>
  </div>
);

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func
};

export default Button;
