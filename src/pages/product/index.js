import React from "react";
import Layout from "../../components/Layout";
import ProductRoll from "../../components/ProductRoll";
import PageJumbotron from "../../components/PageJumbotron";

export default class ProductIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <PageJumbotron
          title={"Products"}
          image={""}
          description={
            "Our base products are used in all our tailored solutions"
          }
        />

        <section className="section">
          <div className="container">
            <div className="content">
              <ProductRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
