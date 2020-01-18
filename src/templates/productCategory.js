import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import ProductRoll from '../components/ProductRoll';
import PageJumbotron from '../components/PageJumbotron';
import SimpleCompanyQuote from '../components/SimpleCompanyQuote';

export const ProductCategoryTemplate = ({
  subtitle,
  title,
  helmet,
  featuredimage
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
        <SimpleCompanyQuote
          text={'Our base products are used in all our tailored solutions'}
          isMainQuote={false}
        />
        <ProductRoll />
      </div>
    </section>
  );
};

ProductCategoryTemplate.propTypes = {
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
