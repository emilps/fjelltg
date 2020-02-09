import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SolutionsRoll from '../components/SolutionsRoll';
import PageJumbotron from '../components/PageJumbotron';
import SimpleCompanyQuote from '../components/SimpleCompanyQuote';
import Content, { HTMLContent } from '../components/Content';

export const SolutionCategoryTemplate = ({
  subtitle,
  title,
  helmet,
  featuredimage,
  texttitle,
  contentComponent,
  content
}) => {
  const PageContent = contentComponent || Content;
  return (
    <section>
      {helmet || ''}
      <div>
        <PageJumbotron
          title={title}
          description={subtitle}
          image={featuredimage}
        />
        <div className="about-section">
          <p className="title is-size-4">{texttitle}</p>
          <PageContent className="content" content={content} />
        </div>

        <div className="about-section">
          <p className="title">Solutions</p>
          <SolutionsRoll filterByCategory={title} />
        </div>
        <SimpleCompanyQuote
          text={'Your partner for mass and heat transfer technology'}
          isMainQuote={true}
        />
      </div>
    </section>
  );
};

SolutionCategoryTemplate.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  texttitle: PropTypes.string,
  contentComponent: PropTypes.func,
  content: PropTypes.string
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
        contentComponent={HTMLContent}
        title={solutionCategory.frontmatter.title}
        featuredimage={solutionCategory.frontmatter.featuredimage}
        texttitle={solutionCategory.frontmatter.texttitle}
        content={solutionCategory.frontmatter.information}
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
        texttitle
        information
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
