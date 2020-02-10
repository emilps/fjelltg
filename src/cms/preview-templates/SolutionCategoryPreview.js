import React from 'react';
import PropTypes from 'prop-types';
import { SolutionCategoryTemplate } from '../../templates/solutioncategory';

const SolutionCategoryPreview = ({ entry, widgetFor }) => {
  //const entryTags = entry.getIn(['data', 'tags']);
  //const tags = entryTags ? entryTags.toJS() : [];

  //const entrySolutions = entry.getIn(['data', 'solutions']);
  //const solutions = entrySolutions ? entrySolutions.toJS() : [];

  return (
    <SolutionCategoryTemplate
      content={widgetFor('information')}
      subtitle={entry.getIn(['data', 'subtitle'])}
      title={entry.getIn(['data', 'title'])}
      texttitle={entry.getIn(['data', 'texttitle'])}
      featuredimage={entry.getIn(['data', 'featuredimage'])}
    />
  );
};

SolutionCategoryPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default SolutionCategoryPreview;
