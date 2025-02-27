import React from "react";
import { useTranslation } from "react-i18next";
import "./Building.css";
import dCard from "../assets/3D_catalog_picture.jpg";

const TitleSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="title-section">
        <h1 className="title">{t("title_section")}</h1>
        <p className="description">{t("description_section")}</p>
        <div className="image">
          <img src={dCard} alt="3D katalog" />
        </div>
      </section>

      <section className="info-section">
        <p className="info-text">{t("info_section")}</p>
        <div className="button-group">
        <button
  className="apply-button"
  onClick={() => window.location.href = "https://t.me/asadbek2278"}
>
  {t("apply_button")}
</button>

          <a href="#" className="consultation-link">{t("consultation_link")}</a>
        </div>
      </section>
    </>
  );
};

export default TitleSection;
