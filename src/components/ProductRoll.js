import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

class ProductRoll extends React.Component {
  filterProductRoll = (categoryTitle, products) => {
    console.log(categoryTitle);
    return products.filter(
      ({ node: product }) =>
        product.frontmatter.productcategory === categoryTitle
    );
  };

  render() {
    const { data } = this.props;
    const { edges: products } = data.allMarkdownRemark;
    /* const categoryFilteredProducts = this.filterProductRoll(
      this.props.filterByCategory,
      products
    ); */

    return (
      <div className="product-roll-container">
        {products &&
          products.map(({ node: product }) => (
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
          ))}
      </div>
    );
  }
}

ProductRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  }),
  filterByCategory: PropTypes.string
};

const ProductRollQuery = () => (
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
    render={(data, count) => <ProductRoll data={data} count={count} />}
  />
);

ProductRollQuery.displayName = 'ProductRollQuery';
export default ProductRollQuery;
