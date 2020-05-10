import React from 'react';
import PropTypes from 'prop-types';
import { ProductTemplate } from '../../templates/product';

const ProductPreview = ({ entry, widgetFor }) => {
  return (
    <ProductTemplate
      title={entry.getIn(['data', 'title'])}
      subtitle={entry.getIn(['data', 'subtitle'])}
      headerimage={entry.getIn(['data', 'headerimage'])}
      description1={widgetFor('description1')}
      infobox1={entry.getIn(['data', 'infobox1'])}
      productbrochure={entry.getIn(['data', 'productbrochure'])}
      smallimage={entry.getIn(['data', 'smallimage'])}
      fullwidthimage={entry.getIn(['data', 'fullwidthimage'])}
      description2={entry.getIn(['data', 'description2'])}
      infobox2={entry.getIn(['data', 'infobox2'])}
      productcategory={entry.getIn(['data', 'productcategory'])}
    />
  );
};

ProductPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default ProductPreview;
