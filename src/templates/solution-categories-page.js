import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import SolutionRoll from '../components/SolutionRoll';
import PageJumbotron from '../components/PageJumbotron';
import SimpleCompanyQuote from '../components/SimpleCompanyQuote';
import { graphql } from 'gatsby';

export class SolutionsPageTemplate extends React.Component {
  render() {
    const {
      headertitle,
      headerimage,
      headerbyline,
      solutionsquote
    } = this.props;

    return (
      <div>
        <PageJumbotron
          title={headertitle}
          image={headerimage}
          description={headerbyline}
        />
        <SimpleCompanyQuote text={solutionsquote} isMainQuote={false} />
        <section className="section remove-padding">
          <div className="container remove-margin">
            <div className="content is-fullwidth">
              <SolutionRoll />
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

SolutionsPageTemplate.propTypes = {
  headerimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  headertitle: PropTypes.string,
  headerbyline: PropTypes.string,
  solutionsquote: PropTypes.string
};

const SolutionsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <SolutionsPageTemplate
        headerimage={frontmatter.headerimage}
        headertitle={frontmatter.headertitle}
        headerbyline={frontmatter.headerbyline}
        solutionsquote={frontmatter.solutionsquote}
      />
    </Layout>
  );
};

SolutionsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default SolutionsPage;

export const solutionsPageQuery = graphql`
  query SolutionsPage {
    markdownRemark(
      frontmatter: { templateKey: { eq: "solution-categories-page" } }
    ) {
      frontmatter {
        solutionsquote
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
