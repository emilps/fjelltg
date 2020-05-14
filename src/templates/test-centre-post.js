import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Img from 'gatsby-image';

export const TestCentrePostTemplate = ({
  title,
  date,
  featuredimage,
  text,
}) => {
  return (
    <div className="is-parent column is-12">
      <div className={`columns is-gapless`}>
        <div className="column is-half">
          {featuredimage && typeof featuredimage != 'string' ? (
            <div>
              <Img
                style={{ height: '400px' }}
                fluid={featuredimage.childImageSharp.fluid}
                alt={`featured image thumbnail for post ${title}`}
              />
            </div>
          ) : (
            <img src={featuredimage} alt="Protein Recycling" />
          )}
        </div>
        <div
          className="column is-half has-background-secondary test-post-text-container"
          ref={(node) => {
            if (node) {
              node.style.setProperty('padding', '2rem', 'important');
            }
          }}
        >
          <div>
            <p className="has-text-centered title is-uppercase">{title}</p>
            <p>{text}</p>
          </div>
          <p className="test-centre-post-date">{date}</p>
        </div>
      </div>
    </div>
  );
};

TestCentrePostTemplate.propTypes = {
  title: PropTypes.string,
  helmet: PropTypes.object,
  text: PropTypes.string,
  date: PropTypes.string,
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

const TestCentrePost = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <TestCentrePostTemplate
        helmet={
          <Helmet titleTemplate="Test Centre | %s">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        text={post.frontmatter.text}
        title={post.frontmatter.title}
        featuredimage={post.frontmatter.featuredimage}
        date={post.frontmatter.date}
      />
    </Layout>
  );
};

TestCentrePost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default TestCentrePost;

export const pageQuery = graphql`
  query TestCenterPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        date
        title
        text
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 240, quality: 64) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
