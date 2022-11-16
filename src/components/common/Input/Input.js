import React from 'react';
import './Input.scss'

function Input({ type, placeholder, onChange, className }) {
  
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className={`input${className ? ` ${className}` : ''}`}
    />
  );
}

export default Input;
