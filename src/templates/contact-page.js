import React from 'react';
import { navigate } from 'gatsby-link';
import Layout from '../components/Layout';
import Employees from '../components/Employees';
import PageJumbotron from '../components/PageJumbotron';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export class ContactPageTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error));
  };

  render() {
    const {
      headertitle,
      headerimage,
      headerbyline,
      formtitle,
      employeetitle,
      mapiframe
    } = this.props;

    return (
      <div>
        <PageJumbotron
          title={headertitle}
          image={headerimage}
          description={headerbyline}
        />
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="has-text-centered form-title is-size-4">
                {formtitle}
              </h1>
              <form
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="columns">
                  <div className="field column">
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'name'}
                        onChange={this.handleChange}
                        id={'name'}
                        required={true}
                        placeholder="Your name"
                      />
                    </div>
                  </div>
                  <div className="field column">
                    <div className="control">
                      <input
                        className="input"
                        type={'email'}
                        name={'email'}
                        onChange={this.handleChange}
                        id={'email'}
                        required={true}
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <textarea
                      className="textarea"
                      name={'message'}
                      onChange={this.handleChange}
                      id={'message'}
                      required={true}
                      placeholder="What can we do for you?"
                    />
                  </div>
                </div>
                <div className="field submit-button-container">
                  <button
                    className="button submit-button is-link"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
        <section className="map-container">
          <div
            dangerouslySetInnerHTML={{
              __html: `
            <iframe src="https://maps.google.com/maps?q=${mapiframe}&z=10&output=embed" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
`
            }}
          />
        </section>
        <section className="is-large">
          <div className="container">
            <h1 className="title has-text-centered management-title">
              {employeetitle}
            </h1>
            <Employees />
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
    );
  }
}

ContactPageTemplate.propTypes = {
  headerimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  headertitle: PropTypes.string,
  headerbyline: PropTypes.string,
  formtitle: PropTypes.string,
  employeetitle: PropTypes.string,
  mapiframe: PropTypes.string
};

const ContactPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ContactPageTemplate
        headerimage={frontmatter.headerimage}
        headertitle={frontmatter.headertitle}
        headerbyline={frontmatter.headerbyline}
        formtitle={frontmatter.formtitle}
        employeetitle={frontmatter.employeetitle}
        mapiframe={frontmatter.mapiframe}
      />
    </Layout>
  );
};

ContactPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default ContactPage;

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        headertitle
        headerbyline
        headerimage {
          childImageSharp {
            fluid(maxWidth: 1080, quality: 64) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        formtitle
        employeetitle
        mapiframe
      }
    }
  }
`;
