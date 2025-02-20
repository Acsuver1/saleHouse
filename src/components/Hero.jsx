import React from "react";
import { useTranslation } from "react-i18next";
import "./Hero.css";
import laptopImage from "../assets/picture_MacBook_mockup.png";
import { FaCube, FaTh } from "react-icons/fa";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 dangerouslySetInnerHTML={{ __html: t("hero_title") }} />
        <p>{t("hero_description")}</p>
        <div className="hero-benefits">
          <div className="benefit">
            <FaCube className="benefit-icon" /> 
            <p>{t("benefit_1")}</p>
          </div>
          <div className="benefit">
            <FaTh className="benefit-icon" /> 
            <p>{t("benefit_2")}</p>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src={laptopImage} alt="Website Preview" />
      </div>
    </section>
  );
};

export default HeroSection;
