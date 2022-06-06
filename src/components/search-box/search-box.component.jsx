import { Component } from 'react';
import './search-box.styles.css';
class SearchBox extends Component {
  render() {
    const { onSearchChange, placeholder, className, type } = this.props;
    return (
      <input
        className={`search-box ${className}`}
        onChange={onSearchChange}
        type={type}
        placeholder={placeholder}
      />
    );
  }
}

export default SearchBox;
