import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Section.css";

const M2LabSection = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("packaging");
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });
  const tabRefs = useRef([]);

  const tabs = [
    { id: "packaging", title: t("tab_packaging") },
    { id: "express", title: t("tab_express") },
    { id: "leads", title: t("tab_leads") },
  ];

  useEffect(() => {
    const activeIndex = tabs.findIndex((tab) => tab.id === activeTab);
    if (tabRefs.current[activeIndex]) {
      setIndicatorStyle({
        width: tabRefs.current[activeIndex].offsetWidth,
        left: tabRefs.current[activeIndex].offsetLeft,
      });
    }
  }, [activeTab]);

  return (
    <section className="m2lab-section">
      <h2 className="title">{t("salehouse_title1")}</h2>
      <p className="description">
        {t("salehouse_description1")} <br />
      </p>

      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            ref={(el) => (tabRefs.current[index] = el)}
            className={`tab ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </button>
        ))}
        <div className="tab-indicator" style={indicatorStyle}></div>
      </div>
    </section>
  );
};

export default M2LabSection;
