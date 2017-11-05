import React, { Component } from 'react';
import logo from '../images/mf-logo-black.svg';

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
            <li>About</li>
            <li>Press</li>
            <li>Terms + Condittions</li>
          </ul>
          <ul>
            <li>Company</li>
            <li>About</li>
            <li>Press</li>
            <li>Terms + Condittions</li>
          </ul>
          <ul>
            <li>Social</li>
            <li>
            <i className="fa fa-instagram" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-pinterest" aria-hidden="true"></i>
            </li>
          </ul>
          </div>
        </div>
      </footer>
    );
  }
}
