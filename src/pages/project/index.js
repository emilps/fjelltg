import React from 'react';
import Layout from '../../components/Layout';
import ProjectRoll from '../../components/ProjectRoll';

export default class ProjectIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 #002060, -0.5rem 0 0 #002060',
              backgroundColor: '#002060',
              color: 'white',
              padding: '1rem'
            }}
          >
            Her kommer det informasjon om prosjekter
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <ProjectRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
