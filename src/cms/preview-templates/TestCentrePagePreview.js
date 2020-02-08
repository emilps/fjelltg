import React from 'react';
import PropTypes from 'prop-types';
import { TestCentrePageTemplate } from '../../templates/test-centre-page';

const TestCentrePagePreview = ({ entry }) => {
  const entryTestCentreImages = entry.getIn(['data', 'testcentreimages']);
  const testCenterImages = entryTestCentreImages
    ? entryTestCentreImages.toJS()
    : [];

  return (
    <TestCentrePageTemplate
      headertitle={entry.getIn(['data', 'headertitle'])}
      ingress={entry.getIn(['data', 'ingress'])}
      testcentreimages={testCenterImages || {}}
      contacttitle={entry.getIn(['data', 'contacttitle'])}
    />
  );
};

TestCentrePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  })
};

export default TestCentrePagePreview;
