import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Features from '../components/Features';
import BlogRoll from '../components/BlogRoll';
import IndexImage from '../components/IndexImage';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  middleblock,
  description,
  partners
}) => (
  <div>
    <IndexImage />
    <section className="section is-medium">
      <div className="container">
        <div className="content">
          <p className="has-text-centered title">
            Your partner for mass and heat transfer technology
          </p>
        </div>
      </div>
    </section>
    <section className="updates-container">
      <h3 className="has-text-weight-semibold is-size-2">
        Recent news and updates
      </h3>
      <BlogRoll />
    </section>
    <section className="test-center-container index-image-container black-overlay">
      <PreviewCompatibleImage
        imageInfo={{
          image: '/img/products-grid2.jpg',
          alt: `featured image thumbnail for post ${title}`,
          imageStyle: {
            width: '100%',
            maxHeight: '270px',
            objectFit: 'cover',
            zIndex: '-1'
          }
        }}
      />
      <p className="title has-text-white test-center-text is-uppercase">
        FJELL TECHNOLOGY TEST CENTRE
      </p>
      <Link
        to={'/test-center'}
        className="button test-center-button is-link has-text-weight-bold is-uppercase"
        type="submit"
      >
        See more
      </Link>
    </section>
    <section className="partners-container has-text-centered">
      <div className="partners-text-container">
        <h3
          className="has-text-weight-semibold is-size-2"
          style={{ marginBottom: '1rem' }}
        >
          {partners.heading}
        </h3>
        <p>{partners.description}</p>
      </div>
      <Features gridItems={partners.partnerimage} />
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  middleblock: PropTypes.object,
  description: PropTypes.string,
  partners: PropTypes.shape({
    partnerimage: PropTypes.array,
    heading: PropTypes.string,
    description: PropTypes.string
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        middleblock={frontmatter.middleblock}
        description={frontmatter.description}
        partners={frontmatter.partners}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        middleblock {
          title
          description
        }
        description
        partners {
          partnerimage {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            link
          }
          heading
          description
        }
      }
    }
  }
`;
