import React from 'react';
import PropTypes from 'prop-types';
import { SolutionsPageTemplate } from '../../templates/solution-categories-page';

const SolutionsCategoryPreview = ({ entry, widgetFor }) => (
  <SolutionsPageTemplate
    headertitle={entry.getIn(['data', 'headertitle'])}
    headerbyline={entry.getIn(['data', 'headerbyline'])}
    headerimage={entry.getIn(['data', 'headerimage'])}
    solutionsquote={entry.getIn(['data', 'solutionsquote'])}
  />
);

SolutionsCategoryPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default SolutionsCategoryPreview;
