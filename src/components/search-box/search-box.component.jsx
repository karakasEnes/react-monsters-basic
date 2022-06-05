import { Component } from 'react';

class SearchBox extends Component {
  render() {
    const { onSearchChange, placeholder, className, type } = this.props;
    return (
      <input
        className={className}
        onChange={onSearchChange}
        type={type}
        placeholder={placeholder}
      />
    );
  }
}

export default SearchBox;
