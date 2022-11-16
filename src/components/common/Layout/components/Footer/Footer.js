import React from 'react';
import Link from "../../../Link/Link";

import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="inner footer__inner">
        <Link className="footer__link" to={''}>Privacy Policy</Link>
        <Link className="footer__link" to={''}>Terms of Service</Link>
        <Link className="footer__link" to={''}>About</Link>
      </div>
    </footer>
  );
}

export default Footer;
