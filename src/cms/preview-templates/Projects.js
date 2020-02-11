import React from 'react';
import PropTypes from 'prop-types';
import { ProjectPageTemplate } from '../../templates/projects';

const ProjectsPreview = ({ entry, widgetFor }) => (
  <ProjectPageTemplate
    headertitle={entry.getIn(['data', 'headertitle'])}
    headerbyline={entry.getIn(['data', 'headerbyline'])}
    headerimage={entry.getIn(['data', 'headerimage'])}
    projectsquote={entry.getIn(['data', 'projectsquote'])}
  />
);

ProjectsPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default ProjectsPreview;
