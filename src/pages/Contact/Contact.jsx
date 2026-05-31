import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import "./Contact.css"

export default function Contact() {

  const [formData, setFormData] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const contactMethods = [
    {
      icon: Phone,
      title: "Telefon",
      content: "073 227 55 40",
      link: "tel:+46732275540",
      color: "#f59e0b",
    },
    {
      icon: Mail,
      title: "E-post",
      content: "Collinstradgardsservice@outlook.com",
      link: "mailto:Collinstradgardsservice@outlook.com",
      color: "#0f9d58",
    },
    {
      icon: MapPin,
      title: "Plats",
      content: "Köping, Sverige",
      link: "#",
      color: "#e11d48",
    },
  ]

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setSubmitted(true)
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="contact-page">
      <div className="contact-hero-wrap">

      {/* HEADER */}
      <section className="contact-header">

        <h1 className="h1">Kontakta Oss</h1>
        <p className="text">
          Vi ser fram emot att höra från dig
        </p>

      </section>

      {/* CONTACT METHODS */}
      <section className="section contact-methods-section">
        <div className="container">

          <div className="contact-grid">

            {contactMethods.map((m, i) => {
              const Icon = m.icon

              return (
                <motion.a
                  key={i}
                  href={m.link}
                  whileHover={{ y: -6 }}
                  className="contact-card"
                >

                  <div
                    className="contact-icon"
                    style={{ background: m.color }}
                  >
                    <Icon color="white" />
                  </div>

                  <h3>{m.title}</h3>
                  <p>{m.content}</p>

                </motion.a>
              )
            })}

          </div>

        </div>
      </section>

      {/* FORM */}
      <section className="section contact-form-section">
        <div className="container">

          <div className="form-wrapper">

            {submitted ? (
              <div className="success">
                <h2>Tack!</h2>
                <p>Vi kontaktar dig snart.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>

                <input className="input" name="name" placeholder="Namn" onChange={handleChange} />
                <input className="input" name="email" placeholder="Email" onChange={handleChange} />
                <textarea className="input" name="message" rows="5" placeholder="Meddelande" onChange={handleChange} />

                <button className="btn" disabled={isLoading}>
                  <Send size={18} />
                  {isLoading ? "Skickar..." : "Skicka"}
                </button>

              </form>
            )}

          </div>

        </div>
      </section>

      {/* MAP */}
      <section className="section contact-map-section">
        <div className="container">

          <div className="map">
            <iframe
              title="map"
              width="100%"
              height="100%"
              loading="lazy"
              src="https://www.google.com/maps?q=K%C3%B6ping%2C%20Sverige&output=embed"
            />
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="cta contact-cta">

        <h2>Redo att börja?</h2>
        <p>Kontakta oss idag</p>

        <a href="tel:+46732275540" aria-label="Ring 073 227 55 40">
          Ring oss
        </a>

      </section>

      </div>

    </div>
  )
}