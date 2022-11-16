import React from 'react';
import { Link as ReactLink } from 'react-router-dom';

import './Link.scss';

function Link({ children, to, className }) {
  return (
    <ReactLink className={`link${className && ` ${className}`}`} to={to}>
      {children}
    </ReactLink>
  );
}

export default Link;
