import React, { Component } from 'react';
import { Redirect } from 'react-router'
import SectionTitle from './SectionTitle.js';
import Splash from './Splash.js';
import AllProducts from './AllProducts.js';
import {categories} from '../data/categories';

export default class HomeView extends Component {
  constructor() {
    super();
    this.state = {
      redirect: ''
    };
  }
  _goToCategory = (event) => {
    var category = event.target.textContent;
    this.setState({
      redirect: '/category/' + category
    })
  }
  _goToAll = (event) => {
    this.setState({
      redirect: '/all-products'
    })
  }
  render() {
    var redirect =  this.state.redirect;
    if (redirect !== '') {
      return <Redirect to={redirect}/>;
    }
    var buttons = categories.map((category, index) => {
       return <button type="button" onClick={this._goToCategory} key={index}>{category}</button>
    })
    return (
      <section>
        <Splash/>
        <div className="content">
          <section>
            <SectionTitle title="Featured Products" subtitle="Check out some of our favorite listings"/>
            <AllProducts category="all" limit="6"/>
            <div className="grid">
              <button type="button" className="red" onClick={this._goToAll}>All Products</button>
            </div>
          </section>
          <section>
            <SectionTitle title="Browse by Categories" subtitle="Explore by furniture type"/>
            <div className="grid">
              {buttons}
            </div>
          </section>
        </div>
      </section>
    );
  }
}
