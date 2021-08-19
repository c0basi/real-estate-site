import React, { Suspense, Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { withTranslation } from "react-i18next";
import ReactTooltip from "react-tooltip";
class Login extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { t } = this.props;
    return (
      <div id="Login" className="container">
        <form>
          <h2 className="text-center">{t("sign.in.title")}</h2>

          <div className="form-group">
            <label>{t("fields.emailimp.address")}</label>
            <input
              data-tip
              data-for="enterEmail"
              type="email"
              className="form-control"
              placeholder={t("enter.email")}
            />
          </div>
          <ReactTooltip id="enterEmail" place="top" effect="solid">
            {t("field.enter.email")}
          </ReactTooltip>
          <div className="form-group">
            <label>{t("fields.password")}</label>
            <input
              data-tip
              data-for="enterPassword"
              type="password"
              className="form-control"
              placeholder={t("enter.password")}
            />
          </div>
          <ReactTooltip id="enterPassword" place="top" effect="solid">
            {t("field.enter.password")}
          </ReactTooltip>
          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                {t("fields.remember.me")}
              </label>
            </div>
          </div>
          <Link to="/membership">
            <button
              data-tip
              data-for="signIn"
              type="submit"
              className="btn btn-success btn-block"
            >
              {t("button.submit")}
            </button>
            <ReactTooltip id="signIn" place="top" effect="solid">
              {t("field.enter.submit")}
            </ReactTooltip>
          </Link>
          <p className="text-center">
            {t("forgot.your")}{" "}
            <a id="colorize" href="#">
              {t("password.prompt")}
              {"?"}
            </a>
          </p>
        </form>
      </div>
    );
  }
}

const MyComponent = withTranslation()(Login);

export default function App() {
  return (
    <Suspense fallback="loading">
      <MyComponent />
    </Suspense>
  );
}
