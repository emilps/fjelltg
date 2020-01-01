import React from 'react';
import Layout from '../../components/Layout';
import ProjectRoll from '../../components/ProjectRoll';
import PageJumbotron from '../../components/PageJumbotron';
import SimpleCompanyQuote from '../../components/SimpleCompanyQuote';
export default class ProjectIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div>
          <PageJumbotron
            title={'Reference Projects'}
            image={''}
            description={
              'Take a look at some of our previous installments! Other product-specific references can be provided on request.'
            }
          />
          <SimpleCompanyQuote
            text={
              'FjellTG has over xx years of experience with blabla something nice to introduce the reference projects'
            }
            isMainQuote={false}
          />
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
      </Layout>
    );
  }
}
