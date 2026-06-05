import { motion } from "framer-motion";
import "./About.css";
import Slideshow from "../Slideshow/Slideshow";

export default function AboutSection() {

  const items = [
    "Professionell och erfaren service",
    "Personlig och tillgänglig",
    "Noggrant utfört arbete",
    "Service till rätt pris",
  ];

  return (
    <section
      className="about-section"
      aria-labelledby="about-section-title"
    >

      <div className="container about-container">

        <div className="about-grid">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <span className="about-label" aria-hidden="true">
              Om oss
            </span>

            <h2
              id="about-section-title"
              className="about-title"
            >
              Din lokala partner för fastighetsskötsel och trädgårdsservice
            </h2>

            <p className="about-text">
              Vi erbjuder professionell trädgårdsskötsel,
              fastighetsskötsel och byggtjänster i mellersta Sverige.
            </p>

            <p className="about-text">
              Vi utgår från Köping och hjälper både privatpersoner och företag att ta hand om sina fastigheter med kvalitet och omsorg.
            </p>

            {/* LIST (SEO + accessibility fix: ul/li instead of divs) */}
            <ul className="about-list" aria-label="Fördelar med MAC Service">
              {items.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="about-list-item"
                >
                  <span className="about-dot" aria-hidden="true" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            aria-label="Bildspel av våra tjänster"
          >
            <div className="about-visual">

              <div
                className="about-center"
                aria-hidden="true"
              />

              <Slideshow />

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}