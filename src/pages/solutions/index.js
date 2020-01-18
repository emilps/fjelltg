import React from 'react';
import Layout from '../../components/Layout';
import SolutionRoll from '../../components/SolutionRoll';
import PageJumbotron from '../../components/PageJumbotron';

export default class SolutionIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div>
          <PageJumbotron
            title={'Solutions'}
            image={'/img/products-grid2.jpg'}
            description={'All our solutions can be tailor made for YOUR needs'}
          />
          <section className="section is-medium">
            <div className="container">
              <div className="content">
                <p className="has-text-centered is-size-4">
                  FjellTG has over xx years of experience with blabla something
                  nice to introduce the reference projects
                </p>
              </div>
            </div>
          </section>
          <section className="section remove-padding">
            <div className="container remove-margin">
              <div className="content is-fullwidth">
                <SolutionRoll />
              </div>
            </div>
          </section>
          <section className="section is-medium">
            <div className="container">
              <div className="content">
                <p className="has-text-centered title">
                  Your partner for mass and heat transfer technology
                </p>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}
