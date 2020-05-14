import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import ProductRoll from '../components/ProductRoll';
import PageJumbotron from '../components/PageJumbotron';
import SimpleCompanyQuote from '../components/SimpleCompanyQuote';
import showdown from 'showdown';
const converter = new showdown.Converter();

export const ProductCategoryTemplate = ({
  subtitle,
  title,
  helmet,
  featuredimage,
  text,
}) => {
  return (
    <section>
      {helmet || ''}
      <div>
        <PageJumbotron
          title={title}
          description={subtitle}
          image={featuredimage}
        />
        <div
          className={'product-category-section content'}
          dangerouslySetInnerHTML={{
            __html: converter.makeHtml(text),
          }}
        />
        <p className="title products-category-title">Products</p>
        <ProductRoll filterByCategory={title} />
      </div>
    </section>
  );
};

ProductCategoryTemplate.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  featuredimage: PropTypes.object,
};

const ProductCategory = ({ data }) => {
  const { markdownRemark: productCategory } = data;

  return (
    <Layout>
      <ProductCategoryTemplate
        subtitle={productCategory.frontmatter.subtitle}
        helmet={
          <Helmet titleTemplate="%s | ProductCategory">
            <title>{`${productCategory.frontmatter.title}`}</title>
            <meta
              name="text"
              content={`${productCategory.frontmatter.subtitle}`}
            />
          </Helmet>
        }
        title={productCategory.frontmatter.title}
        featuredimage={productCategory.frontmatter.featuredimage}
        text={productCategory.frontmatter.text}
      />
    </Layout>
  );
};

ProductCategory.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default ProductCategory;

export const pageQuery = graphql`
  query ProductCategoryByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date
        title
        subtitle
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 680, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        text
      }
    }
  }
`;
