import React, { Suspense } from "react";
import { GiTeamIdea } from "react-icons/gi";
import { IconContext } from "react-icons";
import { Link as NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { withTranslation } from "react-i18next";
import "./Navigation.css";
import i18n from "../i18n";

const changeLanguage = (ln) => {
  return () => {
    i18n.changeLanguage(ln);
    console.log(`Language changed to ${ln}`);
  };
};

// Inspiration from https://www.digitalocean.com/community/tutorials/how-to-implement-smooth-scrolling-in-react
class Navigation extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { t } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/">
            <span>
              <IconContext.Provider
                value={{ size: "1.25em", color: "#28a745" }}
              >
                <GiTeamIdea />
              </IconContext.Provider>
            </span>
            <span className="start">BURO</span>
            <span className="end">COLLAB</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="col-auto">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <ScrollLink
                    className="nav-link"
                    activeClass="active"
                    to="Membership-Plans"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    href="#Membership-Plans"
                  >
                    {t("link.plans")}
                  </ScrollLink>
                </li>
                <li className="nav-item active">
                  <ScrollLink
                    className="nav-link"
                    activeClass="active"
                    to="Book-A-Tour"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    href="#Book-A-Tour"
                  >
                    {t("link.book.a.tour")}
                  </ScrollLink>
                </li>
                <li className="nav-item active">
                  <ScrollLink
                    className="nav-link"
                    activeClass="active"
                    to="Contact-Us"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    href="#Contact-Us"
                  >
                    {t("contact.us.title")}
                  </ScrollLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/login">
                    <button className="btn btn-success navbar-btn">
                      {t("link.member.login")}
                    </button>
                  </NavLink>
                </li>
                <li className="nav-item dropdown active">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {t("change.language")}
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <button
                      type="button"
                      onClick={changeLanguage("en")}
                      className="dropdown-item"
                    >
                      {t("language.english")}
                    </button>
                    <div className="dropdown-divider"></div>
                    <button
                      type="button"
                      onClick={changeLanguage("fr")}
                      className="dropdown-item"
                    >
                      {t("language.french")}
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

const MyComponent = withTranslation()(Navigation);

export default function App() {
  return (
    <Suspense fallback="loading">
      <MyComponent />
    </Suspense>
  );
}
