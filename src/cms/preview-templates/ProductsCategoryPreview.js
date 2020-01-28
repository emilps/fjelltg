import React from 'react';
import PropTypes from 'prop-types';
import { ProductsPageTemplate } from '../../templates/product-categories-page';

const ProductsCategoryPreview = ({ entry, widgetFor }) => (
  <ProductsPageTemplate
    headertitle={entry.getIn(['data', 'headertitle'])}
    headerbyline={entry.getIn(['data', 'headerbyline'])}
    headerimage={entry.getIn(['data', 'headerimage'])}
    productsquote={entry.getIn(['data', 'productsquote'])}
  />
);

ProductsCategoryPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default ProductsCategoryPreview;
