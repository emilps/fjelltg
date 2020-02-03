import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';
import twitter from '../img/social/twitter.svg';
import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';
import linkedin from '../img/social/linkedin.svg';

const mediums = {
  Twitter: twitter,
  Facebook: facebook,
  Instagram: instagram,
  LinkedIn: linkedin
};

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    return (
      <div className="columns is-centered">
        {posts &&
          posts
            .sort(function(a, b) {
              const aSplit = a.node.frontmatter.date.split('.');
              const bSplit = b.node.frontmatter.date.split('.');
              return (
                new Date(bSplit[2], bSplit[1], bSplit[0]) -
                new Date(aSplit[2], aSplit[1], aSplit[0])
              );
            })
            .map(({ node: post }, index) => {
              if (index < 3) {
                return (
                  <div
                    className="is-parent blog-container column remove-padding is-4"
                    key={post.id}
                  >
                    <div className="blog-top">
                      <p>{post.frontmatter.date}</p>
                      <img
                        className="fas fa-lg"
                        src={mediums[post.frontmatter.socialmedia]}
                        alt="Twitter"
                        style={{ width: '1em', height: '1em' }}
                      />
                    </div>
                    <div className="blog-roll-image">
                      {post.frontmatter.featuredimage ? (
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: post.frontmatter.featuredimage,
                            alt: `featured image for post ${post.title}`,
                            imageStyle: {
                              objectFit: 'cover'
                            }
                          }}
                        />
                      ) : null}
                    </div>
                    <div className="blog-bottom">
                      <p className="has-text-centered">
                        {post.frontmatter.description}
                      </p>
                      <a
                        className="button submit-button blog-button"
                        href={post.frontmatter.link}
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                );
              }
            })}
      </div>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

const BlogRollQuery = () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 300)
              id
              fields {
                slug
              }
              frontmatter {
                templateKey
                date
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 650, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                link
                description
                socialmedia
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);

BlogRollQuery.displayName = 'BlogRollQuery';
export default BlogRollQuery;
