import React from 'react';
import Layout from '../components/Layout';
import ProductCategoryRoll from '../components/ProductCategoryRoll';
import PageJumbotron from '../components/PageJumbotron';
import SimpleCompanyQuote from '../components/SimpleCompanyQuote';
import { graphql } from 'gatsby';

export default class ProductCategoryIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <PageJumbotron
          title={'Products'}
          image={'/img/products-grid2.jpg'}
          description={'Category overview'}
        />
        <SimpleCompanyQuote
          text={'Our base products are used in all our tailored solutions'}
          isMainQuote={false}
        />
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
      </Layout>
    );
  }
}
/*
export const pageQuery = graphql`
  query ProductsPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "products-page" } }) {
      frontmatter {
        headertitle
        headerbyline
        headerimage {
          childImageSharp {
            fluid(maxWidth: 1080, quality: 64) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        productsqoute
      }
    }
  }
`;
*/
