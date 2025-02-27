import React from "react";
import { useTranslation } from "react-i18next";
import "./System.css";
import laptopImage from "../assets/picture_mockup_form.png";

const LandingPage = () => {
  const { t } = useTranslation();

  return (
    <div className="landing-page">
      <div className="landing-container">
        <div className="image-section">
          <img src={laptopImage} alt="Laptop" className="laptop-image" />
        </div>
        <div className="text-section">
          <h2 className="title">{t("discover_system")}</h2>
          <p className="description">{t("leave_request")}</p>
          <button
  className="cta-button"
  onClick={() => window.location.href = "https://t.me/asadbek2278"}
>
  {t("submit_request")}
</button>

        </div>
      </div>
    </div>
  );
};

export default LandingPage;
