import React from 'react';
import PropTypes from 'prop-types';
import { SolutionTemplate } from '../../templates/solution';

const SolutionPreview = ({ entry, widgetFor }) => {
  const entryBaseProducts = entry.getIn(['data', 'baseproducts']);
  const baseProducts = entryBaseProducts ? entryBaseProducts.toJS() : [];
  const tags = entry.getIn(['data', 'tags']);

  //const entryTags = entry.getIn(['data', 'tags']);
  //const tags = entryTags ? entryTags.toJS() : [];

  //const entrySolutions = entry.getIn(['data', 'solutions']);
  //const solutions = entrySolutions ? entrySolutions.toJS() : [];

  return (
    <SolutionTemplate
      content={widgetFor('body')}
      subtitle={entry.getIn(['data', 'subtitle'])}
      tags={tags && tags.toJS()}
      title={entry.getIn(['data', 'title'])}
      solutions={entry.getIn(['data', 'solutions']) || []}
      baseproducts={baseProducts || {}}
    />
  );
};

SolutionPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default SolutionPreview;
