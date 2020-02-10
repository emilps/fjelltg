import React from 'react';
import PropTypes from 'prop-types';
import { TestCentrePostTemplate } from '../../templates/test-centre-post';

const TestPostPreview = ({ entry }) => (
  <TestCentrePostTemplate
    date={entry.getIn(['data', 'date'])}
    text={entry.getIn(['data', 'text'])}
    featuredimage={entry.getIn(['data', 'featuredimage'])}
    title={entry.getIn(['data', 'title'])}
  />
);

TestPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  })
};

export default TestPostPreview;
