import React from "react";
import { FaCube, FaBullhorn, FaTag, FaPenNib, FaAsterisk, FaChartPie, FaCubes } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "./ServicePage.css";
import Layout from "../assets/2D_plans_picture.jpg";

const ServicesPage = () => {
  const { t } = useTranslation();

  const services = [
    { id: 1, icon: <FaCubes />, title: t("service_2d_3d"), active: true },
    { id: 2, icon: <FaCube />, title: t("service_3d_visualization") },
    { id: 3, icon: <FaBullhorn />, title: t("service_advertising") },
    { id: 4, icon: <FaTag />, title: t("service_branding") },
    { id: 5, icon: <FaPenNib />, title: t("service_corporate_identity") },
    { id: 6, icon: <FaAsterisk />, title: t("service_identity") },
    { id: 7, icon: <FaChartPie />, title: t("service_logo") },
    { id: 8, icon: <FaCube />, title: t("service_marketing") },
    { id: 9, icon: <FaCubes />, title: t("service_renders") },
  ];
  return (
    <>
      <div className="background-title">
        <h2>{t("packaging_services")}</h2>
      </div>
      <div className="services-container">
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className={`service-card ${service.active ? "active" : ""}`}>
              <div className="icon">{service.icon}</div>
              <p>{service.title}</p>
            </div>
          ))}
        </div>
        <div className="layout">
          <img src={Layout} alt="Service layout" />
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
