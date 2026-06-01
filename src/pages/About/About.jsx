import { motion } from "framer-motion"
import { CheckCircle2, Users, Trophy, Zap } from "lucide-react"
import { Link } from "react-router-dom"
import "./About.css"

export default function AboutPage() {

  const values = [
    {
      icon: CheckCircle2,
      title: "Noggrannhet",
      description: "Vi utför varje arbete med precision och bryr oss om varje detalj.",
    },
    {
      icon: Users,
      title: "Personlig Service",
      description: "Du får personlig uppmärksamhet och skräddarsydda lösningar.",
    },
    {
      icon: Trophy,
      title: "Erfarenhet",
      description: "Många års erfarenhet inom alla våra serviceområden.",
    },
    {
      icon: Zap,
      title: "Effektivitet",
      description: "Snabba resultat utan att kompromissa med kvalitet.",
    },
  ]

  return (
    <div className="about-page">

      {/* HEADER */}
      <section className="section about-header">
        <div className="container about-header-content">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="h1"
        >
          Om MAC Service
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-lg"
        >
          Din lokala partner för professionell fastighetsskötsel
        </motion.p>
        </div>
      </section>

      {/* STORY */}
      <section className="section centered story-section">
        <div className="welcome-container">

          <p className="text-lg">
            Välkommen till MAC Service – trädgård, fastighet och bygg i mellersta Sverige.<br />
            Jag utgår från Köping och hjälper både privatpersoner och företag.
          </p>

         
          </div>
          <div className="about-story-card">

            <p className="text-lg font-semibold mb-4">
              Hos mig får du:
            </p>

            <div className="check-list">

              {[
                "Personlig service",
                "Noggrant utfört arbete",
                "Rimliga priser",
                "Flexibilitet",
              ].map((item, i) => (
                <div key={i} className="check-item">
                  <CheckCircle2 size={14} />
                  <span>{item}</span>
                </div>
              ))}

            

          </div>

        </div>
      </section>

      {/* VALUES */}
      <section className="section centered values-section">
        <div className="container">

          <h2 className="h2">Varför välja oss?</h2>

          <div className="values-grid">

            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -6 }}
                  className="value-card"
                >

                  <div className="value-icon">
                    <Icon color="white" />
                  </div>

                  <h3 className="text-lg font-semibold">{v.title}</h3>
                  <p className="text-lg">{v.description}</p>

                </motion.div>
              )
            })}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="section cta about-cta">
        <div className="about-cta-content">

          <h2 className="h2 text-white">Redo att börja?</h2>

          <p className="text-lg text-white">
            Kontakta oss för en kostnadsfri konsultation.
          </p>

          <Link to="/contact" className="cta-button">
            Kontakta oss
          </Link>

        </div>
      </section>

    </div>
  )
}