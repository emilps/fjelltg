import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import Img from 'gatsby-image';
import RelatedProducts from '../components/RelatedProducts';

export const ProjectTemplate = ({
  description,
  title,
  helmet,
  title1,
  description1,
  title2,
  description2,
  mainimage,
  miniatureimage1,
  miniatureimage2,
  relatedproducts
}) => {
  return (
    <section>
      {helmet || ''}
      <div className="">
        <div>
          <div className="project-title-section">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p className="is-size-5">{description}</p>
          </div>
          <div>
            {mainimage ? (
              <div>
                {typeof mainimage === 'string' ? (
                  <img
                    src={mainimage}
                    style={{ maxHeight: '720px', width: '100%' }}
                  />
                ) : (
                  <Img
                    fluid={mainimage.childImageSharp.fluid}
                    alt={`featured image thumbnail for project ${title1}`}
                    style={{ maxHeight: '720px' }}
                  />
                )}
              </div>
            ) : null}
          </div>
          <div className="project-info-section">
            <div className="project-info-first">
              <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                {title1}
              </h1>
              <p>{description1}</p>
              <div className="columns project-miniature-images">
                {miniatureimage1 ? (
                  <div className="column is-two-fifths">
                    {typeof miniatureimage1 === 'string' ? (
                      <img src={miniatureimage1} style={{ width: '40%' }} />
                    ) : (
                      <Img
                        fluid={miniatureimage1.childImageSharp.fluid}
                        alt={`featured image thumbnail for project ${title1}`}
                        style={{ maxHeight: '270px', maxWidth: '380px' }}
                      />
                    )}
                  </div>
                ) : null}
                {miniatureimage2 ? (
                  <div className="column is-two-fifths">
                    {typeof miniatureimage2 === 'string' ? (
                      <img src={miniatureimage2} style={{ width: '40%' }} />
                    ) : (
                      <Img
                        fluid={miniatureimage2.childImageSharp.fluid}
                        alt={`featured image thumbnail for project ${title1}`}
                        style={{ maxHeight: '270px', maxWidth: '380px' }}
                      />
                    )}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="project-info-second">
              <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                {title2}
              </h1>
              <p>{description2}</p>
            </div>
          </div>
          <RelatedProducts relatedproducts={relatedproducts} title1={title1} />
        </div>
      </div>
    </section>
  );
};

ProjectTemplate.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  description1: PropTypes.string,
  title1: PropTypes.string,
  description2: PropTypes.string,
  title2: PropTypes.string,
  helmet: PropTypes.object,
  mainimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  miniatureimage1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  miniatureimage2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  relatedproducts: PropTypes.object
};

const Project = ({ data }) => {
  const { markdownRemark: project } = data;

  return (
    <Layout>
      <ProjectTemplate
        description={project.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Projects">
            <title>{`${project.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${project.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={project.frontmatter.tags}
        title={project.frontmatter.title}
        title1={project.frontmatter.title1}
        description1={project.frontmatter.description1}
        title2={project.frontmatter.title2}
        description2={project.frontmatter.description2}
        mainimage={project.frontmatter.mainimage}
        miniatureimage1={project.frontmatter.miniatureimage1}
        miniatureimage2={project.frontmatter.miniatureimage2}
        relatedproducts={project.frontmatter.relatedproducts}
      />
    </Layout>
  );
};

Project.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default Project;

export const pageQuery = graphql`
  query ProjectByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
        title1
        description1
        title2
        description2
        relatedproducts {
          relatedproduct1 {
            title
            slug
            fullwidthimage {
              childImageSharp {
                fluid(maxWidth: 380, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          relatedproduct2 {
            title
            slug
            fullwidthimage {
              childImageSharp {
                fluid(maxWidth: 380, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          relatedproduct3 {
            title
            slug
            fullwidthimage {
              childImageSharp {
                fluid(maxWidth: 380, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        mainimage {
          childImageSharp {
            fluid(maxWidth: 1080, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        miniatureimage1 {
          childImageSharp {
            fluid(maxWidth: 380, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        miniatureimage2 {
          childImageSharp {
            fluid(maxWidth: 380, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
