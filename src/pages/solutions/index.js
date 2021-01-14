import React from 'react';
import Layout from '../../components/Layout';
import SolutionRoll from '../../components/SolutionRoll';
import PageJumbotron from '../../components/PageJumbotron';
import SimpleCompanyQuote from '../../components/SimpleCompanyQuote';

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
          <SimpleCompanyQuote
            text={
              'Fjell Technology Group has more than 40 years of experience and development of process technology within mass and heat transfer.'
            }
            isMainQuote={false}
          />
          <section className="section remove-padding">
            <div className="container remove-margin">
              <div className="content is-fullwidth">
                <SolutionRoll />
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
