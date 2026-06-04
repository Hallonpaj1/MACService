import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      if (typeof window !== "undefined" && window.location.hash.includes("map")) {
        const el = document.getElementById("contact-map");
        if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 150);
      }
    } catch (e) {}
  }, []);

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
      link: "#/contact#map",
      color: "#e11d48",
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("https://formspree.io/f/mlgkdjop", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="contact-page" aria-label="Kontaktsida">

      {/* HERO / HEADER */}
      <header className="contact-header">
        <h1 className="h1">Kontakta Oss</h1>
        <p className="text">
          Vi ser fram emot att höra från dig i Köping med omnejd
        </p>
      </header>

      {/* CONTACT METHODS */}
      <section
        className="section contact-methods-section"
        aria-label="Kontaktuppgifter"
      >
        <div className="container">

          <div className="contact-grid">

            {contactMethods.map((m, i) => {
              const Icon = m.icon;

              return (
                <motion.a
                  key={i}
                  href={m.link}
                  whileHover={{ y: -6 }}
                  className="contact-card"
                  aria-label={m.title}
                >
                  <div
                    className="contact-icon"
                    style={{ background: m.color }}
                    aria-hidden="true"
                  >
                    <Icon color="white" />
                  </div>

                  <h3>{m.title}</h3>
                  <p>{m.content}</p>
                </motion.a>
              );
            })}

          </div>

        </div>
      </section>

      {/* FORM */}
      <section
        className="section contact-form-section"
        aria-label="Kontaktformulär"
      >
        <div className="container">

          <div className="form-wrapper">

            {submitted ? (
              <div className="success" role="status">
                <h2>Tack!</h2>
                <p>Vi kontaktar dig snart.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} aria-label="Kontaktformulär">

                {/* NAME */}
                <label htmlFor="name" className="sr-only">
                  Namn
                </label>
                <input
                  id="name"
                  className="input"
                  name="name"
                  placeholder="Namn"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                />

                {/* EMAIL */}
                <label htmlFor="email" className="sr-only">
                  E-post
                </label>
                <input
                  id="email"
                  className="input"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                />

                {/* MESSAGE */}
                <label htmlFor="message" className="sr-only">
                  Meddelande
                </label>
                <textarea
                  id="message"
                  className="input"
                  name="message"
                  rows="5"
                  placeholder="Meddelande"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />

                <button
                  className="btn"
                  disabled={isLoading}
                  aria-busy={isLoading}
                >
                  <Send size={18} aria-hidden="true" />
                  {isLoading ? "Skickar..." : "Skicka"}
                </button>

              </form>
            )}

          </div>

        </div>
      </section>

      {/* MAP */}
      <section
        className="section contact-map-section"
        aria-label="Karta"
      >
        <div className="container">

          <div id="contact-map" className="map">
            <iframe
              title="Karta över Köping"
              width="100%"
              height="100%"
              loading="lazy"
              src="https://www.google.com/maps?q=K%C3%B6ping%2C%20Sverige&output=embed"
            />
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="cta contact-cta" aria-label="Call to action">

        <h2>Redo att börja?</h2>
        <p>Kontakta oss idag för offert i Köping</p>

        <a
          href="tel:+46732275540"
          aria-label="Ring 073 227 55 40"
        >
          Ring oss
        </a>

      </section>

    </main>
  );
}