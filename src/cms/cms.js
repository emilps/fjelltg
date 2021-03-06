import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';
import ProductPreview from './preview-templates/ProductPreview';
import ProductCategoryPreview from './preview-templates/ProductCategoryPreview';
import EmployeePreview from './preview-templates/EmployeePreview';
import ProjectPreview from './preview-templates/ProjectsPreview';
import SolutionPreview from './preview-templates/SolutionPreview';
import ContactPagePreview from './preview-templates/ContactPagePreview';
import ProductsCategoryPreview from './preview-templates/ProductsCategoryPreview';
import TestCentrePageTemplate from './preview-templates/TestCentrePagePreview';
import TestCentrePostTemplate from './preview-templates/TestCentrePostPreview';
import SolutionsCategoryPreview from './preview-templates/SolutionsCategoryPreview';
import SolutionCategoryPreview from './preview-templates/SolutionCategoryPreview';
import ProjectsPreview from './preview-templates/Projects';

import controlComponent from './RelationControl';
import withFileControl from './FileControl';
import previewComponent from './FilePreview';

const fileControlComponent = withFileControl();

import React from 'react';
import PropTypes from 'prop-types';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.registerPreviewTemplate('product', ProductPreview);
CMS.registerPreviewTemplate('productcategory', ProductCategoryPreview);
CMS.registerPreviewTemplate('employee', EmployeePreview);
CMS.registerPreviewTemplate('project', ProjectPreview);
CMS.registerPreviewTemplate('solution', SolutionPreview);
CMS.registerPreviewTemplate('contact', ContactPagePreview);
CMS.registerPreviewTemplate('productpage', ProductsCategoryPreview);
CMS.registerPreviewTemplate('testcentre', TestCentrePageTemplate);
CMS.registerPreviewTemplate('testcentreentry', TestCentrePostTemplate);
CMS.registerPreviewTemplate('solutionspage', SolutionsCategoryPreview);
CMS.registerPreviewTemplate('solutioncategory', SolutionCategoryPreview);
CMS.registerPreviewTemplate('projects', ProjectsPreview);

CMS.registerPreviewStyle('./../components/all.sass');

CMS.registerWidget('relatedProduct', controlComponent);
CMS.registerWidget(
  'customfiles',
  fileControlComponent,
  previewComponent,
  withFileControl
);

CMS.registerEditorComponent({
  // Internal id of the component
  id: 'imageblock',
  // Visible label
  label: 'Image with text',
  // Fields the user need to fill out when adding an instance of the component
  fields: [
    { name: 'text', label: 'Text field', widget: 'text' },
    { name: 'image', label: 'Image', widget: 'image' },
  ],
  // Pattern to identify a block as being an instance of this component
  pattern: /{"widget":"imageblock","text":"(.+)","image":"(.+)"}/,
  // Function to extract data elements from the regexp match
  fromBlock: function(match) {
    console.log(match);

    return {
      text: match[1],
      image: match[2],
    };
  },
  // Function to create a text block from an instance of this component
  toBlock: function(obj) {
    return JSON.stringify({
      widget: 'imageblock',
      text: obj.text,
      image: obj.image,
    });
    // return 'imageblock ' + obj.text + '+' + obj.image;
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: (obj) => {
    return <ImageTextBlock text={obj.text} image={obj.image} />;
  },
});

export default class ImageTextBlock extends React.Component {
  render() {
    const { text, image } = this.props;
    return (
      <div className="columns image-text-block about">
        <p className="column is-half image-text-block-text">{text}</p>
        <img
          className="column is-half remove-padding image-text-block-image"
          src={image}
          style={{ objectFit: 'cover' }}
        />
      </div>
    );
  }
}

ImageTextBlock.propTypes = {
  text: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

window.___loader = { enqueue: () => {}, hovering: () => {} };
