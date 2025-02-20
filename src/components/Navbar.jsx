import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FiLogIn, FiPhone, FiMail } from "react-icons/fi"; 
import { FaPlayCircle } from "react-icons/fa"; 
import "./Navbar.css";
import saleLogo from "../assets/SaleHouse Logo3.png";
import { languages } from "../utils/index";
import "../i18n";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [scrolling, setScrolling] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === "uz" ? "ru" : "uz";
    i18n.changeLanguage(newLang);
  };

  const currentLang = languages.find((lang) => lang.value === i18n.language);

  return (
    <div className={`container ${scrolling ? "scrolled" : ""}`}>
      <nav className="navbar">
        <div className="logo">
          <img src={saleLogo} alt="Sale Logo" />
        </div>

        <div className="nav-items">
          {!isMobile ? (
            <span className="phone-number">+998 90 717 87 15</span>
          ) : (
            <div className="contact-icons">
              <a href="tel:+998907178715" className="contact-icon"><FiPhone size={20} /></a>
              <a href="mailto:info@example.com" className="contact-icon"><FiMail size={20} /></a>
            </div>
          )}

          <button className="demo-btn">
            {isMobile ? <FaPlayCircle size={20} /> : t("demodastur")}
          </button>
          <button className="login-btn">
            {isMobile ? <FiLogIn size={20} /> : t("tizimga_kirish")}
          </button>

          <button className="lang-toggle-btn" onClick={toggleLanguage}>
            <img src={currentLang.flag} alt={currentLang.label} className="lang-flag" />
            {!isMobile && t(currentLang.label)}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
