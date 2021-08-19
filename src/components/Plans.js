import React, { Suspense } from "react";
import "./Plans.css";
import { withTranslation } from "react-i18next";

// Inspiration from https://www.bootdey.com/snippets/view/pricing-table-with-images
class Plans extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { t } = this.props;
    return (
      <div id="Membership-Plans" className="container">
        <div className="row justify-content-center pb-5 mb-3">
          <div className="col-md-7 heading-section text-center ftco-animate fadeInUp ftco-animated">
            <h2>{t("membership.plans.title")}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 ftco-animate fadeInUp ftco-animated">
            <div className="block-7">
              <div
                className="img"
                style={{
                  // eslint-disable-next-line no-undef
                  backgroundImage: `url('${process.env.PUBLIC_URL}/basic_logo.png')`,
                }}
              ></div>
              <div className="text-center p-4">
                <span className="excerpt d-block">{t("Basic")}</span>
                <span className="price">
                  <sup>$</sup> <span className="number">200</span>{" "}
                  <sub>/{t("month")}</sub>
                </span>
                <ul className="pricing-text mb-5">
                  <p>{t("description.basic")}</p>
                </ul>
                <a href="#" className="btn btn-success d-block px-2 py-3">
                  {t("contact.us.title")}
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 ftco-animate fadeInUp ftco-animated">
            <div className="block-7">
              <div
                className="img"
                style={{
                  // eslint-disable-next-line no-undef
                  backgroundImage: `url('${process.env.PUBLIC_URL}/private_logo.png')`,
                }}
              ></div>
              <div className="text-center p-4">
                <span className="excerpt d-block">{t("Private")}</span>
                <span className="price">
                  <sup>$</sup> <span className="number">450</span>{" "}
                  <sub>/{t("month")}</sub>
                </span>
                <ul className="pricing-text mb-5">
                  <p>{t("description.private")} </p>
                </ul>
                <a href="#" className="btn btn-success d-block px-2 py-3">
                  {t("contact.us.title")}
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 ftco-animate fadeInUp ftco-animated">
            <div className="block-7">
              <div
                className="img"
                style={{
                  // eslint-disable-next-line no-undef
                  backgroundImage: `url('${process.env.PUBLIC_URL}/corporate_logo.png')`,
                }}
              ></div>
              <div className="text-center p-4">
                <span className="excerpt d-block">{t("Corporate")}</span>
                <span className="price">
                  <sup>$</sup> <span className="number">800+</span>{" "}
                  <sub>/{t("month")}</sub>
                </span>
                <ul className="pricing-text mb-5">
                  <p>{t("description.corporate")} </p>
                </ul>
                <a href="#" className="btn btn-success d-block px-2 py-3">
                  {t("contact.us.title")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const MyComponent = withTranslation()(Plans);

export default function App() {
  return (
    <Suspense fallback="loading">
      <MyComponent />
    </Suspense>
  );
}
