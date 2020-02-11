import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';

class NavbarProductRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: productCategories } = data.allMarkdownRemark;

    return (
      <div className="navbar-dropdown">
        {productCategories &&
          productCategories.map(({ node: productCategory }) => (
            <Link
              className="navbar-item"
              to={productCategory.fields.slug}
              key={productCategory.id}
            >
              {productCategory.frontmatter.title}
            </Link>
          ))}
      </div>
    );
  }
}

NavbarProductRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

const NavbarProductRollQuery = () => (
  <StaticQuery
    query={graphql`
      query NavbarProductRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "productcategory" } } }
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
    render={(data, count) => <NavbarProductRoll data={data} count={count} />}
  />
);

NavbarProductRollQuery.displayName = 'NavbarProductRollQuery';
export default NavbarProductRollQuery;
