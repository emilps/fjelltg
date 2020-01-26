import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

export const EmployeeTemplate = ({
  content,
  contentComponent,
  position,
  name,
  picture,
  email,
  linkedIn,
  phoneNumber
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {name}
            </h1>
            <PostContent content={content} />
            <PreviewCompatibleImage
              imageInfo={{
                image: picture
              }}
            />
            <h4>{position}</h4>
            <h4>{phoneNumber}</h4>
            <h4>{email}</h4>
            <h4>{linkedIn}</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

EmployeeTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  name: PropTypes.string,
  position: PropTypes.string,
  picture: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  phoneNumber: PropTypes.number,
  email: PropTypes.string,
  linkedIn: PropTypes.string
};

const Employee = ({ data }) => {
  const { markdownRemark: employee } = data;

  return (
    <Layout>
      <EmployeeTemplate
        content={employee.html}
        contentComponent={HTMLContent}
        position={employee.frontmatter.position}
        name={employee.frontmatter.name}
        picture={employee.frontmatter.picture}
        email={employee.frontmatter.email}
        linkedIn={employee.frontmatter.linkedin}
        phoneNumber={employee.frontmatter.phonenumber}
      />
    </Layout>
  );
};

Employee.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default Employee;

export const pageQuery = graphql`
  query EmployeeByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        name
        position
        email
        linkedin
        phonenumber
        picture {
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
