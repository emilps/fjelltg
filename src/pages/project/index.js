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
              'Fjell Technology Group has more than 40 years of experience and development of process technology within mass and heat transfer.'
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
