import React from "react";
import { useTranslation } from "react-i18next";
import "./It.css";
import supportImage from "../assets/illustration_support_IT.svg";

function SupportInfo() {
  const { t } = useTranslation();

  return (
    <div className="support-info-container">
      <div className="support-info-content">
        <div className="image-section">
          <img src={supportImage} alt="IT Support" />
        </div>
        <div className="text-section">
          <h2>{t("supportInfo.title")}</h2>
          <p>{t("supportInfo.description")}</p>
          <ul>
            <li>{t("supportInfo.list.item1")}</li>
            <li>{t("supportInfo.list.item2")}</li>
            <li>{t("supportInfo.list.item3")}</li>
          </ul>
          <div className="button-group">
            <button className="contact-button">{t("supportInfo.contactButton")}</button>
            <button className="try-button">{t("supportInfo.tryButton")}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportInfo;
