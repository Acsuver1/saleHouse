import React from "react";
import { useTranslation } from "react-i18next";
import "./Solution.css";
import SolutionL from "../assets/illustration_84.png";

const SolutionsSection = () => {
  const { t } = useTranslation();

  const solutions = [
    {
      title: t("solution_1_title"),
      description: t("solution_1_description"),
      image: SolutionL,
    },
    {
      title: t("solution_2_title"),
      description: t("solution_2_description"),
      image: SolutionL,
    },
    {
      title: t("solution_3_title"),
      description: t("solution_3_description"),
      image: SolutionL,
    },
  ];

  return (
    <section className="solutions-section">
      <h2 className="section-title">{t("solutions_main_title")}</h2>
      <div className="solutions-container">
        {solutions.map((solution, index) => (
          <div className="solution-card" key={index}>
            <h3 className="solution-title">{solution.title}</h3>
            <p className="solution-description">{solution.description}</p>
            <img src={solution.image} alt={solution.title} className="solution-image" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SolutionsSection;
