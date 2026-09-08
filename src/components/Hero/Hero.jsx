
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
        <img
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
          <p className="hero-label">
            MAC SERVICE
          </p>

          {/* HEADLINE */}
          <h1 className="hero-title">
            Byggnation, fastighet & trädgårdsservice
          </h1>

          <p className="hero-subtitle">
            Din lokala partner för noggrann och personlig service – för både privatpersoner och företag.
          </p>

          {/* CTA BUTTONS */}
          <div className="hero-buttons">

            <button
              className="btn-primary"
              onClick={() => navigate("/contact")}
              aria-label="Gå till kontaktsida"
            >
              Kontakta oss
              <ArrowRight size={18} aria-hidden="true" />
            </button>

            <button
              className="btn-secondary"
              onClick={() => navigate("/services")}
              aria-label="Visa våra tjänster"
            >
              Se våra tjänster
            </button>

          </div>
        </div>

      </div>
    </section>
  )
}