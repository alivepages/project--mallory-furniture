import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <h3>Menu3</h3>
        <hr/>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/terms">Terms</Link>
        <Link to="/all-products">All Producst</Link>
        <Link to="/product/1">Product</Link>
        <Link to="/category/1">Category</Link>
        <Link to="/about">About</Link>
      </nav>
    );
  }
}
