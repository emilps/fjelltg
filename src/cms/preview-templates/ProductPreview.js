import React from 'react';
import PropTypes from 'prop-types';
import { ProductTemplate } from '../../templates/product';

const ProductPreview = ({ entry }) => (
  <ProductTemplate title={entry.getIn(['data', 'title'])} />
);

ProductPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  })
};

export default ProductPreview;
