import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "./Slider.css";
import Karmana from "../assets/karmanalogo.png";
import Isfaan from "../assets/isfanlogo.png";
import Yuksalish from "../assets/yuksalishlogo.png";
import Makon from "../assets/makonlogo.png";
import Qorasuv from "../assets/qorasuvlogo.png";
import Bmgroup from "../assets/BMgr.jpg";
import Shohsaroy from "../assets/Shohsaroy.jpg";
import ctcUni from "../assets/ctcUNI.jpg";
import SiyohLogo from "../assets/BCIGroup.jpg";
import PlayLogo from "../assets/laylologo.png";

const testimonials = [
  {
    image: Yuksalish,
    key: "yuksalish",
  },
  {
    image: Isfaan,
    key: "isfaan",
  },
  {
    image: Bmgroup,
    key: "bmgroup",
  },
  {
    image: Makon,
    key: "makon",
  },
  {
    image: Qorasuv,
    key: "qorasuv",
  },
  {
    image: Karmana,
    key: "karmana",
  },
  {
    image: Shohsaroy,
    key: "shohsaroy",
  },
  {
    image: ctcUni,
    key: "ctcuni",
  },
  {
    image: SiyohLogo,
    key: "bci",
  },
  {
    image: PlayLogo,
    key: "laylo",
  },
];

export default function TestimonialSlider() {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="testimonial-container">
      <h2 className="testimonial-title">{t("testimonialTitle")}</h2>
      <div className="testimonial-card">
        <img
          src={testimonials[current].image}
          alt="Building"
          className="testimonial-image"
        />
        <div className="testimonial-content">
          <h3 className="testimonial-heading">{t("testimonialHeading")}</h3>
          <p className="testimonial-text">{t(`testimonials.${testimonials[current].key}.text`)}</p>
          <p className="testimonial-author">{t(`testimonials.${testimonials[current].key}.author`)}</p>
        </div>
      </div>
      <div className="testimonial-buttons">
        <button onClick={prevSlide} className="testimonial-button">
          <ArrowLeft className="icon" />
        </button>
        <button onClick={nextSlide} className="testimonial-button">
          <ArrowRight className="icon" />
        </button>
      </div>
    </div>
  );
}
