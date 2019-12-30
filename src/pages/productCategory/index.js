import React from 'react';
import Layout from '../../components/Layout';
import ProductCategoryRoll from '../../components/ProductCategoryRoll';
import PageJumbotron from '../../components/PageJumbotron';

export default class ProductCategoryIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <PageJumbotron
          title={'Products'}
          image={`url('/img/products-grid2.jpg')`}
          description={'Category overview'}
        />

        <section className="section">
          <div className="container">
            <div className="content">
              <ProductCategoryRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
