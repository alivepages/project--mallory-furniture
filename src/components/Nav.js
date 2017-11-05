import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/mf-logo-white.svg';
import {categories} from '../data/categories';

export default class Nav extends Component {
  render() {
    var links = categories.map((category, index) => {
       var url = '/category/' + category;
       return <Link to={url} key={index} className="category">{category}</Link>
    })
    return (
      <nav>
        <div>
          <Link to="/"><img className="logo" src={logo} alt="logo"/></Link>
          <div>
            <Link to="/about">About</Link>
            <Link to="/terms">Terms+Conditions</Link>
            <span className="separator">|</span>
            <Link to="/all-products">All</Link>
            {links}
            <span className="separator">|</span>
            <i className="fa fa-shopping-cart cart" aria-hidden="true"></i>
          </div>
        </div>
      </nav>
    );
  }
}
