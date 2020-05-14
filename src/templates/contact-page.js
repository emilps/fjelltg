import React from 'react';
import { navigate } from 'gatsby-link';
import Layout from '../components/Layout';
import Employees from '../components/Employees';
import PageJumbotron from '../components/PageJumbotron';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

import { MarkerWithLabel } from 'react-google-maps/lib/components/addons/MarkerWithLabel';

//import { GoogleMap, LoadScript } from '@react-google-maps/api';
/*
const MapWithAMarker = () => {
  return (
    <LoadScript
      id="script-loader"
      googleMapsApiKey="AIzaSyBFNaN_q0RJq6oiK4oMMKTipbIuQLDBfHg"
    >
      <GoogleMap
        id="example-map"
        center={{
          lat: -3.745,
          lng: -38.523
        }}
        zoom={2}
      ></GoogleMap>
    </LoadScript>
  );
};
*/

const MapWithAMarker = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={11}
      defaultCenter={new google.maps.LatLng(60.372721, 5.310865)}
      defaultOptions={{
        mapTypeControl: true,
        zoomControl: true,
        fullscreenControl: true,
      }}
      disableDefaultUI={false}
    >
      <MarkerWithLabel
        position={{ lat: 60.3651409, lng: 5.1995426 }}
        labelAnchor={new google.maps.Point(-15, 40)}
        labelStyle={{
          fontSize: '15px',
          color: '#BF2113',
          textShadow:
            ' -1px -1px 0 #fff,  1px -1px 0 #fff, -1px 1px 0 #fff,1px 1px 0 #fff',
        }}
      >
        <div
          style={{
            maxWidth: '120px',
          }}
        >
          Idrettsvegen 103, 5353 Straume
        </div>
      </MarkerWithLabel>
      <MarkerWithLabel
        position={{ lat: 60.3820645, lng: 5.3252166 }}
        labelAnchor={new google.maps.Point(-15, 40)}
        labelStyle={{
          fontSize: '15px',
          color: '#BF2113',
          textShadow:
            ' -1px -1px 0 #fff,  1px -1px 0 #fff, -1px 1px 0 #fff,1px 1px 0 #fff',
        }}
      >
        <div
          style={{
            maxWidth: '170px',
          }}
        >
          Thormøhlens Gate 49A, N-5006 Bergen, Norway
        </div>
      </MarkerWithLabel>
    </GoogleMap>
  ))
);

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export class ContactPageTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error));
  };

  render() {
    const {
      headertitle,
      headerimage,
      headerbyline,
      formtitle,
      employeetitle,
      mapiframe,
      helmet,
    } = this.props;

    return (
      <div>
        {helmet || ''}
        <PageJumbotron
          title={headertitle}
          image={headerimage}
          description={headerbyline}
        />

        <section className="section" style={{ padding: '3rem 208px' }}>
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
        <div className="map-container-new">
          <MapWithAMarker
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBFNaN_q0RJq6oiK4oMMKTipbIuQLDBfHg&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
        {/* 
        <section className="map-container">
          <div
            dangerouslySetInnerHTML={{
              __html: `
                <iframe src="https://maps.google.com/maps?q=${mapiframe}&z=10&output=embed" 
                width="100%" 
                height="450" 
                frameborder="0" 
                style="border:0" 
                allowfullscreen></iframe>`
            }}
          />
        </section>
        */}
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
  mapiframe: PropTypes.string,
  helmet: PropTypes.object,
};

const ContactPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ContactPageTemplate
        helmet={
          <Helmet titleTemplate="%s | Contact Us">
            <title>{`${frontmatter.headertitle}`}</title>
            <meta name="description" content={`${frontmatter.headerbyline}`} />
          </Helmet>
        }
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
      frontmatter: PropTypes.object,
    }),
  }),
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
