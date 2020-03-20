import React from 'react';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/Layout';

const TagsPage = () => (
  <Layout>
    <p>Tags</p>
  </Layout>
);

export default TagsPage;

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
