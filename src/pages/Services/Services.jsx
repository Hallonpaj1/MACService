import { motion } from "framer-motion";
import {
  Leaf,
  Hammer,
  Home,
  Scissors,
  Wrench,
  Paintbrush,
} from "lucide-react";

import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { Link } from "react-router-dom";

import "./Services.css";

export default function Services() {
  const mainServices = [
    {
      icon: Leaf,
      title: "Trädgårdsservice i Köping",
      description:
        "Professionell trädgårdsskötsel, underhåll och design för privata och kommersiella fastigheter.",
    },
    {
      icon: Hammer,
      title: "Bygg & Renovering",
      description:
        "Högkvalitativa bygg- och renoveringstjänster anpassade efter dina behov och projekt.",
    },
    {
      icon: Home,
      title: "Fastighetsskötsel",
      description:
        "Helhetslösningar för fastighetsunderhåll, både invändigt och utvändigt.",
    },
  ];

  const detailedServices = [
    {
      icon: Scissors,
      title: "Beskärning & Klippning",
      description:
        "Säker och professionell beskärning av träd, buskar och grönytor för optimal tillväxt.",
    },
    {
      icon: Wrench,
      title: "Löpande Underhåll",
      description:
        "Regelbunden service som håller din fastighet i toppskick året runt.",
    },
    {
      icon: Paintbrush,
      title: "Målning & Ytskikt",
      description:
        "Invändig och utvändig målning samt renovering med fokus på hållbarhet och finish.",
    },
  ];

  return (
    <main className="services-page" aria-label="Tjänstesida för MAC Service">

      {/* HERO */}
      <header className="services-hero-wrap">
        <section className="services-header" aria-labelledby="services-title">
          <h1 id="services-title" className="services-title">
            Våra tjänster i Köping och Mälardalen
          </h1>

          <p className="services-subtitle">
            Vi erbjuder professionell trädgårdsskötsel, byggnation och fastighetsskötsel för privatpersoner och företag.
          </p>
        </section>
      </header>

      {/* MAIN SERVICES */}
      <section
        className="section services-main-section"
        aria-label="Huvudtjänster"
      >
        <div className="container">
          <div className="grid-3">
            {mainServices.map((s, i) => (
              <ServiceCard
                key={i}
                icon={s.icon}
                title={s.title}
                description={s.description}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED SERVICES */}
      <section
        className="section services-detailed-section"
        aria-label="Detaljerade tjänster"
      >
        <div className="container">

          <h2 className="section-title">
            Detaljerade tjänster
          </h2>

          <div className="grid-3">
            {detailedServices.map((s, i) => (
              <ServiceCard
                key={i}
                icon={s.icon}
                title={s.title}
                description={s.description}
                index={i}
              />
            ))}
          </div>

        </div>
      </section>

      {/* EXPECTATIONS */}
      <section
        className="section services-features-section"
        aria-label="Vad kunden kan förvänta sig"
      >
        <div className="container">

          <h2 className="section-title">
            Vad du kan förvänta dig
          </h2>

          <ul className="features-list">
            {[
              "Kostnadsfri offert och konsultation",
              "Tydliga och transparenta priser",
              "Professionellt och noggrant utfört arbete",
              "Pålitlig service och snabb återkoppling",
            ].map((f, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="feature-item"
              >
                <span aria-hidden="true">✓</span>
                <span>{f}</span>
              </motion.li>
            ))}
          </ul>

        </div>
      </section>

      {/* CTA */}
      <section
        className="section cta services-cta"
        aria-label="Kontaktuppmaning"
      >
        <div className="container">

          <div className="services-cta-content">
            <h2>
              Intresserad av våra tjänster?
            </h2>

            <p className="services-cta-text">
              Kontakta oss idag för en kostnadsfri offert
            </p>

            <Link
              to="/contact"
              className="btn"
              aria-label="Gå till kontaktsidan för offert"
            >
              Begär offert
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}