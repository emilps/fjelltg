import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import { Employee } from './Employee';

class Employees extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: employees } = data.allMarkdownRemark;

    return (
      <div className="columns is-multiline">
        {employees &&
          employees.map(({ node: employee }, index) => (
            <div className="is-parent column is-4" key={employee.id}>
              <header>
                <Employee
                  name={employee.frontmatter.name}
                  picture={employee.frontmatter.picture}
                  position={employee.frontmatter.position}
                  email={employee.frontmatter.email}
                  phoneNumber={employee.frontmatter.phonenumber}
                  linkedIn={employee.frontmatter.linkedin}
                  index={index}
                />
              </header>
            </div>
          ))}
      </div>
    );
  }
}

Employees.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

const EmployeesQuery = () => (
  <StaticQuery
    query={graphql`
      query EmployeesQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "employee" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                templateKey
                name
                position
                email
                linkedin
                phonenumber
                picture {
                  childImageSharp {
                    fluid(maxWidth: 350, quality: 100) {
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
    render={(data, count) => <Employees data={data} count={count} />}
  />
);

EmployeesQuery.displayName = 'EmployeesQuery';
export default EmployeesQuery;
