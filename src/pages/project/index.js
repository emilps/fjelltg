import React from "react";
import Layout from "../../components/Layout";
import ProjectRoll from "../../components/ProjectRoll";
import PageJumbotron from "../../components/PageJumbotron";

export default class ProjectIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div>
          <PageJumbotron
            title={"Reference Projects"}
            image={""}
            description={
              "Take a look at some of our previous installments! Other product-specific references can be provided on request."
            }
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
                <ProjectRoll />
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
