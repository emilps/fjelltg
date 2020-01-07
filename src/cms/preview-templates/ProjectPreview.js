import React from 'react';
import PropTypes from 'prop-types';
import { ProjectTemplate } from '../../templates/project';

const ProjectPreview = ({ entry }) => {
  return (
    <ProjectTemplate
      description={entry.getIn(['data', 'description'])}
      title={entry.getIn(['data', 'title'])}
      seconddescription={entry.getIn(['data', 'seconddescription'])}
      secondtitle={entry.getIn(['data', 'secondtitle'])}
      thirddescription={entry.getIn(['data', 'thirddescription'])}
      thirdtitle={entry.getIn(['data', 'thirdtitle'])}
      mainimage={entry.getIn(['data', 'mainimage'])}
      firstminiatureimage={entry.getIn(['data', 'firstminiatureimage'])}
      secondminiatureimage={entry.getIn(['data', 'secondminiatureimage'])}
    />
  );
};

ProjectPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  })
};

export default ProjectPreview;
