import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="bbs__logo"></div>
        <SearchBar></SearchBar>
      </div>
    )
  }
}

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }
  handleSearchChange = e => {
    this.props.handleSearchChange(e.target.value);
  }
  render() {
    return (
      <input ></input>
    )
  }
}

export default Home;