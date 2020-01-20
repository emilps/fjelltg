import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const filterValues = {
  ALL: 'All',
  WASTE_WATER: 'FishSludge Recovery System',
  PROTEIN_RECYCLING: 'Protein Recycling',
  OIL_GAS: 'Oil & Gas',
  CO2_CAPTURE: 'Co2 Capture'
};

class ProjectRoll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: 0,
      filter: filterValues.ALL
    };
  }

  didSelectItem = (index, filter) => {
    this.setState({ selectedItem: index, filter });
  };

  filterProjects = projects => {
    if (this.state.filter !== filterValues.ALL) {
      const filteredProjects = projects.filter(
        project => project.node.frontmatter.category === this.state.filter
      );
      return filteredProjects;
    } else {
      return projects;
    }
  };

  render() {
    const { data } = this.props;
    const { edges: projects } = data.allMarkdownRemark;
    const { selectedItem } = this.state;

    const filteredProjects = this.filterProjects(projects);

    return (
      <div>
        <div className="section project-filter">
          <div className="is-horizontal-align">
            {Object.keys(filterValues).map((filter, index) => (
              <div key={index} className="is-horizontal-align">
                <div
                  className={`custom-text-button is-size-5 ${
                    index == selectedItem ? 'selected' : ''
                  }`}
                  onClick={() =>
                    this.didSelectItem(index, filterValues[filter])
                  }
                >
                  {filterValues[filter]}{' '}
                </div>
                <p className="is-divider is-size-5">
                  {' '}
                  {index != 4 ? '/ ' : ''}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="columns is-multiline is-gapless">
          {filteredProjects &&
            filteredProjects.map(({ node: project }, index) => (
              <div className="is-parent column is-12" key={project.id}>
                <Link to={project.fields.slug} style={{ color: 'black' }}>
                  <div
                    className={`columns is-gapless 
                  ${index % 2 == 0 ? 'row-reversed' : ''}`}
                  >
                    <div className="column is-half">
                      {project.frontmatter.mainimage ? (
                        <div>
                          <Img
                            style={{ maxHeight: '400px' }}
                            fluid={
                              project.frontmatter.mainimage.childImageSharp
                                .fluid
                            }
                            alt={`featured image thumbnail for project ${project.title}`}
                          />
                        </div>
                      ) : null}
                    </div>
                    <div className="column is-half has-text-centered is-vertical-center	has-background-secondary">
                      <p className="has-text-centered title is-uppercase remove-margin">
                        {project.frontmatter.title}
                      </p>
                      <p className="has-text-centered">
                        {project.frontmatter.category}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
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
                category
                mainimage {
                  childImageSharp {
                    fluid(maxWidth: 1920, quality: 100) {
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
