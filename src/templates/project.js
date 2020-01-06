import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import Img from 'gatsby-image';

export const ProjectTemplate = ({
  description,
  title,
  helmet,
  secondtitle,
  seconddescription,
  thirdtitle,
  thirddescription,
  mainimage,
  firstminiatureimage,
  secondminiatureimage
}) => {
  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            {mainimage ? (
              <div>
                <Img
                  style={{ maxHeight: '400px' }}
                  fluid={mainimage.childImageSharp.fluid}
                  alt={`featured image thumbnail for project ${title}`}
                />
              </div>
            ) : null}
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {secondtitle}
            </h1>
            <p>{seconddescription}</p>
            {firstminiatureimage ? (
              <div>
                <Img
                  style={{ maxHeight: '480px', maxWidth: '200px' }}
                  fluid={firstminiatureimage.childImageSharp.fluid}
                  alt={`featured image thumbnail for project ${secondtitle}`}
                />
              </div>
            ) : null}
            {secondminiatureimage ? (
              <div>
                <Img
                  style={{ maxHeight: '200px', maxWidth: '200px' }}
                  fluid={secondminiatureimage.childImageSharp.fluid}
                  alt={`featured image thumbnail for project ${secondtitle}`}
                />
              </div>
            ) : null}
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {thirdtitle}
            </h1>
            <p>{thirddescription}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

ProjectTemplate.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  seconddescription: PropTypes.string,
  secondtitle: PropTypes.string,
  thirddescription: PropTypes.string,
  thirdtitle: PropTypes.string,
  helmet: PropTypes.object,
  mainimage: PropTypes.any,
  firstminiatureimage: PropTypes.any,
  secondminiatureimage: PropTypes.any
};

const Project = ({ data }) => {
  const { markdownRemark: project } = data;

  return (
    <Layout>
      <ProjectTemplate
        description={project.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${project.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${project.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={project.frontmatter.tags}
        title={project.frontmatter.title}
        secondtitle={project.frontmatter.secondtitle}
        seconddescription={project.frontmatter.seconddescription}
        thirdtitle={project.frontmatter.thirdtitle}
        thirddescription={project.frontmatter.thirddescription}
        mainimage={project.frontmatter.mainimage}
        firstminiatureimage={project.frontmatter.firstminiatureimage}
        secondminiatureimage={project.frontmatter.secondminiatureimage}
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
        secondtitle
        seconddescription
        thirdtitle
        thirddescription
        mainimage {
          childImageSharp {
            fluid(maxWidth: 1080, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        firstminiatureimage {
          childImageSharp {
            fluid(maxWidth: 120, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        secondminiatureimage {
          childImageSharp {
            fluid(maxWidth: 120, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
