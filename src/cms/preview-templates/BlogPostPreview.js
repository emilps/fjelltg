import React from 'react';
import PropTypes from 'prop-types';
import { BlogPostTemplate } from '../../templates/blog-post';

const BlogPostPreview = ({ entry, widgetFor }) => (
  <BlogPostTemplate
    date={entry.getIn(['data', 'date'])}
    description={entry.getIn(['data', 'description'])}
    featuredimage={entry.getIn(['data', 'featuredimage'])}
    link={entry.getIn(['data', 'link'])}
    title={entry.getIn(['data', 'title'])}
    socialmedia={entry.getIn(['data', 'socialmedia'])}
  />
);

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default BlogPostPreview;
