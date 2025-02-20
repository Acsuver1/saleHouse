import React from "react";
import { useTranslation } from "react-i18next";
import "./Dynamic.css";
import Dynamic from "../assets/illustration_left_increase_your_settings.svg";

const Banner = () => {
  const { t } = useTranslation();

  return (
    <div className="banner-container">
      <div className="banner-content">
        <div className="banner-image">
          <img src={Dynamic} alt="Pricing Illustration" />
        </div>
        <div className="banner-text">
          <h2>{t("banner_title")}</h2>
          <p dangerouslySetInnerHTML={{ __html: t("banner_description") }}></p>
          <p>{t("banner_note")}</p>
          <button className="banner-button">{t("banner_button")}</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
