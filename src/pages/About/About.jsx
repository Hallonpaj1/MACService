import { motion } from "framer-motion";
import { CheckCircle2, Users, Trophy, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import "./About.css";

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
      description: "Många års erfarenhet inom trädgårds- och fastighetsskötsel.",
    },
    {
      icon: Zap,
      title: "Effektivitet",
      description: "Snabba resultat utan att kompromissa med kvalitet.",
    },
  ];

  return (
    <main className="about-page" aria-label="Om MAC Service">

      {/* HEADER */}
      <header className="section about-header" aria-label="Om oss header">
        <div className="container about-header-content">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="h1"
          >
            Om MAC Service i Köping
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-lg"
          >
            Din lokala partner för professionell trädgårds- och fastighetsskötsel i Köping med omnejd
          </motion.p>

        </div>
      </header>

      {/* STORY */}
      <section className="section story-section" aria-label="Vår berättelse">
        <div className="container">

          <p className="text-lg">
            Vi erbjuder trädgårdsskötsel, fastighetsskötsel och enklare byggtjänster i Köping och mellersta Sverige.<br />
           
            Vi hjälper både privatpersoner och företag med pålitlig och noggrann service.
          </p>

          <div className="about-story-card" aria-label="Vad vi erbjuder">

            <p className="text-lg font-semibold mb-4">
              Hos oss får du:
            </p>

            <div className="check-list">

              {[
                "Personlig service",
                "Noggrant utfört arbete",
                "Rimliga priser",
                "Flexibla lösningar",
              ].map((item, i) => (
                <div key={i} className="check-item">
                  <CheckCircle2 size={14} aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* VALUES */}
      <section className="section values-section" aria-label="Våra värderingar">
        <div className="container">

          <h2 className="h2">Varför välja MAC Service?</h2>

          <div className="values-grid">

            {values.map((v, i) => {
              const Icon = v.icon;

              return (
                <motion.article
                  key={i}
                  whileHover={{ y: -6 }}
                  className="value-card"
                  aria-label={v.title}
                >
                  <div className="value-icon" aria-hidden="true">
                    <Icon color="white" />
                  </div>

                  <h3 className="text-lg font-semibold">{v.title}</h3>
                  <p className="text-lg">{v.description}</p>

                </motion.article>
              );
            })}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="section about-cta" aria-label="Kontakt CTA">
        <div className="about-cta-content">

          <h2 className="h2 text-white">Redo att börja?</h2>

          <p className="text-lg text-white">
            Kontakta oss för en kostnadsfri offert i Köping.
          </p>

          <Link
            to="/contact"
            className="cta-button"
            aria-label="Gå till kontaktsidan"
          >
            Kontakta oss
          </Link>

        </div>
      </section>

    </main>
  );
}