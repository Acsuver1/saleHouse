import React from "react";
import { useTranslation } from "react-i18next";
import "./Complex.css"; 
import ComplexD from "../assets/catalog.mp4";

export default function InteractiveCatalog() {
  const { t } = useTranslation();

  return (
    <div className="catalog-container">
      <div className="image-container">
        <video src={ComplexD} className="catalog-image" controls />
      </div>

      <div className="text-container">
        <h2 className="title">{t("interactive_catalog_title")}</h2>
        <p className="description">{t("interactive_catalog_description")}</p>
        <h3 className="subtitle">{t("interactive_catalog_subtitle")}</h3>
        <ul className="feature-list">
          <li>{t("feature_3d_facade")}</li>
          <li>{t("feature_request_booking")}</li>
          <li>{t("feature_available_apartments")}</li>
          <li>{t("feature_free_site_upgrade")}</li>
          <li>{t("feature_auto_update")}</li>
          <li>{t("feature_actual_layouts")}</li>
          <li>{t("feature_crm_sync")}</li>
          <li>{t("feature_complex_map")}</li>
          <li>{t("feature_no_tech_needed")}</li>
        </ul>
      </div>
    </div>
  );
}
