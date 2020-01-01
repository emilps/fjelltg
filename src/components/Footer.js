import React from 'react';
import { Link } from 'gatsby';

import logo from '../img/ftg_logo_neg.svg';

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-text-white-ter">
        <div className="content has-text-white-ter">
          <div className="column has-text-centered">
            <img
              src={logo}
              alt="Fjell Technology Group AS"
              style={{ width: '14em', height: '10em' }}
            />
          </div>
          <div className="container has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <p className="has-text-weight-bold has-text-left">Explore</p>
                  <ul className="menu-list remove-margin">
                    <li>
                      <Link to="/" className="navbar-item remove-padding">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="navbar-item remove-padding"
                        to="/project"
                      >
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="navbar-item remove-padding"
                        to="/product"
                      >
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item remove-padding" to="/blog">
                        WasteWater
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="navbar-item remove-padding"
                        to="/contact/examples"
                      >
                        Protein Recycling
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item remove-padding" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="navbar-item remove-padding"
                        to="/contact/"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <p className="has-text-weight-bold">Visit</p>
                  <p className="has-text-weight-light">
                    Main office: Idrettsvegen 103 N5353 Straume
                  </p>
                  <p className="">
                    GreenTech office: Kong Christian Frederiks Plass 3 N-5006
                    Bergen
                  </p>
                </section>
              </div>
              <div className="column is-4">
                <section className="menu">
                  <p className="has-text-weight-bold">Follow</p>
                  <ul className="menu-list remove-margin">
                    <li>
                      <a
                        title="linkedin"
                        href="https://www.linkedin.com/company/fjell-technology-group-as/"
                        className="remove-padding"
                      >
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a
                        title="facebook"
                        href="https://www.facebook.com/FjellGreenTech/"
                        className="remove-padding"
                      >
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a
                        title="instagram"
                        href="https://www.instagram.com/fjelltechnology/"
                        className="remove-padding"
                      >
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        title="twitter"
                        href="https://twitter.com"
                        className="remove-padding"
                      >
                        Twitter
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

Footer.displayName = 'Footer';
export default Footer;
