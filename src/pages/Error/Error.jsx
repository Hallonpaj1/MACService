import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HardHat } from "lucide-react";
import logo from "../../assets/logo/LogoTransparentWhite.png";
import "./Error.css";

export default function NotFound() {
  return (
    <main
      className="error-page section"
      role="main"
      aria-labelledby="error-title"
    >
      <div className="error-content">

        {/* LOGO */}
        <motion.img
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          src={logo}
          alt="MAC Service logotyp"
          className="error-logo"
        />

        {/* ERROR CODE */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="error-code"
          aria-hidden="true"
        >
          <HardHat size={40} strokeWidth={1.5} className="error-icon" aria-hidden="true" />
          404
        </motion.p>

        {/* TITLE */}
        <motion.h1
          id="error-title"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="error-title"
        >
          Hoppsan! Här verkar vi ha byggt lite fel.
        </motion.h1>

        {/* TEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="error-text"
        >
          Sidan du letar efter verkar ha tagit en annan väg.
          <br />
          Vi hjälper gärna till att hitta rätt – gå tillbaka till startsidan eller kontakta oss om du behöver hjälp.
        </motion.p>

        {/* ACTION */}
        <div className="error-actions">
          <Link
            to="/"
            className="error-button primary"
            aria-label="Gå tillbaka till startsidan"
          >
            Till startsidan
          </Link>
          <Link
            to="/contact"
            className="error-button secondary"
            aria-label="Gå till kontaktsidan"
          >
            Kontakta oss
          </Link>
        </div>

      </div>
    </main>
  );
}