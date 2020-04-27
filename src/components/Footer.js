import React from 'react';
import { Link } from 'gatsby';

import logo from '../img/ftg_logo_neg.svg';

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-text-white-ter">
        <div className="content has-text-white-ter">
          <div className="container has-text-white-ter">
            <div className="columns blog-columns">
              <div className="column is-4 has-text-centered-mobile">
                <img
                  src={logo}
                  alt="Fjell Technology Group AS"
                  style={{ width: '14em', marginTop: '5px' }}
                />
                <p style={{ marginTop: '20px' }}>
                  Your partner <br />
                  <span className="has-text-weight-bold">
                    for mass and heat transfer technology
                  </span>
                </p>
              </div>
              <div className="column is-3 has-text-centered-mobile">
                <section className="menu">
                  <p className="has-text-weight-bold has-text-centered-mobile">
                    Explore
                  </p>
                  <ul className="menu-list remove-margin has-text-centered-mobile">
                    <li>
                      <Link
                        to="/"
                        className="navbar-item has-text-weight-light remove-padding ie-hover"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="navbar-item has-text-weight-light remove-padding ie-hover"
                        to="/about"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="navbar-item has-text-weight-light remove-padding ie-hover"
                        to="/project"
                      >
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="navbar-item has-text-weight-light remove-padding ie-hover"
                        to="/product"
                      >
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="navbar-item has-text-weight-light remove-padding ie-hover"
                        to="/solutions"
                      >
                        Solutions
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="navbar-item has-text-weight-light remove-padding ie-hover"
                        to="/contact/"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-3 has-text-centered-mobile">
                <section>
                  <p className="has-text-weight-bold">Visit</p>
                  <p className="has-text-weight-light">
                    Main office: <br /> Idrettsvegen 103 <br />
                    N5353 Straume
                  </p>
                  <p className="has-text-weight-light">
                    GreenTech office:
                    <br /> Thormøhlens Gate 49a <br />
                    N-5006 Bergen
                  </p>
                </section>
              </div>
              <div className="column is-3 has-text-centered-mobile">
                <section className="menu">
                  <p className="has-text-weight-bold">Follow</p>
                  <ul className="menu-list remove-margin has-text-centered-mobile">
                    <li>
                      <a
                        title="linkedin"
                        href="https://www.linkedin.com/company/fjell-technology-group-as/"
                        className="remove-padding navbar-item has-text-weight-light ie-hover"
                      >
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a
                        title="facebook"
                        href="https://www.facebook.com/FjellGreenTech/"
                        className="remove-padding navbar-item has-text-weight-light ie-hover"
                      >
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a
                        title="instagram"
                        href="https://www.instagram.com/fjelltechnology/"
                        className="remove-padding navbar-item has-text-weight-light ie-hover"
                      >
                        Instagram
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
            <div
              className="has-text-centered-mobile"
              style={{ marginTop: '7rem' }}
            >
              <p>© 2020 Fjell Technology Group. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

Footer.displayName = 'Footer';
export default Footer;
