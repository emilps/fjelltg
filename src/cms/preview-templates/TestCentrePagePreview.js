import React from 'react';
import PropTypes from 'prop-types';
import { TestCentrePageTemplate } from '../../templates/test-centre-page';

const TestCentrePagePreview = ({ entry, widgetFor }) => (
  <TestCentrePageTemplate
    headertitle={entry.getIn(['data', 'headertitle'])}
    headerbyline={entry.getIn(['data', 'headerbyline'])}
    headerimage={entry.getIn(['data', 'headerimage'])}
    productsquote={entry.getIn(['data', 'productsquote'])}
  />
);

TestCentrePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default TestCentrePagePreview;
