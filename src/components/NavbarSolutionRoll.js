import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';

class NavbarSolutionRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: solutionCategories } = data.allMarkdownRemark;

    return (
      <div className="navbar-dropdown">
        {solutionCategories &&
          solutionCategories.map(({ node: solutionCategory }) => (
            <Link
              className="navbar-item"
              to={solutionCategory.fields.slug}
              key={solutionCategory.id}
            >
              {solutionCategory.frontmatter.title}
            </Link>
          ))}
      </div>
    );
  }
}

NavbarSolutionRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

const NavbarSolutionRollQuery = () => (
  <StaticQuery
    query={graphql`
      query NavbarSolutionRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "solutioncategory" } } }
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
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <NavbarSolutionRoll data={data} count={count} />}
  />
);

NavbarSolutionRollQuery.displayName = 'NavbarSolutionRollQuery';
export default NavbarSolutionRollQuery;
