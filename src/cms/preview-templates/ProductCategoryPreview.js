import React from 'react';
import PropTypes from 'prop-types';
import { ProductCategoryTemplate } from '../../templates/productcategory';

const ProductCategoryPreview = ({ entry, widgetFor }) => {
  //const entryTags = entry.getIn(['data', 'tags']);
  //const tags = entryTags ? entryTags.toJS() : [];

  //const entrySolutions = entry.getIn(['data', 'solutions']);
  //const solutions = entrySolutions ? entrySolutions.toJS() : [];

  return (
    <ProductCategoryTemplate
      content={widgetFor('text')}
      subtitle={entry.getIn(['data', 'subtitle'])}
      title={entry.getIn(['data', 'title'])}
    />
  );
};

ProductCategoryPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default ProductCategoryPreview;
