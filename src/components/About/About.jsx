import { motion } from "framer-motion"
import "./About.css"
import Slideshow from "../Slideshow/Slideshow"

export default function AboutSection() {

  const items = [
    "Professionell och erfaren service",
    "Personlig och tillgänglig",
    "Noggrant utfört arbete",
    "Service till rätt pris",
  ]

  return (
    <section className="about-section">

      <div className="container about-container">

        <div className="about-grid">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="about-label">Om Oss</span>

            <h2 className="about-title">
              Din Lokala Partner För Allt Kring Din Fastighet
            </h2>

            <p className="about-text">
              Välkommen till MAC Service – din lokala partner för
              trädgårdsservice, fastighetsskötsel och byggtjänster i mellersta Sverige.
            </p>

            <p className="about-text">
              Vi utgår från Köping och hjälper både privatpersoner och företag
              att ta hand om sina fastigheter.
            </p>

            <div className="about-list">
              {items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="about-list-item"
                >
                  <span className="about-dot" />
                  {item}
                </motion.div>
              ))}
            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-visual">

              <div className="about-center"></div>

              <Slideshow />

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}