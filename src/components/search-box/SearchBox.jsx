import React from 'react';
import './SearchBox.css';


const SearchBox = ({ onChangeHandler }) => {
  return (
    <>
      <input
        type="search"
        className="search-box"
        placeholder="search monsters"
        onChange={onChangeHandler}
      />
    </>
  );
};

export default SearchBox;