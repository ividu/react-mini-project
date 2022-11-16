import React from 'react';
import Menu from "../../../Menu/Menu";
import SearchInput from "../../../SearchInput/SearchInput";

import './Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="header__general">
        <div className="inner header__inner">
          <div className="header__main">
            <div className="header__menu-part">
              <Menu className="header__menu" isHeaderMenu/>
            </div>
            <SearchInput className="header__search-input" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
