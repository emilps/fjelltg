import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Features from '../components/Features';
import BlogRoll from '../components/BlogRoll';
import IndexImage from '../components/IndexImage';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

export const IndexPageTemplate = ({
  title,
  middleblock,
  partners,
  indexblock,
}) => (
  <div>
    <IndexImage indexblock={indexblock} />
    <section className="section is-medium">
      <div className="container">
        <div className="content">
          <p className="has-text-centered title">{title}</p>
        </div>
      </div>
    </section>
    <section className="updates-container">
      <h3 className="title has-text-weight-normal is-size-2 blog-title has-text-centered">
        Recent news and updates
      </h3>
      <BlogRoll />
    </section>
    <section className="test-center-container index-image-container black-overlay">
      <p
        className="title has-text-white test-center-text has-text-centered is-size-4-mobile	
                  is-uppercase is-size-1"
      >
        {middleblock.title}
      </p>
      <Link
        to={'/test-centre-page'}
        className="button test-center-button is-link has-text-weight-bold is-uppercase"
        type="submit"
      >
        See more
      </Link>
      <PreviewCompatibleImage
        imageInfo={{
          image: middleblock.image2,
          alt: `featured image thumbnail for post ${title}`,
          style: {
            width: '100%',
            maxHeight: '270px',
            objectFit: 'cover',
            zIndex: '-1',
            height: '270px',
          },
        }}
      />
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
    description: PropTypes.string,
  }),
  indexblock: PropTypes.object,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        indexblock={frontmatter.indexblock}
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
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        indexblock {
          title1
          image1 {
            childImageSharp {
              fluid(maxWidth: 1080, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          link1
          title2
          image2 {
            childImageSharp {
              fluid(maxWidth: 1080, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          link2
        }
        title
        middleblock {
          title
          image2 {
            childImageSharp {
              fluid(maxWidth: 1080, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
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
