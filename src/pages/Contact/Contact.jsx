import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ChevronRight, Search } from "lucide-react";
import heroImg from "../../assets/hero-contact.jpg";
import kopingMap from "../../assets/koping_map.webp";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    privacyConsent: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    try {
      if (typeof window !== "undefined" && window.location.hash.includes("map")) {
        const el = document.getElementById("contact-map");
        if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 150);
      }
    } catch (e) {
      console.error(e);
    }
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
    }
  ];

  const handleChange = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
    
    if (e.target.name === "privacyConsent" && value) {
      setFormError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.privacyConsent) {
      setFormError("Du behöver godkänna informationen om personuppgiftsbehandling innan formuläret kan skickas.");
      return;
    }
    
    setIsLoading(true);

    try {
      const payload = {
        ...formData,
        privacyConsent: formData.privacyConsent ? "accepted" : "rejected"
      };

      const res = await fetch("https://formspree.io/f/mlgkdjop", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "", privacyConsent: false });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Kontakt | MAC Service</title>
        <link rel="canonical" href="https://mackoping.se/contact" />
      </Helmet>
    <main className="contact-page" aria-label="Kontaktsida">

      {/* HERO / HEADER */}
      <header className="page-hero">
        <img src={heroImg} alt="" className="page-hero-bg" fetchpriority="high" loading="eager" aria-hidden="true" />
        <div className="page-hero-overlay"></div>
        <div className="page-hero-container">
          <span className="hero-label">KONTAKTA OSS</span>
          <h1 className="page-hero-title">Vi hjälper dig gärna!</h1>
          <p className="page-hero-subtitle">
            Har du frågor eller vill du ha en kostnadsfri offert? Hör av dig så återkommer vi så snart vi kan.
          </p>
        </div>
      </header>

      {/* CONTACT METHODS */}
      <section
        className="section contact-methods-section"
        aria-label="Kontaktuppgifter"
      >
          <div className="container">
            <h2 className="section-title">Kontakta oss</h2>
            <div className="contact-grid">

              {contactMethods.map((m, i) => {
                const Icon = m.icon;

                return (
                  <motion.a
                    key={i}
                    href={m.link}
                    whileHover={{ y: -4 }}
                    className="contact-card"
                    aria-label={m.title}
                  >
                    <div
                      className="contact-icon"
                      style={{ background: m.color }}
                      aria-hidden="true"
                    >
                      <Icon color="white" size={24} />
                    </div>

                    <div className="contact-info">
                      <h3>{m.title}</h3>
                      <p>{m.content}</p>
                    </div>

                    <div className="contact-arrow">
                      <ChevronRight color="#444" size={20} />
                    </div>
                  </motion.a>
                );
              })}

              {/* LOCATION BOX */}
              <div className="location-box">
                <div className="location-icon">
                  <MapPin size={24} color="#ffffff" />
                </div>
                <div className="location-info">
                  <h3>Verksamma i Köping med omnejd</h3>
                  <p className="text-desktop">Vi utgår från Köping och hjälper privatpersoner och företag med byggnation, fastighetsskötsel och trädgårdsservice i närområdet.</p>
                  <p className="text-mobile">Bygg, fastighet och trädgård.</p>
                </div>
              </div>

            </div>

          </div>
        </section>

      {/* FORM */}
      <section
        className="section contact-form-section"
        aria-label="Kontaktformulär"
      >
        <div className="container">
          <h2 className="section-title">Skicka ett meddelande</h2>
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
                
                <div className="privacy-checkbox-wrapper">
                  <input
                    type="checkbox"
                    id="privacyConsent"
                    name="privacyConsent"
                    checked={formData.privacyConsent}
                    onChange={handleChange}
                    className="privacy-checkbox"
                    required
                  />
                  <label htmlFor="privacyConsent" className="privacy-label">
                    Jag godkänner att MAC Service behandlar mina personuppgifter för att kunna hantera och besvara min förfrågan. Läs vår <Link to="/integritetspolicy">integritetspolicy</Link>.
                  </label>
                </div>
                
                {formError && (
                  <div className="form-error" role="alert">
                    {formError}
                  </div>
                )}

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
          <h2 className="section-title">Hitta oss</h2>
          <div className="map-wrapper">
            <div id="contact-map" className="map">
              <div className="map-image-wrapper">
                <img 
                  src={kopingMap} 
                  alt="Karta över Köping, Västmanland." 
                  className="map-image" 
                  loading="lazy" 
                />
              </div>
            </div>
            
            <div className="map-action-wrapper">
              <a 
                href="https://www.google.com/search?q=MAC+Service+K%C3%B6ping#sv=CCYSvAEKEgoDdGJzEgtscmY6ITNzSUFFPQoYCgFxEhNNQUMgU2VydmljZSBLw7ZwaW5nEAEaEHB2LS9nLzExeWQ5dzIxbmwqIgoNL2cvMTF5ZDl3MjFubCIRCgtNQUMgU2VydmljZRACGAMyVAoTTUFDIFNlcnZpY2UgS8O2cGluZ0iSjcSdsb2AgAhaHxAAEAEYABgBGAIiE21hYyBzZXJ2aWNlIGvDtnBpbmd6B0vDtnBpbmeSAQhoYW5keW1hbhgKIL7g3ZwH"
                target="_blank"
                rel="noopener noreferrer"
                className="btn map-google-btn"
                aria-label="Sök efter MAC Service Köping på Google"
              >
                <Search size={18} aria-hidden="true" />
                Se på Google
              </a>
            </div>
          </div>

        </div>
      </section>

    </main>
    </>
  );
}