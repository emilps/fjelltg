import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import SimpleCompanyQuote from '../components/SimpleCompanyQuote';
import { graphql, Link } from 'gatsby';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import Helmet from 'react-helmet';
import TestCentreRoll from '../components/TestCentreRoll';

export const TestCentrePageTemplate = ({
  helmet,
  headertitle,
  ingress,
  testcentreimages,
  contacttitle
}) => {
  return (
    <section>
      {helmet || ''}
      <div className="">
        <div>
          <div className="project-title-section">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {headertitle}
            </h1>
            <p className="is-size-5">{ingress}</p>
          </div>
          <div className="test-centre-images">
            {testcentreimages.image1 && (
              <PreviewCompatibleImage
                imageInfo={{
                  image: testcentreimages.image1,
                  alt: `featured image thumbnail for post ${headertitle}`,
                  imageStyle: {
                    width: '100%',
                    maxHeight: '320px',
                    objectFit: 'cover',
                    zIndex: '-1'
                  }
                }}
              />
            )}
            {testcentreimages.image2 && (
              <PreviewCompatibleImage
                imageInfo={{
                  image: testcentreimages.image2,
                  alt: `featured image thumbnail for post ${headertitle}`,
                  imageStyle: {
                    width: '100%',
                    maxHeight: '100%',
                    objectFit: 'cover',
                    zIndex: '-1'
                  }
                }}
              />
            )}
            {testcentreimages.image3 && (
              <PreviewCompatibleImage
                imageInfo={{
                  image: testcentreimages.image3,
                  alt: `featured image thumbnail for post ${headertitle}`,
                  imageStyle: {
                    width: '100%',
                    maxHeight: '320px',
                    objectFit: 'cover',
                    zIndex: '-1'
                  }
                }}
              />
            )}
          </div>
          <div>
            <div className="has-text-centered test-centre-contact-container">
              <p className="title">{contacttitle}</p>
              <Link
                to={'/contact'}
                className="button submit-button is-link has-text-weight-bold is-uppercase"
                type="submit"
              >
                Contact us
              </Link>
            </div>
            <p
              className="title has-text-centered has-text-weight-normal"
              style={{ padding: '2rem 0 3rem 0' }}
            >
              Our recent tests
            </p>
            <TestCentreRoll />
          </div>
        </div>
      </div>
      <section className="section is-medium">
        <SimpleCompanyQuote
          text={'Your partner for mass and heat transfer technology'}
          isMainQuote={true}
        />
      </section>
    </section>
  );
};

TestCentrePageTemplate.propTypes = {
  headerimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  headertitle: PropTypes.string,
  ingress: PropTypes.string,
  contacttitle: PropTypes.string,
  testcentreimages: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  helmet: PropTypes.object
};

const TestCentrePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  console.log(frontmatter.testcentreimages);

  return (
    <Layout>
      <TestCentrePageTemplate
        helmet={
          <Helmet titleTemplate="%s | Test centre">
            <title>{`${frontmatter.headertitle}`}</title>
            <meta name="description" content={`${frontmatter.ingress}`} />
          </Helmet>
        }
        ingress={frontmatter.ingress}
        headertitle={frontmatter.headertitle}
        headerbyline={frontmatter.headerbyline}
        testcentreimages={frontmatter.testcentreimages}
        contacttitle={frontmatter.contacttitle}
      />
    </Layout>
  );
};

TestCentrePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default TestCentrePage;

export const testCentrePageQuery = graphql`
  query TestCentrePage {
    markdownRemark(frontmatter: { templateKey: { eq: "test-centre-page" } }) {
      frontmatter {
        headertitle
        ingress
        testcentreimages {
          image1 {
            childImageSharp {
              fluid(maxWidth: 1080, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          image2 {
            childImageSharp {
              fluid(maxWidth: 1080, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          image3 {
            childImageSharp {
              fluid(maxWidth: 1080, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        contacttitle
      }
    }
  }
`;
