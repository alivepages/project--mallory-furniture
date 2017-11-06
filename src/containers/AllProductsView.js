import React, { Component } from 'react';
import SectionTitle from '../components/SectionTitle.js';
import AllProducts from '../components/AllProducts.js';

export default class AllProductsView extends Component {
  render() {
    return (
      <section>
        <div className="content">
          <section>
            <SectionTitle title="All Products" subtitle="All available listings"/>

            <AllProducts category="all"/>
          </section>
        </div>
      </section>
    );
  }
}
