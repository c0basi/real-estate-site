import React, { Suspense } from "react";
import { withTranslation } from "react-i18next";
import "react-datepicker/dist/react-datepicker.css";
import ReactTooltip from "react-tooltip";
import "./BookTour.css";

class BookTour extends React.Component {
  render() {
    const refreshPage = () => {
      window.location.reload(false);
    };
    // eslint-disable-next-line react/prop-types
    const { t } = this.props;
    return (
      <div id="Book-A-Tour" className="container-sm">
        <form>
          <h2 className="text-center">{t("link.book.a.tour")}</h2>
          <h4>{t("contact.message")}</h4>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="firstName">{t("fields.firstimp.name")}</label>
              <input
                data-tip
                data-for="firstName"
                type="firstName"
                className="form-control"
                id="firstName"
                placeholder={t("fields.first.name")}
              />
            </div>
            <ReactTooltip id="firstName" place="top" effect="solid">
              {t("field.enter.name")}
            </ReactTooltip>
            <div className="form-group col-md-6">
              <label htmlFor="Last Name">{t("fields.lastimp.name")}</label>
              <input
                data-tip
                data-for="LastName"
                type="LastName"
                className="form-control"
                id="LastName"
                placeholder={t("fields.last.name")}
              />
            </div>
            <ReactTooltip id="LastName" place="top" effect="solid">
              {t("field.enter.lastname")}
            </ReactTooltip>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="emailAddress">
                {t("fields.emailimp.address")}
              </label>
              <input
                data-tip
                data-for="email"
                type="email"
                className="form-control"
                id="emailAddress"
                placeholder="example@email.com"
              />
            </div>
            <ReactTooltip id="email" place="top" effect="solid">
              {t("field.enter.email")}
            </ReactTooltip>
            <div className="form-group col-md-6">
              <label htmlFor="phoneNumber">{t("fields.phoneimp.number")}</label>
              <input
                data-tip
                data-for="tel"
                type="tel"
                className="form-control"
                id="phoneNumber"
                placeholder="+1 (XXX) XXX-XXXX"
              />
            </div>
            <ReactTooltip id="tel" place="top" effect="solid">
              {t("field.enter.phone")}
            </ReactTooltip>
          </div>
          <h4>{t("fields.tourdetails")}</h4>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="Location">{t("fields.location")}</label>
              <select
                id="inputState"
                className="form-control"
                data-tip
                data-for="location"
              >
                <option selected>{t("location.ottawa.hq")}</option>
                <option>{t("location.toronto")}</option>
              </select>
            </div>
            <ReactTooltip id="location" place="top" effect="solid">
              {t("field.enter.tourlocation")}
            </ReactTooltip>
            <div className="form-group col-md-6">
              <label htmlFor="number">{t("fields.group.size")}</label>
              <select
                id="number"
                className="form-control"
                data-tip
                data-for="groupsize"
              >
                <option selected>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <ReactTooltip id="groupsize" place="top" effect="solid">
              {t("field.enter.toursize")}
            </ReactTooltip>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="date">Date*</label>
              {/* <!--Date picker modified from https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date--> */}
              <input
                data-tip
                data-for="date"
                type="date"
                id="start"
                name="trip-start"
                min="2021-04-07"
                max="2022-12-31"
                className="form-control"
              ></input>
            </div>
            <ReactTooltip id="date" place="top" effect="solid">
              {t("field.enter.tourdate")}
            </ReactTooltip>
            <div className="form-group col-md-6">
              <label htmlFor="Location">{t("fields.select.time")}</label>
              <select
                id="inputState"
                className="form-control"
                data-tip
                data-for="time"
              >
                <option selected>{t("fields.9to10")}</option>
                <option>{t("fields.10to11")}</option>
                <option>{t("fields.11to12")}</option>
                <option>{t("fields.12to1")}</option>
              </select>
            </div>
            <ReactTooltip id="time" place="top" effect="solid">
              {t("field.enter.tourtime")}
            </ReactTooltip>
          </div>
          <h4>{t("fields.teamneeds")}</h4>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="number">{t("fields.team.size")}</label>
              <input
                data-tip
                data-for="teamsize"
                type="text"
                className="form-control"
                id="number"
                placeholder={t("fields.team.number")}
              />
              <div>
                <ReactTooltip id="teamsize" place="top" effect="solid">
                  {t("field.enter.teamsize")}
                </ReactTooltip>
                <h1></h1>
              </div>
              <label htmlFor="workField">{t("fields.workfield")}</label>
              <select
                id="workfield"
                className="form-control"
                data-tip
                data-for="workfield"
              >
                <option selected>{t("fields.engineering")}</option>
                <option>{t("fields.business")}</option>
                <option>{t("fields.health")}</option>
                <option>{t("fields.trades")}</option>
                <option>{t("fields.other")}</option>
              </select>

              <div>
                <ReactTooltip id="workfield" place="top" effect="solid">
                  {t("field.enter.teamfield")}
                </ReactTooltip>
                <h1></h1>
              </div>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="input">{t("fields.team.additionalinfo")}</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="4.5"
                placeholder={t("fields.team.teamprompt")}
              ></textarea>
            </div>
          </div>
          <button
            data-tip
            data-for="reservetour"
            className="btn btn-success navbar-btn"
            onClick={() => refreshPage()}
          >
            {t("fields.book.now")}
          </button>
          <ReactTooltip id="reservetour" place="top" effect="solid">
            {t("field.enter.reservetour")}
          </ReactTooltip>
        </form>
      </div>
    );
  }
}

const MyComponent = withTranslation()(BookTour);

export default function App() {
  return (
    <Suspense fallback="loading">
      <MyComponent />
    </Suspense>
  );
}
