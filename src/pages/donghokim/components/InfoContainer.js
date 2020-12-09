import React, { Component } from "react";
import { Link } from "react-router-dom";

import mockNav from "../data/infoData/mockNav";
import mockCountries from "../data/infoData/mockCountries";

class InfoContainer extends Component {
  state = {
    nav: [...mockNav],
    countries: [...mockCountries],
  };
  render() {
    return (
      <div className="info_container">
        <nav className="info_nav">
          <ul>
            {this.state.nav.map(({ link, navName }, idx) => (
              <li key={idx}>
                <Link to={link}>{navName}</Link>
              </li>
            ))}
            <li>
              <span className="language_option">
                언어
                <select className="select_language">
                  {this.state.countries.map(
                    ({ countryValue, countryName }, idx) => (
                      <option key={idx} value={countryValue}>
                        {countryName}
                      </option>
                    )
                  )}
                </select>
              </span>
            </li>
          </ul>
        </nav>
        <span className="copyright">© 2020 Instagram from Facebook</span>
      </div>
    );
  }
}

export default InfoContainer;
