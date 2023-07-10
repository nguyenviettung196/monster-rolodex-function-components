import React, { Component } from 'react';
import './SearchBox.css';

export default class SearchBox extends Component {
  render() {
    const { onChangeHandler } = this.props;
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
  }
}
