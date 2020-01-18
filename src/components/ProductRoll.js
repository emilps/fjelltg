import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

class ProductRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: products } = data.allMarkdownRemark;

    return (
      <div className="outer-container-roll is-multiline">
        {products &&
          products.map(({ node: product }, index) => (
            <div className="object-container" key={product.id}>
              <Link className="" to={product.fields.slug}>
                {product.frontmatter.headerimage ? (
                  <div className="object-image">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: product.frontmatter.headerimage,
                        alt: `featured image thumbnail for ${product.title}`
                      }}
                    />
                  </div>
                ) : null}
                <p
                  className={`object-text title is-uppercase ${
                    index % 3 == 0 ? 'black-overlay' : 'blue-overlay'
                  }`}
                >
                  {product.frontmatter.title}
                </p>
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
  })
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
