import { motion } from "framer-motion";
import { CheckCircle2, Users, Trophy, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "../../assets/hero-about.jpg";
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
      description: "Erfarenhet av byggnation, fastighetsskötsel och trädgårdsservice.",
    },
    {
      icon: Zap,
      title: "Effektivitet",
      description: "Snabba resultat utan att kompromissa med kvalitet.",
    },
  ];

  return (
    <main className="about-page" aria-label="Om MAC Service">

      {/* HERO */}
      <header className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: `url(${heroImg})` }}></div>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-container">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="page-hero-title"
          >
            Om MAC Service i Köping
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="page-hero-subtitle"
          >
            Ett lokalt företag med fokus på kvalitet, personlig service och noggrant utfört arbete.
          </motion.p>
        </div>
      </header>

      {/* STORY */}
      <section className="section story-section" aria-label="Vår berättelse">
        <div className="container story-container">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="story-label">Om oss</span>

            <h2 className="story-title">
              Personlig service med fokus på kvalitet och noggrannhet
            </h2>

            <p className="story-text">
              Vi tror på att göra ett bra jobb från början. Genom nära kontakt med våra kunder kan vi förstå behoven och hitta lösningar som fungerar i praktiken. Oavsett om det gäller ett mindre uppdrag eller ett större projekt är målet alltid detsamma – ett noggrant utfört arbete och en nöjd kund.
            </p>

            <ul className="check-list" aria-label="Vad vi erbjuder">
              {[
                "Personlig service",
                "Noggrant utfört arbete",
                "Rimliga priser",
                "Flexibla lösningar",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="check-item"
                >
                  <CheckCircle2 size={16} aria-hidden="true" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

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
                    <Icon size={32} strokeWidth={1.5} />
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