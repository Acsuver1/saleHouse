import React from "react";
import { useTranslation } from "react-i18next";
import "./Support.css";
import supportImage from "../assets/illustration_support_1.svg";

function SupportSection() {
  const { t } = useTranslation();

  return (
    <div className="support-container">
      <div className="support-content">
        <div className="text-section">
          <h2>{t("supportSection.title")}</h2>
          <p>{t("supportSection.description")}</p>
          <button className="contact-button">{t("supportSection.contactButton")}</button>
        </div>
        <div className="image-section">
          <img src={supportImage} alt="24/7 Support" />
        </div>
      </div>
    </div>
  );
}

export default SupportSection;
