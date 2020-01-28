import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import PageJumbotron from '../components/PageJumbotron';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

export const ProductTemplate = ({
  contentComponent,
  title,
  subtitle,
  description1,
  description2,
  headerimage,
  smallimage,
  fullwidthimage,
  infobox1,
  infobox2,
  productcategory,
  productbrochure,
  tags,
  helmet
}) => {
  const PostContent = contentComponent || Content;
  console.log(productbrochure.relativePath);

  return (
    <section>
      {helmet || ''}
      <div>
        {headerimage && (
          <PageJumbotron
            title={title}
            description={subtitle}
            image={headerimage}
          />
        )}
        <div className="product-content-section">
          <div className="product-info-section">
            <div className="product-info-section-text">
              <PostContent
                className={'markdown-container description'}
                content={description1}
              />
              <div className="infobox-container">
                <PostContent
                  className={'markdown-container infobox lightblue'}
                  content={infobox1}
                />
                {productbrochure ? (
                  <div className="brochure-container">
                    <div className="brochure-container-info">
                      <h4>{title}</h4>
                      <h3>PRODUCT BROCHURE</h3>
                    </div>
                    <div className="brochure-container-icon">
                      <a href={productbrochure.publicURL}>
                        <img
                          src={`https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg`}
                          width="110px"
                        />
                      </a>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
            <div className="smallimage-container">
              {smallimage ? (
                <PreviewCompatibleImage
                  imageInfo={{
                    image: smallimage,
                    alt: `smallimage for product ${title}`,
                    style: { height: '269px', width: '410px' }
                  }}
                />
              ) : null}
            </div>
          </div>
          <div className="fullwidthimage-container">
            {fullwidthimage ? (
              <PreviewCompatibleImage
                imageInfo={{
                  image: fullwidthimage,
                  alt: `fullwidthimage for product ${title}`,
                  style: { height: 'auto', maxHeight: '650px' }
                }}
              />
            ) : null}
          </div>
          <div className="product-info-section">
            <div className="product-info-section-text">
              <PostContent
                className={'markdown-container description'}
                content={description2}
              />
              <div className="infobox-container">
                <PostContent
                  className={'markdown-container infobox darkblue'}
                  content={infobox2}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ProductTemplate.propTypes = {
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  helmet: PropTypes.object,
  headerimage: PropTypes.oneOf([PropTypes.string, PropTypes.object]),
  description1: PropTypes.string,
  infobox1: PropTypes.string,
  smallimage: PropTypes.oneOf([PropTypes.string, PropTypes.object]),
  fullwidthimage: PropTypes.oneOf([PropTypes.string, PropTypes.object]),
  description2: PropTypes.string,
  infobox2: PropTypes.string,
  productcategory: PropTypes.string,
  productbrochure: PropTypes.object,
  tags: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

const Product = ({ data }) => {
  const { markdownRemark: product } = data;

  return (
    <Layout>
      <ProductTemplate
        contentComponent={HTMLContent}
        helmet={
          <Helmet titleTemplate="%s | Product">
            <title>{`${product.frontmatter.title}`}</title>
            <meta name="description" content={`some description`} />
          </Helmet>
        }
        title={product.frontmatter.title}
        subtitle={product.frontmatter.subtitle}
        headerimage={product.frontmatter.headerimage}
        description1={product.frontmatter.description1}
        infobox1={product.frontmatter.infobox1}
        smallimage={product.frontmatter.smallimage}
        fullwidthimage={product.frontmatter.fullwidthimage}
        description2={product.frontmatter.description2}
        infobox2={product.frontmatter.infobox2}
        productcategory={product.frontmatter.productcategory}
        tags={product.frontmatter.tags}
        productbrochure={product.frontmatter.productbrochure}
      />
    </Layout>
  );
};

Product.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default Product;

export const pageQuery = graphql`
  query ProductByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date
        title
        subtitle
        headerimage {
          childImageSharp {
            fluid(maxWidth: 1440, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description1
        infobox1
        smallimage {
          childImageSharp {
            fluid(maxWidth: 1440, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        fullwidthimage {
          childImageSharp {
            fluid(maxWidth: 1440, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description2
        infobox2
        productcategory
        productbrochure {
          publicURL
        }
        tags
      }
    }
  }
`;
