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
    { name: "Om", path: "/about" },
    { name: "Tjänster", path: "/services" },
    { name: "Kontakt", path: "/contact" },
  ]

  const isActive = (path) => location.pathname === path

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>

      <div className="navbar-container">

        {/* LOGO */}
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="MAC Service" />
          <span className="navbar-brand">MAC Service</span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="navbar-links">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={isActive(link.path) ? "active" : ""}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link to="/contact" className="navbar-cta">
          Kontakta oss
        </Link>

        {/* MOBILE BUTTON */}
        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* MOBILE MENU */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
        transition={{ duration: 0.3 }}
        className={`mobile-menu ${isOpen ? "open" : ""}`}
      >
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={isActive(link.path) ? "active" : ""}
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}

        <Link
          to="/contact"
          className="mobile-cta"
          onClick={() => setIsOpen(false)}
        >
          Kontakta oss
        </Link>
      </motion.div>

    </nav>
  )
}