import React, { Suspense } from "react";
import { withTranslation } from "react-i18next";
import "./Header.css";
class Header extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { t } = this.props;
    return (
      <header id="header" className="header">
        <div className="overlay"></div>
        <div className="container">
          <div className="row justify-content-center">
            <h1 className="description">{t("header.message")}</h1>
          </div>
        </div>
      </header>
    );
  }
}

const MyComponent = withTranslation()(Header);

export default function App() {
  return (
    <Suspense fallback="loading">
      <MyComponent />
    </Suspense>
  );
}
