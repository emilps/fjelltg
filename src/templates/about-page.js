import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

export const AboutPageTemplate = ({
  helmet,
  title,
  content,
  contentComponent,
  ingress,
  image,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section>
      {helmet || ''}
      <div className="">
        <div>
          <div className="about-title-section">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p className="is-size-5">{ingress}</p>
          </div>
          <div>
            {image && (
              <PreviewCompatibleImage
                imageInfo={{
                  image: image,
                  alt: `featured image thumbnail for post ${title}`,
                  classNames: 'about-fullwidth',
                  imageStyle: {
                    width: '100vw',
                    maxHeight: '720px',
                    objectFit: 'cover',
                    zIndex: '-1',
                  },
                  style: {
                    width: '100vw',
                    maxHeight: '520px',
                    objectFit: 'cover',
                    zIndex: '-1',
                  },
                }}
              />
            )}
            <div className="about-section">
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
      <section className="section is-medium">
        <div className="container">
          <div className="content">
            <p className="has-text-centered title">
              Your partner for mass and heat transfer technology
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  ingress: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  helmet: PropTypes.object,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <AboutPageTemplate
        helmet={
          <Helmet titleTemplate="%s | About">
            <title>{`${post.frontmatter.title}`}</title>
            <meta name="description" content={`${post.frontmatter.ingress}`} />
          </Helmet>
        }
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        ingress={post.frontmatter.ingress}
        image={post.frontmatter.image}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        ingress
        image {
          childImageSharp {
            fluid(maxWidth: 1480, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
