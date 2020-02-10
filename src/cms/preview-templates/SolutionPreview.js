import React from 'react';
import PropTypes from 'prop-types';
import { SolutionTemplate } from '../../templates/solution';

const SolutionPreview = ({ entry, widgetFor }) => {
  const entryBaseProducts = entry.getIn(['data', 'relatedproducts']);
  const baseProducts = entryBaseProducts ? entryBaseProducts.toJS() : [];

  //const entryTags = entry.getIn(['data', 'tags']);
  //const tags = entryTags ? entryTags.toJS() : [];

  //const entrySolutions = entry.getIn(['data', 'solutions']);
  //const solutions = entrySolutions ? entrySolutions.toJS() : [];

  return (
    <SolutionTemplate
      // content={widgetFor('body')}
      subtitle={entry.getIn(['data', 'subtitle'])}
      title={entry.getIn(['data', 'title'])}
      solutions={entry.getIn(['data', 'solutions']) || []}
      relatedproducts={baseProducts || {}}
      description={entry.getIn(['data', 'description'])}
      featuredimage={entry.getIn(['data', 'featuredimage'])}
      mainquote={entry.getIn(['data', 'mainquote'])}
      description1={entry.getIn(['data', 'description1'])}
      fullwidthimage={entry.getIn(['data', 'fullwidthimage'])}
      infobox1={entry.getIn(['data', 'infobox1'])}
      description2={entry.getIn(['data', 'description2'])}
      description3={entry.getIn(['data', 'description3'])}
      descriptionimage={entry.getIn(['data', 'descriptionimage'])}
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
