import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { graphql, Link } from 'gatsby';

const RelatedProducts = ({ relatedproducts, title1 }) => (
  <div className="project-related-products">
    <p className="title has-text-centered" style={{ marginBottom: '3rem' }}>
      {title1}
    </p>
    <div className="columns is-centered">
      {relatedproducts ? (
        Object.keys(relatedproducts).map((product, index) => {
          if (relatedproducts[product]) {
            return (
              <div
                key={index}
                className="is-horizontal-align column"
                style={{
                  flexDirection: 'column',
                  maxHeight: '350px',
                  maxWidth: '550px'
                }}
              >
                {typeof relatedproducts[product].headerimage === 'string' ? (
                  <img
                    src={relatedproducts[product].headerimage}
                    style={{ width: '40%' }}
                  />
                ) : (
                  <Link
                    to={'/product/' + relatedproducts[product]['slug']}
                    style={{ width: '94%' }}
                  >
                    <Img
                      fluid={
                        relatedproducts[product].headerimage.childImageSharp
                          .fluid
                      }
                      alt={`featured image thumbnail for ${title1}`}
                      style={{ height: '270px', width: '380px' }}
                    />
                  </Link>
                )}
                <hr
                  style={{
                    backgroundColor: 'black',
                    width: '50%',
                    height: '1px',
                    padding: '0.5px'
                  }}
                ></hr>
                <Link
                  className="title is-5 has-text-centered	"
                  to={'/product/' + relatedproducts[product]['slug']}
                >
                  {relatedproducts[product]['title']}
                </Link>
              </div>
            );
          }
        })
      ) : (
        <div style={{ textAlign: 'center' }}>- No related products found -</div>
      )}
    </div>
  </div>
);

RelatedProducts.propTypes = {
  relatedproducts: PropTypes.object,
  title1: PropTypes.string
};

export default RelatedProducts;
