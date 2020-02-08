import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

export const SolutionsRoll = ({ data, filterByCategory }) => {
  const filterSolutionsRoll = (categoryTitle, solutions) => {
    return solutions.filter(
      ({ node: solution }) =>
        solution.frontmatter.solutioncategory === categoryTitle
    );
  };

  const { edges: solutions } = data.allMarkdownRemark;

  const categoryFilteredSolutions = filterSolutionsRoll(
    filterByCategory,
    solutions
  );

  return (
    <div className="solution-roll-container">
      {categoryFilteredSolutions && categoryFilteredSolutions.length ? (
        categoryFilteredSolutions.map(({ node: solution }) => (
          <div className="solution-roll-product-container" key={solution.id}>
            <Link className="" to={solution.fields.slug}>
              {solution.frontmatter.featuredimage ? (
                <div className="product-image">
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: solution.frontmatter.featuredimage,
                      alt: `featured image thumbnail for ${solution.frontmatter.title}`,
                      style: { height: '280px', width: '380px' }
                    }}
                  />
                </div>
              ) : null}
              <div className="product-info">
                <hr
                  className="has-text-centered"
                  style={{
                    backgroundColor: '#002060',
                    width: '60%',
                    height: '1px',
                    padding: '1px',
                    margin: '20px 0 10px 0'
                  }}
                ></hr>
                <p>{solution.frontmatter.title.toUpperCase()}</p>
              </div>
            </Link>
          </div>
        ))
      ) : (
        <div style={{ width: '100%' }}>
          <p className="has-text-centered">
            - There are no Solutions within this category -
          </p>
        </div>
      )}
    </div>
  );
};

SolutionsRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  }),
  filterByCategory: PropTypes.string
};

const SolutionsRollQuery = props => (
  <StaticQuery
    query={graphql`
      query SolutionsRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "solution" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                solutioncategory
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
        }
      }
    `}
    render={(data, count) => (
      <SolutionsRoll data={data} count={count} {...props} />
    )}
  />
);

SolutionsRollQuery.displayName = 'SolutionsRollQuery';
export default SolutionsRollQuery;
