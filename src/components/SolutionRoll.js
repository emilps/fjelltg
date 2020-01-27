import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

class SolutionRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: solutions } = data.allMarkdownRemark;

    return (
      <div className="outer-container-roll is-multiline">
        {solutions &&
          solutions.map(({ node: solution }, index) => (
            <div className="object-container remove-padding" key={solution.id}>
              <Link className="" to={solution.fields.slug}>
                {solution.frontmatter.featuredimage ? (
                  <div className="object-image">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: solution.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${solution.title}`,
                        style: { objectFit: 'cover', height: '350px' }
                      }}
                    />
                  </div>
                ) : null}
                <p className="object-text title is-uppercase">
                  {solution.frontmatter.title}
                </p>
              </Link>
            </div>
          ))}
      </div>
    );
  }
}

SolutionRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

const SolutionRollQuery = () => (
  <StaticQuery
    query={graphql`
      query SolutionRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "solution" } } }
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
                featuredimage {
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
    render={(data, count) => <SolutionRoll data={data} count={count} />}
  />
);

SolutionRollQuery.displayName = 'SolutionRollQuery';
export default SolutionRollQuery;
