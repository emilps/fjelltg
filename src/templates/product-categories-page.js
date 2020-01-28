import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import ProductCategoryRoll from '../components/ProductCategoryRoll';
import PageJumbotron from '../components/PageJumbotron';
import SimpleCompanyQuote from '../components/SimpleCompanyQuote';
import { graphql } from 'gatsby';

export class ProductsPageTemplate extends React.Component {
  render() {
    const {
      headertitle,
      headerimage,
      headerbyline,
      productsquote
    } = this.props;

    return (
      <div>
        <PageJumbotron
          title={headertitle}
          image={headerimage}
          description={headerbyline}
        />
        <SimpleCompanyQuote text={productsquote} isMainQuote={false} />
        <section className="section remove-padding">
          <div className="container remove-margin">
            <div className="content is-fullwidth">
              <ProductCategoryRoll />
            </div>
          </div>
        </section>
        <SimpleCompanyQuote
          text={'Your partner for mass and heat transfer technology'}
          isMainQuote={true}
        />
      </div>
    );
  }
}

ProductsPageTemplate.propTypes = {
  headerimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  headertitle: PropTypes.string,
  headerbyline: PropTypes.string,
  productsquote: PropTypes.string
};

const ProductsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ProductsPageTemplate
        headerimage={frontmatter.headerimage}
        headertitle={frontmatter.headertitle}
        headerbyline={frontmatter.headerbyline}
        productsquote={frontmatter.productsquote}
      />
    </Layout>
  );
};

ProductsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default ProductsPage;

export const productsPageQuery = graphql`
  query ProductsPage {
    markdownRemark(
      frontmatter: { templateKey: { eq: "product-categories-page" } }
    ) {
      frontmatter {
        productsquote
        headertitle
        headerbyline
        headerimage {
          childImageSharp {
            fluid(maxWidth: 1080, quality: 64) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
