import React, { useState, useEffect, useRef } from "react";
import { FaCog, FaHome, FaKey, FaBuilding, FaUsers, FaHandshake, FaHouseDamage, FaHospital, FaSafari } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "./Banner.css";
import VidioFon from "../../public/vidieos/vecteezy_landlord-house-key-for-unlocking-a-house-is-plugged-into-the_166282081111.mp4";
import Logo from "../assets/SaleHouse Logo o`zi.png"; // Logoni to‘g‘ri yo‘lda saqlash kerak
import { FaHockeyPuck, FaHollyBerry } from "react-icons/fa6";

const HeroSection = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const logoContainer = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero-container">
      <video
        lazy
        loading="lazy"
        autoPlay
        loop
        muted
        playsInline
        className="video-bg"
        preload="auto"
      >
        <source src={VidioFon} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-content">
        <h1 className="hero-title">
          {t("salehouse_title")}{" "}
          <span className="highlight">{t("salehouse_highlight")}</span>{" "}
          {t("salehouse_description")}
        </h1>

        <div className="info-box">
          <FaCog className="icon" />
          <span>
            {t("developer_experience")}{" "}
            <span className="highlight">{t("developer_highlight")}</span>
          </span>
        </div>

        <button className="banner_button">{t("try_now")}</button>
      </div>

      <div ref={logoContainer} className={`hero-logo ${scrolled ? "scrolled" : ""}`}>
  <div className="logo-box"><FaSafari className="icon-style" /></div>
  <div className="logo-box"><FaKey className="icon-style" /></div>
  <div className="logo-box"><FaBuilding className="icon-style" /></div>

  
  <div className="logo-box main-logo">
    <img src={Logo} alt={t("rent_logo_alt")} className="logo-banner" />
  </div>

  <div className="logo-box"><FaUsers className="icon-style" /></div>
  <div className="logo-box"><FaHandshake className="icon-style" /></div>
</div>


    </section>
  );
};

export default HeroSection;
