import React, { Component } from 'react';
import {categoriesData, categories} from '../data/categories';

export default class CategoryImage extends Component {
  render() {
    var imageSrc = '';
    var category = this.props.category;
    var index = categories.indexOf(category);
    if (index >= 0) {
      imageSrc = '../images/' + categoriesData[index].image;
    }
    return (
      <img className="category-image" src={imageSrc} alt="img"/>
    );
  }
}
