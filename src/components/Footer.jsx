
import { useTranslation } from "react-i18next";
import "./Footer.css";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-services">
          <h3>{t("footer.servicesTitle")}</h3>
          <ul>
            <li>{t("footer.servicesList.crm")}</li>
            <li>{t("footer.servicesList.pricing")}</li>
            <li>{t("footer.servicesList.chess")}</li>
            <li>{t("footer.servicesList.export")}</li>
            <li>{t("footer.servicesList.handover")}</li>
            <li>{t("footer.servicesList.documents")}</li>
            <li>{t("footer.servicesList.registry")}</li>
            <li>{t("footer.servicesList.agentAccess")}</li>
            <li>{t("footer.servicesList.cottageCRM")}</li>
          </ul>
        </div>

        <div className="footer-services">
          <h3>{t("footer.services.title")}</h3>
          <ul>
            <li>{t("footer.services.webDevelopment")}</li>
          </ul>
        </div>

        <div className="footer-contact">
        <h3 
  style={{ cursor: "pointer", color: "white", textDecoration: "none" }}
  onClick={() => window.location.href = "tel:+998907178715"}
>
  {t("footer.contact.phone")}
</h3>

          <p>{t("footer.contact.email")}</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>{t("footer.bottomText.rights")}</p>
        <p>{t("footer.bottomText.privacyPolicy")}</p>
      </div>
    </footer>
  );
}

export default Footer;
