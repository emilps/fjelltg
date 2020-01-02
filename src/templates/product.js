import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
/* import Content, { HTMLContent }  from '../components/Content'; */

export const ProductTemplate = ({
  /*   content,
  contentComponent, */
  title,
  helmet
}) => {
  /* const PostContent = contentComponent || Content; */

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            {/*             <PostContent content={content} /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

ProductTemplate.propTypes = {
  /* content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func, */
  title: PropTypes.string,
  subtitle: PropTypes.string,
  helmet: PropTypes.object
};

const Product = ({ data }) => {
  const { markdownRemark: product } = data;

  return (
    <Layout>
      <ProductTemplate
        /*         content={product.html}
        contentComponent={HTMLContent} */
        helmet={
          <Helmet titleTemplate="%s | Product">
            <title>{`${product.frontmatter.title}`}</title>
            <meta name="description" content={`some description`} />
          </Helmet>
        }
        title={product.frontmatter.title}
      />
    </Layout>
  );
};

Product.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default Product;

export const pageQuery = graphql`
  query ProductByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        subtitle
        headerimage {
          childImageSharp {
            fluid(maxWidth: 680, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description1
        infobox1
        smallimage {
          childImageSharp {
            fluid(maxWidth: 680, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        fullwidthimage {
          childImageSharp {
            fluid(maxWidth: 680, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description2
        infobox2
        productcategory
        tags
      }
    }
  }
`;
