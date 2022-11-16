import React from 'react';
import Input from "../Input/Input";
import {ReactComponent as SearchIcon} from '../../../images/icons/search.svg';

import './SearchInput.scss'

function SearchInput({ className }) {
  return (
    <div className={`search-input${className && ` ${className}`}`}>
      <button className="search-input__button">
        <SearchIcon />
      </button>
      <Input />
    </div>
  );
}


export default SearchInput;
