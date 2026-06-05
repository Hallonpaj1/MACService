import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"
import { Link } from "react-router-dom"
import "./Footer.css"
import logo from "../../assets/logo/LogoTransparent.png"

export default function Footer() {

  const currentYear = new Date().getFullYear()
  const servicesLink = "/services"

  const contactLinks = [
    {
      icon: Phone,
      label: "Telefon",
      value: "073 227 55 40",
      href: "tel:+46732275540",
    },
    {
      icon: Mail,
      label: "Email",
      value: "hello@macservice.se",
      href: "mailto:hello@macservice.se",
    },
    {
      icon: MapPin,
      label: "Plats",
      value: "Köping, Sverige",
      href: "/#/contact#map",
    },
  ]

  const footerLinks = [
    {
      title: "Tjänster",
      links: [
        { label: "Trädgårdsservice", to: servicesLink },
        { label: "Byggnationer", to: servicesLink },
        { label: "Fastighetsskötsel", to: servicesLink },
      ],
    },
    {
      title: "Företag",
      links: [
        { label: "Om Oss", to: "/about" },
        { label: "Kontakt", to: "/contact" },
      ],
    },
    {
      title: "Socialt",
      links: [
        {
          label: "Instagram",
          href: "https://www.instagram.com/macservicekoping?igsh=Zjd4dHMyOXNuZnd1",
        },
        {
          label: "Facebook",
          href: "https://www.facebook.com/mac.service.2025",
        },
        {
          label: "LinkedIn",
          href: "https://se.linkedin.com/in/andreas-collin-429089349",
        },
      ],
    },
  ]

  return (
    <footer className="footer" aria-label="Sidfot">

      <div className="footer-container">

        {/* BRAND */}
        <section className="footer-grid">

          <div>
            <div className="footer-logo">
              <img src={logo} alt="MAC Service logotyp" />
              <span className="footer-name">MAC Service</span>
            </div>

            <p className="footer-text">
              Professionell trädgårdsservice, byggnation och fastighetsskötsel i Köping med omnejd.
            </p>

            <nav aria-label="Kontaktinformation">
              <div className="footer-icons">
                {contactLinks.map((c, i) => {
                  const Icon = c.icon

                  return (
                    <a
                      key={i}
                      href={c.href}
                      className="footer-icon"
                      aria-label={c.label}
                    >
                      <Icon size={18} />
                    </a>
                  )
                })}
              </div>
            </nav>
          </div>

          {/* LINKS */}
          {footerLinks.map((col, i) => (
            <div key={i}>
              <h4 className="footer-title">{col.title}</h4>

              <ul className="footer-links">
                {col.links.map((link, j) => {

                  // Internal links (SEO friendly SPA routing)
                  if (link.to) {
                    return (
                      <li key={j}>
                        <Link to={link.to}>{link.label}</Link>
                      </li>
                    )
                  }

                  // External links
                  return (
                    <li key={j}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}

        </section>

        {/* DIVIDER */}
        <div className="footer-divider" />

        {/* COPYRIGHT */}
        <div className="footer-bottom">
          <p>© {currentYear} MAC Service. Alla rättigheter reserverade.</p>
        </div>

      </div>
    </footer>
  )
}