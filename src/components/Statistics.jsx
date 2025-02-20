import React from "react";
import { useTranslation } from "react-i18next";
import Counter from "./Counter";
import "./Counter.css";

const StatsSection = () => {
  const { t } = useTranslation();

  return (
    <div className="stats-container">
      <Counter end={100} text={t("developers_choose_us")} />
      <Counter end={55000} text={t("objects_helped")} />
      <Counter end={40} text={t("regions_connected")} />
    </div>
  );
};

export default StatsSection;
