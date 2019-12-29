import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

export const SolutionTemplate = ({
  content,
  contentComponent,
  solutions,
  subtitle,
  tags,
  title,
  baseproducts,
  featuredimage,
  helmet
}) => {
  const PostContent = contentComponent || Content;
  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{subtitle}</p>
            {featuredimage ? (
              <div className="featured-thumbnail">
                <PreviewCompatibleImage
                  imageInfo={{
                    image: featuredimage,
                    alt: `featured image thumbnail for post ${title}`
                  }}
                />
              </div>
            ) : null}
            <p>{solutions}</p>
            <PostContent content={content} />
            <h4>Other products</h4>
            {Object.keys(baseproducts).map((product, index) => (
              <div key={index} className="is-horizontal-align">
                <p>{baseproducts[product]}</p>
              </div>
            ))}
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

SolutionTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  tags: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  baseproducts: PropTypes.object,
  solutions: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  featuredimage: PropTypes.object
};

const Solution = ({ data }) => {
  const { markdownRemark: solution } = data;

  return (
    <Layout>
      <SolutionTemplate
        content={solution.html}
        contentComponent={HTMLContent}
        solutions={solution.frontmatter.solutions}
        subtitle={solution.frontmatter.subtitle}
        baseproducts={solution.frontmatter.baseproducts}
        featuredimage={solution.frontmatter.featuredimage}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${solution.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${solution.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={solution.frontmatter.tags}
        title={solution.frontmatter.title}
      />
    </Layout>
  );
};

Solution.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default Solution;

export const pageQuery = graphql`
  query SolutionByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        subtitle
        solutions
        tags
        baseproducts {
          baseproduct1
          baseproduct2
          baseproduct3
        }
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
`;
