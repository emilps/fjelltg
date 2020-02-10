import React from 'react';
import Layout from '../components/Layout';
import ProjectRoll from '../components/ProjectRoll';
import PageJumbotron from '../components/PageJumbotron';
import SimpleCompanyQuote from '../components/SimpleCompanyQuote';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

export class ProjectPageTemplate extends React.Component {
  render() {
    const {
      headertitle,
      headerimage,
      headerbyline,
      projectsquote
    } = this.props;

    return (
      <div>
        <PageJumbotron
          title={headertitle}
          image={headerimage}
          description={headerbyline}
        />
        <SimpleCompanyQuote text={projectsquote} isMainQuote={false} />
        <section className="section remove-padding">
          <div className="container remove-margin">
            <div className="content is-fullwidth">
              <ProjectRoll />
            </div>
          </div>
        </section>
        <SimpleCompanyQuote
          text={'Your partner for mass and heat transfer technology'}
          isMainQuote={true}
        />
      </div>
    );
  }
}

ProjectPageTemplate.propTypes = {
  headerimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  headertitle: PropTypes.string,
  headerbyline: PropTypes.string,
  projectsquote: PropTypes.string
};

const ProjectsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ProjectPageTemplate
        headerimage={frontmatter.headerimage}
        headertitle={frontmatter.headertitle}
        headerbyline={frontmatter.headerbyline}
        projectsquote={frontmatter.projectsquote}
      />
    </Layout>
  );
};

ProjectsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default ProjectsPage;

export const projectsPageQuery = graphql`
  query ProjectsPage {
    markdownRemark(frontmatter: { templateKey: { eq: "projects" } }) {
      frontmatter {
        projectsquote
        headertitle
        headerbyline
        headerimage {
          childImageSharp {
            fluid(maxWidth: 1080, quality: 64) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
