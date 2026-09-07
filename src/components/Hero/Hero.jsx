import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useNavigate } from "react-router-dom"
import logo from "../../assets/logo/LogoTransparentWhite.png"
import "./Hero.css"

export default function Hero({ showStats = false }) {

  const navigate = useNavigate()

  return (
    <section className="hero" aria-label="Huvudsektion">

      {/* BACKGROUND IMAGE & OVERLAY */}
      <div className="hero-bg" aria-hidden="true"></div>
      <div className="hero-overlay" aria-hidden="true"></div>

      <div className="hero-container">

        {/* LOGO */}
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          src={logo}
          alt="MAC Service logotyp"
          className="hero-logo"
          width="180"
          height="180"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />

        <div className="hero-content">
          {/* INTRO TEXT */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-label"
          >
            MAC SERVICE
          </motion.p>

          {/* HEADLINE */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="hero-title"
          >
            Byggnation, fastighet & trädgårdsservice
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hero-subtitle"
          >
            Din lokala partner för noggrann och personlig service – för både privatpersoner och företag.
          </motion.p>

          {/* CTA BUTTONS */}
          <div className="hero-buttons">

            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary"
              onClick={() => navigate("/contact")}
              aria-label="Gå till kontaktsida"
            >
              Kontakta oss
              <ArrowRight size={18} aria-hidden="true" />
            </motion.button>

            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn-secondary"
              onClick={() => navigate("/services")}
              aria-label="Visa våra tjänster"
            >
              Se våra tjänster
            </motion.button>

          </div>
        </div>

      </div>
    </section>
  )
}