import React from 'react';
import PropTypes from 'prop-types';
import { ProjectTemplate } from '../../templates/project';

const ProjectPreview = ({ entry }) => {
  const entryBaseProducts = entry.getIn(['data', 'relatedproducts']);
  const baseProducts = entryBaseProducts ? entryBaseProducts.toJS() : [];
  return (
    <ProjectTemplate
      description={entry.getIn(['data', 'description'])}
      title={entry.getIn(['data', 'title'])}
      description1={entry.getIn(['data', 'description1'])}
      title1={entry.getIn(['data', 'title1'])}
      description2={entry.getIn(['data', 'description2'])}
      title2={entry.getIn(['data', 'title2'])}
      mainimage={entry.getIn(['data', 'mainimage'])}
      miniatureimage1={entry.getIn(['data', 'miniatureimage1'])}
      miniatureimage2={entry.getIn(['data', 'miniatureimage2'])}
      relatedproducts={baseProducts || {}}
    />
  );
};

ProjectPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  })
};

export default ProjectPreview;
