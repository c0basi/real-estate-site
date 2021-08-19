import React, { Suspense } from "react";
import { withTranslation } from "react-i18next";
import ReactTooltip from "react-tooltip";
import "./Membership.css";

class Membership extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { t } = this.props;
    return (
      <div className="Membership">
        <div className="container-fluid">
          {/* <!--Title section--> */}
          <h2 className="text-center">{t("fields.membershipdetails")}</h2>
          {/* <!--My Membership Section--> */}
          <div className="membership-section">
            <div className="row membership-table-title">
              <div className="col-12 table-title">
                <p>{t("fields.membership")}</p>
              </div>
            </div>
            <div className="row membership-table">
              <div className="col-6">
                <div className="member-info">
                  <p>John Doe</p>
                  <p>{t("fields.streetName")}</p>
                  <p>+1 (XXX) XXX-XXXX</p>
                  <p>example@email.com</p>
                </div>
                <div className="row member-info">
                  <div className="col-6">
                    <a href="#" className="strected-link">
                      <p className="member-edit-info">
                        {t("link.edit.information")}
                      </p>
                    </a>
                  </div>
                  <div className="col-6">
                    <a href="#" className="strected-link">
                      <p className="member-edit-info">
                        {t("link.change.password")}
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="row">
                  <div className="col-4 member-info">
                    <p>{t("fields.membership.level")}</p>
                    <p className="membership-status">
                      {t("fields.membership.fee")}
                    </p>
                    <p className="membership-status">
                      {t("fields.last.payment")}
                    </p>
                    <p className="membership-status">
                      {t("fields.next.payment")}
                    </p>
                  </div>
                  <div className="col-4 member-info">
                    <p>{t("fields.memberID")}</p>
                    <p>$XXXX.XX</p>
                    <p>DD/MM/YYYY</p>
                    <p>DD/MM/YYYY</p>
                  </div>
                  <div className="col-4 member-info">
                    <p>{t("fields.start.date")}</p>
                    <p></p>
                    <p></p>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--Payment information--> */}
        <div className="payment-section">
          <div className="row payment-table-title">
            <div className="col-12 table-title">
              <p>{t("fields.updatepayment")}</p>
            </div>
          </div>
          <div className="row payment-table">
            <div className="col-6">
              <form>
                <div className="row payment-info">
                  <div className="col-6">
                    <label htmlFor="cardholder">
                      {t("fields.cardholder.name")}
                      <span className="form-star">*</span>
                    </label>
                    <input
                      data-tip
                      data-for="cardHolderName"
                      type="text"
                      className="form-control"
                      placeholder="John Doe"
                    />
                  </div>
                  <ReactTooltip id="cardHolderName" place="top" effect="solid">
                    {t("field.enter.card.holder")}
                  </ReactTooltip>
                  <div className="col-6">
                    <label htmlFor="inputEmail4">
                      {t("fields.creditcard.number")}
                      <span className="form-star">*</span>
                    </label>
                    <input
                      data-tip
                      data-for="cardNumber"
                      type="text"
                      className="form-control"
                      placeholder="XXXX-XXXX-XXXX-XXXX"
                    />
                  </div>
                  <ReactTooltip id="cardNumber" place="top" effect="solid">
                    {t("field.enter.credit.card.number")}
                  </ReactTooltip>
                </div>
                <div className="row payment-info">
                  <div className="col-6">
                    <label htmlFor="expires">
                      {t("fields.expires")}
                      <span className="form-star">*</span>
                    </label>
                    <div className="row">
                      <div className="col-5">
                        <input
                          data-tip
                          data-for="monthDate"
                          type="text"
                          className="form-control"
                          placeholder="MM"
                        />
                      </div>
                      <ReactTooltip id="monthDate" place="top" effect="solid">
                        {t("field.enter.month.expiry.date")}
                      </ReactTooltip>
                      <div className="col-7">
                        <input
                          data-tip
                          data-for="yearDate"
                          type="text"
                          className="form-control"
                          placeholder="YYYY"
                        />
                      </div>
                      <ReactTooltip id="yearDate" place="top" effect="solid">
                        {t("field.enter.year.expiry.date")}
                      </ReactTooltip>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="row">
                      <div className="col-6">
                        <label htmlFor="cvc">
                          CVC<span className="form-star">*</span>
                        </label>
                        <input
                          data-tip
                          data-for="cvcNumber"
                          type="text"
                          className="form-control"
                          placeholder="XXX"
                        />
                      </div>
                    </div>
                  </div>
                  <ReactTooltip id="cvcNumber" place="top" effect="solid">
                    {t("field.enter.credit.card.cvc")}
                  </ReactTooltip>
                </div>
                <div className="col-6">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="primaryCredit"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="primaryCredit"
                    >
                      {t("fields.primary")}
                    </label>
                  </div>
                </div>
                <div className="payment-btn">
                  <button
                    data-tip
                    data-for="saveChanges"
                    type="button"
                    className="btn btn-success"
                  >
                    {t("fields.save.changes")}
                  </button>
                </div>
                <ReactTooltip id="saveChanges" place="top" effect="solid">
                  {t("field.enter.save.change")}
                </ReactTooltip>
                <div className="row payment-info">
                  <div className="col-6">
                    <label htmlFor="branch-no">
                      {t("fields.branchno")}
                      <span className="form-star">*</span>
                    </label>
                    <input
                      data-tip
                      data-for="branchNumber"
                      type="text"
                      className="form-control"
                      placeholder="XXX"
                    />
                  </div>
                  <ReactTooltip id="branchNumber" place="top" effect="solid">
                    {t("field.enter.branch.number")}
                  </ReactTooltip>
                  <div className="col-6">
                    <label htmlFor="Institution-no">
                      {t("fields.institutionno")}
                      <span className="form-star">*</span>
                    </label>
                    <input
                      data-tip
                      data-for="institutionNumber"
                      type="text"
                      className="form-control"
                      placeholder="XXXX"
                    />
                  </div>
                  <ReactTooltip
                    id="institutionNumber"
                    place="top"
                    effect="solid"
                  >
                    {t("field.enter.institution.number")}
                  </ReactTooltip>
                </div>
                <div className="row payment-info">
                  <div className="col-6">
                    <label htmlFor="account-no">
                      {t("fields.accountno")}
                      <span className="form-star">*</span>
                    </label>
                    <input
                      data-tip
                      data-for="accountNumber"
                      type="text"
                      className="form-control"
                      placeholder="XXXXXXX"
                    />
                  </div>
                  <ReactTooltip id="accountNumber" place="top" effect="solid">
                    {t("field.enter.account.number")}
                  </ReactTooltip>
                  <div className="col-6">
                    <label htmlFor="account-no">
                      {t("fields.confirm.accountno")}
                      <span className="form-star">*</span>
                    </label>
                    <input
                      data-tip
                      data-for="confirmAccount"
                      type="text"
                      className="form-control"
                      placeholder="XXXXXXX"
                    />
                  </div>
                  <ReactTooltip id="confirmAccount" place="top" effect="solid">
                    {t("field.enter.confirm.account.number")}
                  </ReactTooltip>
                </div>
                <div className="row payment-info">
                  <div className="col-6">
                    <label htmlFor="branch-no">
                      {t("fields.holder.name")}
                      <span className="form-star">*</span>
                    </label>
                    <input
                      data-tip
                      data-for="accountHolder"
                      type="text"
                      className="form-control"
                      placeholder="John Doe"
                    />
                  </div>
                  <ReactTooltip id="accountHolder" place="top" effect="solid">
                    {t("field.enter.account.holder.name")}
                  </ReactTooltip>
                </div>
                <div className="col-6">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="primaryBank"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="primaryBank"
                    >
                      {t("fields.primary")}
                    </label>
                  </div>
                </div>
                <div className="payment-btn">
                  <button
                    data-tip
                    data-for="saveChanges"
                    type="button"
                    className="btn btn-success"
                  >
                    {t("fields.save.changes")}
                  </button>
                  <ReactTooltip id="saveChanges" place="top" effect="solid">
                    {t("field.enter.save.change")}
                  </ReactTooltip>
                </div>
              </form>
            </div>
            <div className="col-6 current-info">
              {/* <!--Current Information--> */}
              <p className="h4">{t("fields.currentInformation")}</p>
              <p className="h5">{t("fields.credit.card.info")}</p>
              <p>John Doe</p>
              <p>XXXX-XXXX-XXXX-XXXX</p>
              <p>MM-YYYY</p>
              <p className="h5">{t("fields.bank.account.info")}</p>
              <p>John Doe</p>
              <p>XXX-XXXX-XXXXXXX</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const MyComponent = withTranslation()(Membership);

export default function App() {
  return (
    <Suspense fallback="loading">
      <MyComponent />
    </Suspense>
  );
}
