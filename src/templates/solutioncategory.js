import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import ProductRoll from '../components/ProductRoll';
import PageJumbotron from '../components/PageJumbotron';
import SimpleCompanyQuote from '../components/SimpleCompanyQuote';

export const SolutionCategoryTemplate = ({
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
        <ProductRoll filterByCategory={title} />
      </div>
    </section>
  );
};

SolutionCategoryTemplate.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  featuredimage: PropTypes.object
};

const SolutionCategory = ({ data }) => {
  const { markdownRemark: solutionCategory } = data;

  return (
    <Layout>
      <SolutionCategoryTemplate
        subtitle={solutionCategory.frontmatter.subtitle}
        helmet={
          <Helmet titleTemplate="%s | solutionCategory">
            <title>{`${solutionCategory.frontmatter.title}`}</title>
            <meta
              name="text"
              content={`${solutionCategory.frontmatter.text}`}
            />
          </Helmet>
        }
        title={solutionCategory.frontmatter.title}
        featuredimage={solutionCategory.frontmatter.featuredimage}
      />
    </Layout>
  );
};

SolutionCategory.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default SolutionCategory;

export const pageQuery = graphql`
  query SolutionCategoryByID($id: String!) {
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
      }
    }
  }
`;
