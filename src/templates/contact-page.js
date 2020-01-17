import React from 'react';
import { navigate } from 'gatsby-link';
import Layout from '../components/Layout';
import Employees from '../components/Employees';
import PageJumbotron from '../components/PageJumbotron';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: 60.348052, lng: 5.129922 }}
    >
      {props.isMarkerShown && (
        <Marker position={{ lat: 60.348052, lng: 5.129922 }} />
      )}
    </GoogleMap>
  ))
);

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default class ContactPage extends React.Component {
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
    const { frontmatter } = this.props.data.markdownRemark;

    return (
      <Layout>
        <PageJumbotron
          title={frontmatter.headertitle}
          image={frontmatter.headerimage}
          description={frontmatter.headerbyline}
        />
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="has-text-centered form-title is-size-4">
                Let's talk about your project
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
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63164.15731682712!2d5.059505359068912!3d60.34810013596297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463ce4e16b9ff8c5%3A0x53a88b203461729c!2sFjell%20Technology%20Group%20AS!5e0!3m2!1sen!2sno!4v1579202795590!5m2!1sen!2sno" 
            width="100%" 
            height="400" 
            frameborder="0" 
            style="border:0;" 
            allowfullscreen=""></iframe>`
            }}
          />
        </section>
        {/*
        <MyMapComponent
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBFNaN_q0RJq6oiK4oMMKTipbIuQLDBfHg&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
        <div
          dangerouslySetInnerHTML={{
            __html: `
            <iframe src="http://maps.google.com/maps?q=fjell+technology&z=10&output=embed" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
`
          }}
        />*/}
        <section className="is-large">
          <div className="container">
            <h1 className="title has-text-centered management-title">
              Management
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
      </Layout>
    );
  }
}

ContactPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

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
      }
    }
  }
`;
