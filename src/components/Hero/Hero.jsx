import { motion } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"
import { useNavigate } from "react-router-dom"
import logo from "../../assets/logo/LogoTransparent.png"
import "./Hero.css"


export default function Hero({ showStats = true }) {

  const navigate = useNavigate()

  const stats = [
    { label: "100+", value: "Projekt Genomförda" },
    { label: "99%", value: "Nöjda Kunder" },
    { label: "10+", value: "År Erfarenhet" },
  ]

  return (
    <section className="hero">
      <div className="hero-container">

      <motion.img
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        src={logo}
        alt="MAC Service Logo"
        className="hero-logo"
      />

        {/* LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-label"
        >
          Välkommen till MAC Service – trädgård, fastighetsskötsel och bygg i mellersta Sverige.
        </motion.div>

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-title"
        ><span className="hero-gradient">
          Trädgård, fastighetsskötsel
          <br />
            och bygg till rätt pris
          </span>
        </motion.h1>

        {/* BUTTONS */}
        <div className="hero-buttons">

          <motion.button
            whileHover={{ y: -2 }}
            className="btn-primary"
            onClick={() => navigate('/contact')}
          >
            Kontakta Oss
            <ArrowRight size={18} />
          </motion.button>

          <motion.button
            whileHover={{ y: -2 }}
            className="btn-secondary"
            onClick={() => navigate('/services')}
          >
            <Play size={18} />
            Se Våra Tjänster
          </motion.button>

        </div>

        {/* STATS (optional) */}
        {showStats && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-stats"
          >
            {stats.map((s, i) => (
              <div key={i}>
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