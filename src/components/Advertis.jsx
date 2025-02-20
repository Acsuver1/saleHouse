import React from "react";
import { useTranslation } from "react-i18next";
import "./Advertis.css";
import laptopImage from "../assets/picture_MacBook_mockup.png";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 dangerouslySetInnerHTML={{ __html: t("cottage_hero_title") }}></h1>
        <p>{t("cottage_hero_description")}</p>
        <div className="hero-benefits">
          <ul className="benefit-list">
            <li className="benefit-item">{t("cottage_feature_site")}</li>
            <li className="benefit-item">{t("cottage_feature_catalog")}</li>
            <li className="benefit-item">{t("cottage_feature_crm")}</li>
            <li className="benefit-item">{t("cottage_feature_auto_manage")}</li>
            <li className="benefit-item">{t("cottage_feature_ads")}</li>
          </ul>
        </div>
      </div>
      <div className="hero-image">
        <img src={laptopImage} alt="Website Preview" />
      </div>
    </section>
  );
};

export default HeroSection;
