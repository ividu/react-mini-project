import React from 'react';

import './Checkbox.scss';

function Checkbox(props) {
  const { checked, onChange, labelText, className, disabled, value, defaultChecked } = props;
  
  return (
    <>
      <label className={`check${className ? ` ${className}` : ''}`}>
        <input
          className="check__input"
          checked={checked}
          type="checkbox"
          onChange={onChange}
          disabled={disabled}
          value={value}
          defaultChecked={defaultChecked}
        />
        <span className="check__box" />
        <span className="check__gap" />
        {labelText}
      </label>
    </>
  );
}

export default Checkbox;
