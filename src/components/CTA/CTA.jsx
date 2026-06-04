import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./CTA.css";

export default function CTA() {
  return (
    <section
      className="cta-section"
      aria-labelledby="cta-title"
    >

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="cta-container"
      >

        <h2 id="cta-title" className="cta-title">
          Behöver du professionell trädgård, bygg eller fastighetsskötsel?
        </h2>

        <p className="cta-text">
          Kontakta MAC Service idag för en kostnadsfri offert.
          Vi hjälper både privatpersoner och företag med pålitlig och kvalitativ service.
        </p>

        <div className="cta-buttons">

          <Link
            to="/contact"
            className="btn-primary"
            aria-label="Gå till kontaktsidan för att begära offert"
          >
            Kontakta oss
            <ArrowRight size={18} className="btn-icon" aria-hidden="true" />
          </Link>

          <Link
            to="/about"
            className="btn-secondary"
            aria-label="Läs mer om MAC Service"
          >
            Om oss
          </Link>

        </div>

      </motion.div>

    </section>
  );
}