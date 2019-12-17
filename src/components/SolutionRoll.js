import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

class SolutionRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: solutions } = data.allMarkdownRemark;

    return (
      <div className="columns is-multiline">
        {solutions &&
          solutions.map(({ node: solution }) => (
            <div className="is-parent column is-6" key={solution.id}>
              <article
                className={`blog-list-item tile is-child box notification`}
              >
                <header>
                  {solution.frontmatter.featuredimage ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: solution.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${solution.title}`
                        }}
                      />
                    </div>
                  ) : null}
                  <p className="post-meta">
                    <Link
                      className="title has-text-primary is-size-4"
                      to={solution.fields.slug}
                    >
                      {solution.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                  </p>
                </header>
                <p>
                  {solution.excerpt}
                  <br />
                  <br />
                  <Link className="button" to={solution.fields.slug}>
                    Trykk her for mer info →
                  </Link>
                </p>
              </article>
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
                templateKey
                subtitle
                solutions
                baseproducts {
                  baseproduct1
                  baseproduct2
                  baseproduct3
                }
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
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
