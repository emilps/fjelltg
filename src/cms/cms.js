import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import PropTypes from 'prop-types';
import React from 'react';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import ProductPagePreview from './preview-templates/ProductPagePreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';
import ProductPreview from './preview-templates/ProductPreview';
import EmployeePreview from './preview-templates/EmployeePreview';
import ProjectPreview from './preview-templates/ProjectPreview';
import SolutionPreview from './preview-templates/SolutionPreview';

import previewComponent from './RelationPreview';
import controlComponent from './RelationControl';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('products', ProductPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.registerPreviewTemplate('product', ProductPreview);
CMS.registerPreviewTemplate('employee', EmployeePreview);
CMS.registerPreviewTemplate('project', ProjectPreview);
CMS.registerPreviewTemplate('solution', SolutionPreview);

class Control extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    forID: PropTypes.string,
    value: PropTypes.node,
    classNameWrapper: PropTypes.string.isRequired
  };

  static defaultProps = {
    value: ''
  };

  render() {
    const { forID, value, onChange, classNameWrapper } = this.props;

    return (
      <input
        type="text"
        id={forID}
        className={classNameWrapper}
        value={value || ''}
        onChange={e => onChange(e.target.value)}
      />
    );
  }
}

function Preview({ value }) {
  return <div>{value}</div>;
}

Preview.propTypes = {
  value: PropTypes.node
};

CMS.registerWidget('relatedProduct', controlComponent, previewComponent);

window.___loader = { enqueue: () => {}, hovering: () => {} };
