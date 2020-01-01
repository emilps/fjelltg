import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

class ProductCategoryRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: productCategories } = data.allMarkdownRemark;

    return (
      <div className="outer-container-roll is-multiline">
        {productCategories &&
          productCategories.map(({ node: productCategory }, index) => (
            <div
              className="object-container remove-padding"
              key={productCategory.id}
            >
              <Link className="" to={productCategory.fields.slug}>
                {productCategory.frontmatter.featuredimage ? (
                  <div className="object-image">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: productCategory.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${productCategory.title}`
                      }}
                    />
                  </div>
                ) : null}
                <p
                  className={`object-text title is-uppercase ${
                    index % 3 == 0 ? 'black-overlay' : 'blue-overlay'
                  }`}
                >
                  {productCategory.frontmatter.title}
                </p>
              </Link>
            </div>
          ))}
      </div>
    );
  }
}

ProductCategoryRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

const ProductCategoryRollQuery = () => (
  <StaticQuery
    query={graphql`
      query ProductCategoryRollQuery {
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
                templateKey
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
    render={(data, count) => <ProductCategoryRoll data={data} count={count} />}
  />
);

ProductCategoryRollQuery.displayName = 'ProductCategoryRollQuery';
export default ProductCategoryRollQuery;
