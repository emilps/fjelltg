import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

class ProjectRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: projects } = data.allMarkdownRemark;

    return (
      <div className="columns is-multiline">
        {projects &&
          projects.map(({ node: project }, index) => (
            <div className="is-parent column is-12" key={project.id}>
              {console.log(project)}
              {console.log(index)}
              <div className="columns is-gapless">
                {index % 2 == 0 && (
                  <div className="column is-half has-text-centered is-vertical-center	has-background-secondary">
                    <p className="is-primary">{project.frontmatter.title}</p>
                  </div>
                )}
                <div className="column is-half">
                  {project.frontmatter.featuredimage ? (
                    <div className="">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: project.frontmatter.featuredimage,
                          alt: `featured image thumbnail for project ${project.title}`
                        }}
                      />
                    </div>
                  ) : null}
                </div>
                {index % 2 != 0 && (
                  <div className="column is-half has-text-centered is-vertical-center	has-background-secondary">
                    <p className="is-primary">{project.frontmatter.title}</p>
                  </div>
                )}
              </div>
              {/*
              <header>
                {project.frontmatter.featuredimage ? (
                  <div className="featured-thumbnail">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: project.frontmatter.featuredimage,
                        alt: `featured image thumbnail for project ${project.title}`
                      }}
                    />
                  </div>
                ) : null}
                <p className="project-meta">
                  <Link
                    className="title has-text-primary is-size-4"
                    to={project.fields.slug}
                  >
                    {project.frontmatter.title}
                  </Link>
                  <span> &bull; </span>
                </p>
              </header>
              <p>
                {project.excerpt}
                <br />
                <br />
                <Link className="button" to={project.fields.slug}>
                  Trykk her for mer info →
                </Link>
              </p>*/}
            </div>
          ))}
      </div>
    );
  }
}

ProjectRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

const ProjectRollQuery = () => (
  <StaticQuery
    query={graphql`
      query ProjectRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "project" } } }
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
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                tags
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <ProjectRoll data={data} count={count} />}
  />
);

ProjectRollQuery.displayName = 'ProjectRollQuery';
export default ProjectRollQuery;
