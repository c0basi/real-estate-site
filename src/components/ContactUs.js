import React, { Suspense } from "react";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { IconContext } from "react-icons";
import { Link as NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { withTranslation } from "react-i18next";
import "./ContactUs.css";

class ContactUs extends React.Component {
  render() {
    const refreshPage = () => {
      window.location.reload(false);
    };
    // eslint-disable-next-line react/prop-types
    const { t } = this.props;
    return (
      <footer id="Contact-Us" className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <h5>{t("contact.us.quick.access")}</h5>
              <div className="row">
                <div className="col">
                  <ul className="list-unstyled">
                    <li>
                      <ScrollLink
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
                    <li>
                      <ScrollLink
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
                    <li>
                      <NavLink to="/login">{t("link.member.login")}</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <ul className="nav">
                <li className="nav-item">
                  <a href="#" className="nav-link pl-0">
                    <IconContext.Provider
                      value={{ size: "1.25em", color: "#28a745" }}
                    >
                      <AiOutlineFacebook />
                    </IconContext.Provider>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <IconContext.Provider
                      value={{ size: "1.25em", color: "#28a745" }}
                    >
                      <FiTwitter />
                    </IconContext.Provider>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <IconContext.Provider
                      value={{ size: "1.25em", color: "#28a745" }}
                    >
                      <AiOutlineInstagram />
                    </IconContext.Provider>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>{t("contact.us.locations")}</h5>
              <div className="row">
                <div className="col">
                  <strong>{t("location.ottawa.hq")}</strong>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        target="_blank"
                        href="https://goo.gl/maps/Z6wok3gg6z3E84Tx6"
                        rel="noreferrer"
                      >
                        {t("location.ottawa.hq.address")}
                      </a>
                    </li>
                    <li>
                      <a href="tel:+1123-456-7890">
                        {t("location.phone.number")}
                      </a>
                    </li>
                    <li>
                      <a href="mailto: email@burocollab.ca">
                        {t("location.email")}
                      </a>
                    </li>
                  </ul>
                  <strong>{t("location.toronto")}</strong>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        target="_blank"
                        href="https://goo.gl/maps/X4siRP2kN9jw6fte7"
                        rel="noreferrer"
                      >
                        {t("location.toronto.address")}
                      </a>
                    </li>
                    <li>
                      <a href="tel:+1123-456-7890">
                        {t("location.phone.number")}
                      </a>
                    </li>
                    <li>
                      <a href="mailto: email@burocollab.ca">
                        {t("location.email")}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h5>{t("contact.us.title")}</h5>
              <form>
                <fieldset className="form-group">
                  <div className="row">
                    <div className="col">
                      <input
                        className="form-control"
                        id="contactFirstName"
                        placeholder={t("fields.first.name")}
                      />
                    </div>
                    <div className="col">
                      <input
                        className="form-control"
                        id="contactLastName"
                        placeholder={t("fields.last.name")}
                      />
                    </div>
                  </div>
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="contactEmail"
                    placeholder={t("fields.email.address")}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <select className="form-control" id="contactReason">
                    <option selected>{t("fields.reason.for.contact")}</option>
                    <option>{t("reason.for.contact.option.1")}</option>
                    <option>{t("reason.for.contact.option.2")}</option>
                    <option>{t("reason.for.contact.option.3")}</option>
                  </select>
                </fieldset>
                <fieldset className="form-group">
                  <select className="form-control" id="contactLocation">
                    <option selected>{t("fields.select.a.location")}</option>
                    <option>{t("location.ottawa.hq")}</option>
                    <option>{t("location.toronto")}</option>
                  </select>
                </fieldset>
                <fieldset className="form-group">
                  <textarea
                    className="form-control"
                    id="contactMessage"
                    placeholder={t("fields.message")}
                  ></textarea>
                </fieldset>
                <fieldset className="form-group text-xs-right">
                  <button
                    type="button"
                    id="contactSubmit"
                    className="btn btn-secondary"
                    onClick={() => refreshPage()}
                  >
                    {t("button.send")}
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

const MyComponent = withTranslation()(ContactUs);

export default function App() {
  return (
    <Suspense fallback="loading">
      <MyComponent />
    </Suspense>
  );
}
