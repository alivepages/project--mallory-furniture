import React, { Component } from 'react';
import SectionTitle from '../components/SectionTitle.js';
import AllProducts from '../components/AllProducts.js';
import CategoryImage from '../components/CategoryImage.js';

export default class CategoryView extends Component {
  render() {
    var category = this.props.match.params.id;
    var subtitle = 'All ' + category + ' products';
    return (
      <section>
        <div className="content">
          <CategoryImage category={category}/>
          <section>
            <SectionTitle title={category} subtitle={subtitle}/>
            <AllProducts category={category}/>
          </section>
        </div>
      </section>
    );
  }
}
