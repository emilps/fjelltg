import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { graphql, Link } from 'gatsby';

//const isIE = /*@cc_on!@*/ false || !!document.documentMode;

const RelatedProducts = ({ relatedproducts, title1 }) => {
  const [isIE, setIsIE] = useState(false);

  useEffect(() => {
    setIsIE(/*@cc_on!@*/ false || !!document.documentMode);
  }, []);

  if (relatedproducts) {
    if (
      relatedproducts['relatedproduct1'] === null &&
      relatedproducts['relatedproduct2'] === null &&
      relatedproducts['relatedproduct3'] === null
    ) {
      relatedproducts = null;
    }
  }

  return (
    <div className="project-related-products">
      <p className="title has-text-centered" style={{ marginBottom: '3rem' }}>
        {title1}
      </p>
      <div className={`columns ${!isIE && 'is-centered'}`}>
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
                    maxWidth: '550px',
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
                      className="related-product"
                    >
                      <Img
                        fluid={
                          relatedproducts[product].headerimage.childImageSharp
                            .fluid
                        }
                        alt={`featured image thumbnail for ${title1}`}
                        style={{
                          height: '270px',
                          width: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </Link>
                  )}
                  <hr
                    style={{
                      backgroundColor: 'black',
                      width: '50%',
                      height: '1px',
                      padding: '0.5px',
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
          <div style={{ textAlign: 'center', margin: '0 auto' }}>
            - No related products found -
          </div>
        )}
      </div>
    </div>
  );
};

RelatedProducts.propTypes = {
  relatedproducts: PropTypes.object,
  title1: PropTypes.string,
};

export default RelatedProducts;
