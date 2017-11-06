import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/mf-logo-white.svg';
import {categories} from '../data/categories';

export default class Nav extends Component {
  checkLocation = (route, def = '') => {
    if (window.location.hash === '#' + route) {
      return def + ' active';
    }
    return def;
  }
  render() {
    var links = categories.map((category, index) => {
       var url = '/category/' + category;
       return <Link to={url} key={index} className={this.checkLocation(url, 'category')}>{category}</Link>
    })
    return (
      <nav>
        <div>
          <Link to="/"><img className="logo" src={logo} alt="logo"/></Link>
          <div>
            <Link to="/about" className={this.checkLocation('/about')}>About</Link>
            <Link to="/terms" className={this.checkLocation('/terms')}>Terms+Conditions</Link>
            <span className="separator">|</span>
            <Link to="/all-products" className={this.checkLocation('/all-products')}>All</Link>
            {links}
            <span className="separator">|</span>
            <i className="fa fa-shopping-cart cart" aria-hidden="true" onClick={this.props.cartOpen}></i>
          </div>
        </div>
      </nav>
    );
  }
}
