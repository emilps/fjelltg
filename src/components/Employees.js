import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import { Employee } from "./Employee";

class Employees extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: employees } = data.allMarkdownRemark;
    console.log(employees);

    return (
      <div className="columns is-multiline">
        {employees &&
          employees.map(({ node: employee }) => (
            <div className="is-parent column is-6" key={employee.id}>
              <article
                className={`blog-list-item tile is-child box notification ${
                  employee.frontmatter.featuredpost ? "is-featured" : ""
                }`}
              >
                <header>
                  <Employee
                    name={employee.frontmatter.name}
                    picture={employee.frontmatter.picture}
                    position={employee.frontmatter.position}
                    email={employee.frontmatter.email}
                    phoneNumber={employee.frontmatter.phoneNumber}
                    linkedIn={employee.frontmatter.linkedIn}
                  />
                  <p className="post-meta">
                    <span> &bull; </span>
                  </p>
                </header>
              </article>
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

export default () => (
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
                featuredpost
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
        }
      }
    `}
    render={(data, count) => <Employees data={data} count={count} />}
  />
);
