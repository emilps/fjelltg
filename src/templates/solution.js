import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import PageJumbotron from '../components/PageJumbotron';
import SimpleCompanyQuote from '../components/SimpleCompanyQuote';
import Img from 'gatsby-image';
import RelatedProducts from '../components/RelatedProducts';

export const SolutionTemplate = ({
  contentComponent,
  subtitle,
  title,
  featuredimage,
  helmet,
  mainquote,
  description1,
  infobox1,
  fullwidthimage,
  description2,
  description3,
  descriptionimage,
  relatedproducts
}) => {
  const PostContent = contentComponent || Content;
  return (
    <section>
      {helmet || ''}
      <PageJumbotron
        title={title}
        image={featuredimage}
        description={subtitle}
      />
      <div className="container solution-container content">
        <SimpleCompanyQuote text={mainquote} isMainQuote={false} />
        <div className="product-info-section-text">
          <PostContent
            className={'markdown-container description lightblue'}
            content={description1}
          />
          <div className="infobox-container">
            <PostContent
              className={'markdown-container infobox lightblue'}
              content={infobox1}
            />
          </div>
        </div>
      </div>
      <div className="fullwidthimage-container">
        {fullwidthimage ? (
          <div>
            <PreviewCompatibleImage
              imageInfo={{
                image: fullwidthimage,
                alt: `fullwidthimage for product ${title}`,
                style: { height: 'auto', maxHeight: '650px' }
              }}
            />
          </div>
        ) : null}
      </div>
      <div className="container solution-container">
        <PostContent
          className="content middle-container"
          content={description2}
        />
      </div>
      <div>
        <div className="index-image-container margin-top-0">
          {typeof inputImage === 'string' ? (
            <img
              src={descriptionimage}
              className="index-full-width-image margin-top-0"
              style={{ maxWidth: '100%' }}
            />
          ) : (
            <div>
              {descriptionimage ? (
                <div>
                  {typeof fullwidthimage !== 'string' ? (
                    <Img
                      fluid={descriptionimage.childImageSharp.fluid}
                      alt={`featured image thumbnail for project ${title}`}
                      className="index-full-width-image margin-top-0 full-width-solution"
                    />
                  ) : (
                    <img
                      src={descriptionimage}
                      style={{ width: '40%' }}
                      className="index-full-width-image margin-top-0 full-width-solution"
                    />
                  )}
                </div>
              ) : null}
            </div>
          )}
          <div className="black-overlay-opacity-85">
            <div className="solution-centered-elements">
              <PostContent
                className="content solution-content"
                content={description3}
              />
            </div>
          </div>
        </div>
      </div>

      <SimpleCompanyQuote
        text={'Your partner for mass and heat transfer technology'}
        isMainQuote={true}
      />
      <RelatedProducts
        relatedproducts={relatedproducts}
        title1={'Base products'}
      />
    </section>
  );
};

SolutionTemplate.propTypes = {
  contentComponent: PropTypes.func,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  solutions: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  featuredimage: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  mainquote: PropTypes.string,
  description1: PropTypes.string,
  fullwidthimage: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  infobox1: PropTypes.string,
  description2: PropTypes.string,
  description3: PropTypes.string,
  descriptionimage: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  relatedproducts: PropTypes.object
};

const Solution = ({ data }) => {
  const { markdownRemark: solution } = data;

  return (
    <Layout>
      <SolutionTemplate
        contentComponent={HTMLContent}
        subtitle={solution.frontmatter.subtitle}
        baseproducts={solution.frontmatter.baseproducts}
        featuredimage={solution.frontmatter.featuredimage}
        helmet={
          <Helmet titleTemplate="%s | Solution">
            <title>{`${solution.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${solution.frontmatter.description}`}
            />
          </Helmet>
        }
        title={solution.frontmatter.title}
        mainquote={solution.frontmatter.mainquote}
        description1={solution.frontmatter.description1}
        infobox1={solution.frontmatter.infobox1}
        fullwidthimage={solution.frontmatter.fullwidthimage}
        description2={solution.frontmatter.description2}
        description3={solution.frontmatter.description3}
        descriptionimage={solution.frontmatter.descriptionimage}
        relatedproducts={solution.frontmatter.relatedproducts}
      />
    </Layout>
  );
};

Solution.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default Solution;

export const pageQuery = graphql`
  query SolutionByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        subtitle
        solutions
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 1080, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mainquote
        description1
        infobox1
        fullwidthimage {
          childImageSharp {
            fluid(maxWidth: 1080, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description2
        description3
        descriptionimage {
          childImageSharp {
            fluid(maxWidth: 1080, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        relatedproducts {
          relatedproduct1 {
            title
            slug
            headerimage {
              childImageSharp {
                fluid(maxWidth: 580, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          relatedproduct2 {
            title
            slug
            headerimage {
              childImageSharp {
                fluid(maxWidth: 580, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          relatedproduct3 {
            title
            slug
            headerimage {
              childImageSharp {
                fluid(maxWidth: 580, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
