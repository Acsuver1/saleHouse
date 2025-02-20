import React from "react";
import { useTranslation } from "react-i18next";
import "./Begin.css";

function CallToAction() {
  const { t } = useTranslation();

  return (
    <div className="begin-container">
      <div className="begin-card">
        <h2>{t("callToAction.title")}</h2>
        <p>{t("callToAction.description")}</p>
        <div className="button-group">
          <button className="try-button">{t("callToAction.tryButton")}</button>
          <button className="contact-button">{t("callToAction.contactButton")}</button>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
