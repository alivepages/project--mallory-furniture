import React, { Component } from 'react';
import Nav from './Nav.js';


export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="header">
          <Nav/>
        </div>
      </header>
    );
  }
}
