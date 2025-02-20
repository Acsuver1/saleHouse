import React from "react";
import { FaCog } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "./Banner.css";
import  VidioFon from "../../public/vidieos/vecteezy_landlord-house-key-for-unlocking-a-house-is-plugged-into-the_166282081111.mp4"
import  Logo from "../assets/SaleHouse Logo.png"

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="hero-container">
<video loading="lazy" autoPlay loop muted playsInline className="video-bg">
  <source src={VidioFon} type="video/mp4" />
  Your browser does not support the video tag.
</video>



      <div className="hero-content">
        <h1 className="hero-title">
          {t("salehouse_title")} <span className="highlight">{t("salehouse_highlight")}</span> {t("salehouse_description")}
        </h1>

        <div className="info-box">
          <FaCog className="icon" />
          <span>
            {t("developer_experience")} <span className="highlight">{t("developer_highlight")}</span>
          </span>
        </div>

        <button className="banner_button">{t("try_now")}</button>
      </div>

      <div className="hero-logo">
        <div className="logo-box">
          <img src={Logo} alt={t("rent_logo_alt")} className="logo-banner" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
