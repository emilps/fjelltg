import React from 'react';
import { Link } from 'gatsby';
import logo from '../img/ftg_logo_neg.svg';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ''
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active'
            })
          : this.setState({
              navBarActiveClass: ''
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="navbar is-link"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img
                src={logo}
                alt="Fjell Technology Group AS"
                style={{ width: '200px', maxHeight: '50px !important' }}
              />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end has-text-centered">
              <Link
                className="navbar-item is-light main-navbar-item"
                to="/project"
              >
                Reference Projects
              </Link>
              <div className="navbar-item has-dropdown is-hoverable">
                <Link
                  className="navbar-link is-arrowless main-navbar-item"
                  to="/productCategory"
                >
                  Products
                </Link>
                <div className="navbar-dropdown">
                  <Link className="navbar-item" to="/product">
                    Pressure Vessels
                  </Link>
                  <Link className="navbar-item" to="/product">
                    Heat Exchangers
                  </Link>
                  <Link className="navbar-item" to="/product">
                    Air Coolers
                  </Link>
                  <Link className="navbar-item" to="/product">
                    Steam Heated Screw Cookers
                  </Link>
                  <Link className="navbar-item" to="/product">
                    Mud & Gas Separators
                  </Link>
                </div>
              </div>
              <div className="navbar-item has-dropdown is-hoverable">
                <Link
                  className="navbar-link is-arrowless main-navbar-item"
                  to="/solutions"
                >
                  Solutions
                </Link>
                <div className="navbar-dropdown">
                  <Link className="navbar-item" to="/solutions">
                    Greentech and the environment
                  </Link>
                  <Link className="navbar-item" to="/solutions">
                    Protein recycling
                  </Link>
                  <Link className="navbar-item" to="/solutions">
                    Oil & Gas
                  </Link>
                  <Link className="navbar-item" to="/solutions">
                    Co2 Capture
                  </Link>
                </div>
              </div>
              <Link className="navbar-item main-navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item main-navbar-item" to="/contact/">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

Navbar.displayName = 'Navbar';
export default Navbar;
