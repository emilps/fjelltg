import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

export const ProductRoll = ({ data, filterByCategory }) => {
  const filterProductRoll = (categoryTitle, products) => {
    return products.filter(
      ({ node: product }) =>
        product.frontmatter.productcategory === categoryTitle
    );
  };

  const { edges: products } = data.allMarkdownRemark;
  const categoryFilteredProducts = filterProductRoll(
    filterByCategory,
    products
  );

  return (
    <div className="product-roll-container">
      {categoryFilteredProducts && categoryFilteredProducts.length ? (
        categoryFilteredProducts.map(({ node: product }) => (
          <div className="product-roll-product-container" key={product.id}>
            <Link className="" to={product.fields.slug}>
              {product.frontmatter.headerimage ? (
                <div className="product-image">
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: product.frontmatter.headerimage,
                      alt: `featured image thumbnail for ${product.frontmatter.title}`,
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
                <p>{product.frontmatter.title.toUpperCase()}</p>
              </div>
            </Link>
          </div>
        ))
      ) : (
        <div style={{ width: '100%' }}>
          <p className="has-text-centered">
            - There are no products within this category -
          </p>
        </div>
      )}
    </div>
  );
};

ProductRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  }),
  filterByCategory: PropTypes.string
};

const ProductRollQuery = props => (
  <StaticQuery
    query={graphql`
      query ProductRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "product" } } }
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
                productcategory
                headerimage {
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
      <ProductRoll data={data} count={count} {...props} />
    )}
  />
);

ProductRollQuery.displayName = 'ProductRollQuery';
export default ProductRollQuery;
