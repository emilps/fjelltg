import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import ProductRoll from '../components/ProductRoll';

export const ProductCategoryTemplate = ({
  content,
  contentComponent,
  subtitle,
  title,
  helmet,
  featuredimage
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{subtitle}</p>
            {featuredimage ? (
              <div className="featured-thumbnail">
                <PreviewCompatibleImage
                  imageInfo={{
                    image: featuredimage,
                    alt: `featured image thumbnail for post ${title}`
                  }}
                />
              </div>
            ) : null}
            <PostContent content={content} />
            <ProductRoll />
          </div>
        </div>
      </div>
    </section>
  );
};

ProductCategoryTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  featuredimage: PropTypes.object
};

const ProductCategory = ({ data }) => {
  const { markdownRemark: productCategory } = data;

  return (
    <Layout>
      <ProductCategoryTemplate
        content={productCategory.html}
        contentComponent={HTMLContent}
        subtitle={productCategory.frontmatter.subtitle}
        helmet={
          <Helmet titleTemplate="%s | ProductCategory">
            <title>{`${productCategory.frontmatter.title}`}</title>
            <meta name="text" content={`${productCategory.frontmatter.text}`} />
          </Helmet>
        }
        title={productCategory.frontmatter.title}
        featuredimage={productCategory.frontmatter.featuredimage}
      />
    </Layout>
  );
};

ProductCategory.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default ProductCategory;

export const pageQuery = graphql`
  query ProductCategoryByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        subtitle
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 680, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
