import { motion } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"
import { useNavigate } from "react-router-dom"
import logo from "../../assets/logo/LogoTransparent.png"
import "./Hero.css"

export default function Hero({ showStats = true }) {

  const navigate = useNavigate()

  const stats = [
    { label: "100+", value: "Utförda projekt" },
    { label: "99%", value: "Nöjda kunder" },
    { label: "10+", value: "År av erfarenhet" },
  ]

  return (
    <section className="hero" aria-label="Huvudsektion">

      <div className="hero-container">

        {/* LOGO */}
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          src={logo}
          alt="MAC Service logotyp"
          className="hero-logo"
          width="420"
          height="277"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />

        {/* INTRO TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-label"
        >
          Professionell trädgårdsservice, fastighetsskötsel och bygg i Köping och mellersta Sverige.
        </motion.p>

        {/* HEADLINE (SEO VIKTIG) */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-title"
        >
          <span className="hero-gradient">
            Trädgårdsskötsel, fastighetsservice
            <br />
            och byggtjänster till rätt pris
          </span>
        </motion.h1>

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
            <Play size={18} aria-hidden="true" />
            Våra tjänster
          </motion.button>

        </div>

        {/* STATS */}
        {showStats && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-stats"
            aria-label="Statistik om företaget"
          >
            {stats.map((s, i) => (
              <div key={i} className="stat-item">
                <div className="stat-number">{s.label}</div>
                <div className="stat-label">{s.value}</div>
              </div>
            ))}
          </motion.div>
        )}

      </div>
    </section>
  )
}