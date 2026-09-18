import { useEffect } from "react";
import { motion } from "framer-motion";
import heroImg from "../../assets/hero-privacy.jpg";
import "./PrivacyPolicy.css";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="privacy-page" aria-label="Integritetspolicy">

      {/* HERO */}
      <header className="page-hero">
        <img src={heroImg} alt="" className="page-hero-bg" fetchpriority="high" loading="eager" aria-hidden="true" />
        <div className="page-hero-overlay"></div>
        <div className="page-hero-container">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="page-hero-title"
          >
            Integritetspolicy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="page-hero-subtitle"
          >
            Information om hur vi hanterar dina personuppgifter.
          </motion.p>
        </div>
      </header>

      {/* CONTENT */}
      <section className="section privacy-section" aria-label="Policyinnehåll">
        <div className="container">
          <h2 className="section-title">Så hanterar vi dina personuppgifter</h2>
          <div className="privacy-container">

            <div className="privacy-content">
              <p>
                Denna integritetspolicy beskriver hur vi samlar in, använder och hanterar personuppgifter via vår webbplats.
              </p>

              <h2>Personuppgiftsansvarig</h2>
              <p>
                Ansvarig för behandlingen av personuppgifter på denna webbplats är:
              </p>
              <ul>
                <li>Enoksen Collin, Andreas</li>
                <li>Enskild näringsidkare</li>
                <li>Säte: Köping, Västmanlands län</li>
                <li>Organisationsnummer: 940525-XXXX</li>
                <li>E-post: <a href="mailto:collinstradgardsservice@outlook.com">collinstradgardsservice@outlook.com</a></li>
              </ul>

              <h2>Vilka personuppgifter vi samlar in</h2>
              <p>
                När du kontaktar oss via kontaktformuläret på vår webbplats samlar vi in följande uppgifter som du själv väljer att lämna:
              </p>
              <ul>
                <li>Namn</li>
                <li>E-postadress</li>
                <li>Meddelande (fritext som kan innehålla personuppgifter)</li>
              </ul>

              <p>
                Formuläret loggar även ditt samtycke (privacyConsent: "accepted") när du godkänner villkoren.
              </p>

              <h2>Ändamål</h2>
              <p>
                Dina uppgifter behandlas enbart i syfte att:
              </p>
              <ul>
                <li>Ta emot och hantera kontaktförfrågningar</li>
                <li>Kunna svara på dina meddelanden</li>
                <li>Vid behov kunna följa upp en förfrågan</li>
              </ul>

              <h2>Formspree</h2>
              <p>
                Kontaktformuläret skickas via den externa tjänsten Formspree. Formspree används för att ta emot och hantera formulärinskick på vår webbplats. Läs mer på deras officiella webbplats:{" "}
                <a href="https://formspree.io/" target="_blank" rel="noopener noreferrer">
                  https://formspree.io/
                </a>
              </p>

              <h2>Rättslig grund</h2>
              <p>
                Vi behandlar dina personuppgifter för att kunna hantera och besvara din kontaktförfrågan. Den rättsliga grunden är avtal, eftersom behandlingen kan vara nödvändig för att vidta åtgärder på din begäran inför ett eventuellt avtal.
              </p>

              <h2>Lagring</h2>
              <p>
                Personuppgifterna sparas så länge det behövs för att hantera och följa upp din kontaktförfrågan och därefter endast så länge det finns ett berättigat behov av att behålla uppgifterna. Uppgifter som inte längre behövs raderas omgående.
              </p>

              <h2>Den registrerades rättigheter</h2>
              <p>
                Enligt gällande dataskyddslagstiftning har du i regel rätt att:
              </p>
              <ul>
                <li>Begära tillgång till dina personuppgifter</li>
                <li>Begära rättelse av felaktiga uppgifter</li>
                <li>Begära radering när förutsättningarna är uppfyllda</li>
                <li>Invända mot viss behandling när det är tillämpligt</li>
              </ul>

              <h2>Kontakt</h2>
              <p>
                Om du vill utöva någon av dessa rättigheter eller har frågor om personuppgifter och integritet, vänligen kontakta oss på: <a href="mailto:collinstradgardsservice@outlook.com">collinstradgardsservice@outlook.com</a>.
              </p>

              <h2>Ändringar</h2>
              <p>
                Denna integritetspolicy kan komma att uppdateras vid behov. Den senaste versionen publiceras alltid på denna sida.
              </p>

              <div className="privacy-meta">
                Senast uppdaterad: 2026-09-19
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
