import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import logo from "../../assets/logo/LogoTransparent.png"
import "./Error.css"

export default function NotFound() {
  return (
    <section className="error-page section">
      <div className="error-content">
        <motion.img
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          src={logo}
          alt="A.C Service Logo"
          className="error-logo"
        />

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="error-code"
        >
          404
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="error-title"
        >
          OJ! du verkar ha trampat snett!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="error-text"
        >
          Klicka här för att komma tillbaks till sidan.
        </motion.p>

        <div className="error-actions">
          <Link to="/" className="error-button primary">
            Till startsidan
          </Link>
        </div>
      </div>
    </section>
  )
}
