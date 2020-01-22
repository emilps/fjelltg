import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import PreviewCompatibleImage from './../components/PreviewCompatibleImage';
import twitter from '../img/social/twitter.svg';
import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';
import linkedin from '../img/social/linkedin.svg'

const mediums = { Twitter: twitter, Facebook: facebook, Instagram: instagram, LinkedIn: linkedin };

export const BlogPostTemplate = ({
  description,
  link,
  title,
  helmet,
  date,
  featuredimage,
  socialmedia
}) => {
  return (
    <section className="section">
      {helmet || ''}
      <div className="is-parent blog-container column remove-padding is-4">
        <div className="blog-top">
          <p>{date.toUTCString()}</p>
          <img
            className="fas fa-lg"
            src={mediums[socialmedia]}
            alt="Twitter"
            style={{ width: '1em', height: '1em' }}
          />
        </div>
        <div>
          {featuredimage ? (
            <div className="featured-thumbnail">
              <PreviewCompatibleImage
                imageInfo={{
                  image: featuredimage,
                  alt: `featured image for post ${title}`,
                  imageStyle: { height: '315px' }
                }}
              />
            </div>
          ) : null}
        </div>
        <div className="blog-bottom">
          <p className="has-text-centered">{description}</p>
          <a className="button submit-button blog-button" href={link}>
            Read more
          </a>
        </div>
      </div>
    </section>
  );
};

BlogPostTemplate.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  link: PropTypes.string,
  date: PropTypes.string,
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  socialmedia: PropTypes.string
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;
  console.log(post);

  return (
    <Layout>
      <BlogPostTemplate
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        link={post.frontmatter.link}
        title={post.frontmatter.title}
        featuredimage={post.frontmatter.featuredimage}
        date={post.frontmatter.date}
        socialmedia={post.frontmatter.socialmedia}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        date(formatString: "DD.MM.YYYY")
        title
        description
        link
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 240, quality: 64) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        socialmedia
      }
    }
  }
`;
