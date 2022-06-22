import './search-box.styles.css';

import { ChangeEvent } from 'react';

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type: string;
};

const SearchBox = (props: SearchBoxProps) => {
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
