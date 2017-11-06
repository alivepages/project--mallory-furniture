import React, { Component } from 'react';
import logo from '../images/mf-logo-black.svg';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <footer>
        <div className="footer">
          <img className="logo" src={logo} alt="logo"/>
          <hr />
          <div className="grid">
          <ul>
            <li>Company</li>
            <li><Link to="/about">About</Link></li>
            <li>Press</li>
            <li><Link to="/terms">Terms + Condittions</Link></li>
          </ul>
          <ul>
            <li>Categories</li>
            <li><Link to="/category/Setting">Setting</Link></li>
            <li><Link to="/category/Tables">Tables</Link></li>
            <li><Link to="/category/Misc">Misc</Link></li>
          </ul>
          <ul>
            <li>Social</li>
            <li>
            <a href="http://www.instagram.com" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a>
            <a href="http://twitter.com" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a>
            <a href="http://www.pinterest.com.mx" target="_blank"><i className="fa fa-pinterest" aria-hidden="true"></i></a>
            </li>
          </ul>
          </div>
        </div>
      </footer>
    );
  }
}
