import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import "./Navbar.css"
import logo from "../../assets/logo/LogoTransparent.png"

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  const links = [
    { name: "Hem", path: "/" },
    { name: "Om oss", path: "/about" },
    { name: "Tjänster", path: "/services" },
    { name: "Kontakt", path: "/contact" },
  ]

  const isActive = (path) => location.pathname === path

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`navbar ${isScrolled ? "scrolled" : ""}`}
      aria-label="Huvudnavigation"
    >

      <div className="navbar-container">

        {/* LOGO */}
        <Link
          to="/"
          className="navbar-logo"
          aria-label="Gå till startsidan"
        >
          <img src={logo} alt="MAC Service logotyp" />
          <span className="navbar-brand">MAC Service</span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="navbar-links" role="navigation" aria-label="Huvudmeny">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={isActive(link.path) ? "active" : ""}
              aria-current={isActive(link.path) ? "page" : undefined}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA (SEO + conversion viktigt) */}
        <Link
          to="/contact"
          className="navbar-cta"
          aria-label="Kontakta MAC Service"
        >
          Kontakta oss
        </Link>

        {/* MOBILE BUTTON */}
        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Stäng meny" : "Öppna meny"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>

      </div>

      {/* MOBILE MENU */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
        transition={{ duration: 0.3 }}
        className={`mobile-menu ${isOpen ? "open" : ""}`}
        role="navigation"
        aria-label="Mobilmeny"
      >
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={isActive(link.path) ? "active" : ""}
            aria-current={isActive(link.path) ? "page" : undefined}
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}

        <Link
          to="/contact"
          className="mobile-cta"
          onClick={() => setIsOpen(false)}
          aria-label="Kontakta oss"
        >
          Kontakta oss
        </Link>
      </motion.div>

    </nav>
  )
}