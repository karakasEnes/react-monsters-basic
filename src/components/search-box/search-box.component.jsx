import './search-box.styles.css';

const SearchBox = (props) => {
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
