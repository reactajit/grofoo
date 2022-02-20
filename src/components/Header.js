import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <div>
        <div className="wrapper Grofoo-home">
          <nav
            style={{ position: "fixed" }}
            className="navbar navbar-default navbar-fixed-top"
          >
            <div style={{ display: "inline" }} className="container">
              <div className="navbar-header page-scroll">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1"
                  aria-expanded="false"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <nav>
                  <Link className="navbar-brand" to="/">
                    <img
                      src="assets/images/header_logo.png"
                      className="logo_c"
                    />{" "}
                  </Link>
                </nav>
             
              </div>
              <div
                className="collapse navbar-collapse navbar-right"
                id="bs-example-navbar-collapse-1"
              >
                <ul style={{ display: "inline" }} className="nav navbar-nav ">
                  <li className="dropdown  notify">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      <span className="notify-row">
                        <span className="bell ">
                          <i className="ion-ios-location-outline"></i>Location
                          <i className="ion-chevron-down adown"></i>
                        </span>
                      </span>
                    </a>
                    <ul className="dropdown-menu extended tasks-bar">
                      <div className="notify-arrow notify-arrow-green"></div>
                      <div className="search-box">
                        <h3 className="header">
                          Where do you want the delivery?
                        </h3>
                        <div className="deliver-section">
                          Deliver in :{" "}
                          <span className="clr_green">Gurugram</span>
                        </div>
                        <div className="location-selection">
                          <p>——— Or Select your city ———</p>
                          <h1>Top Searched Cities</h1>
                          <span className="city_tag">New Delhi</span>
                          <span className="city_tag">Bengaluru</span>
                          <span className="city_tag">Hyderabad</span>
                          <div className="location-search-box">
                            <i className="location-seach-icon ion-ios-search"></i>
                            <input
                              type="text"
                              className="search-input"
                              placeholder="Address, city, zip code or state"
                            />
                            <button className="auto-detect-btn">
                              <i className="ion-android-locate"></i>Detect
                            </button>
                          </div>
                        </div>
                      </div>
                    </ul>
                  </li>
                  <li className="dropdown  notify">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="modal"
                      data-target="#myModal2"
                    >
                      <span className="notify-row">
                        <span className="bell ">
                          <i className="ion-ios-cart-outline"></i> My Cart
                          <span className="label label-info badge">3</span>
                        </span>
                      </span>
                    </a>
                  </li>
                   <li>
                   <nav>
                    <Link className="btn btn-nav-line page-scroll" to="/login">
                      {" "}
                      <i className="ion-ios-contact-outline"></i> Sign In{" "}
                    </Link>
                    </nav>
                       </li>
                
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
