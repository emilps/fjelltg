import React from 'react';
import PropTypes from 'prop-types';
import { BlogPostTemplate } from '../../templates/blog-post';

const BlogPostPreview = ({ entry, widgetFor }) => (
  <BlogPostTemplate
    date={entry.getIn(['data', 'date'])}
    description={entry.getIn(['data', 'description'])}
    image={entry.getIn(['data', 'image'])}
    link={entry.getIn(['data', 'link'])}
  />
);

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default BlogPostPreview;
