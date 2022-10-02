import React from 'react';
import './search-box.styles.css';
import { ChangeEventHandler, ChangeEvent } from 'react';

interface ISearchBox {
  // onSearchChange: ChangeEventHandler<HTMLInputElement>;
  onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className: string;
  type: string;
}

const SearchBox = (props: ISearchBox) => {
  const { onSearchChange, placeholder, className, type } = props;
  return (
    <input
      className={`search-box ${className}`}
      onChange={onSearchChange}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default SearchBox;
