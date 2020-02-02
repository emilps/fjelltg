import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import ProductCategoryRoll from '../components/ProductCategoryRoll';
import PageJumbotron from '../components/PageJumbotron';
import SimpleCompanyQuote from '../components/SimpleCompanyQuote';
import { graphql } from 'gatsby';

export class TestCentrePageTemplate extends React.Component {
  render() {
    const {
      headertitle,
      headerimage,
      headerbyline,
      TestCentrequote
    } = this.props;

    return (
      <div>
        <PageJumbotron
          title={headertitle}
          image={headerimage}
          description={headerbyline}
        />
        <SimpleCompanyQuote text={TestCentrequote} isMainQuote={false} />
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

TestCentrePageTemplate.propTypes = {
  headerimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  headertitle: PropTypes.string,
  headerbyline: PropTypes.string,
  testcentrequote: PropTypes.string
};

const TestCentrePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <TestCentrePageTemplate
        headerimage={frontmatter.headerimage}
        headertitle={frontmatter.headertitle}
        headerbyline={frontmatter.headerbyline}
        testcentrequote={frontmatter.productsquote}
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
