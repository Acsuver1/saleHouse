import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Partners.css";

import imranLogo from "../assets/imranlogo.png";
import YuksalishLogo from "../assets/yuksalishlogo.png";
import MakonLogo from "../assets/makonlogo.png";
import IsfanLogo from "../assets/isfanlogo.png";
import KarmanaLogo from "../assets/karmanalogo.png";
import QoraLogo from "../assets/qorasuvlogo.png";
import SiyohLogo from "../assets/siyovushlogo.png";
import PlayLogo from "../assets/laylologo.png";

const partners = [
  { id: 1, img: imranLogo },
  { id: 2, img: YuksalishLogo },
  { id: 3, img: MakonLogo },
  { id: 4, img: IsfanLogo },
  { id: 5, img: KarmanaLogo },
  { id: 6, img: QoraLogo },
  { id: 7, img: SiyohLogo },
  { id: 8, img: PlayLogo },
];

const Partners = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1100,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <section className="partners-section">
      <div className="partners-container">
        <Slider {...settings}>
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              className="partner-card"
              initial={{ opacity: 0, rotateY: 90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.1, rotate: 2, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)" }}
            >
              <motion.img
                src={partner.img}
                alt="Partner Logo"
                className="partner-logo"
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Partners;
