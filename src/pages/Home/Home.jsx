import { Helmet } from "react-helmet-async";

import Hero from "../../components/Hero/Hero";
import Services from "../../components/Services/Services";
import About from "../../components/About/About";
import CTA from "../../components/CTA/CTA";
import GoogleReviews from "../../components/Reviews/GoogleReviews";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Trädgårdsskötsel i Köping | MAC Service</title>

        <meta
          name="description"
          content="Professionell trädgårdsskötsel i Köping. Vi erbjuder gräsklippning, häckklippning och komplett trädgårdsservice för privatpersoner och företag."
        />

        <meta
          name="keywords"
          content="trädgårdsskötsel köping, trädgårdsservice köping, gräsklippning köping, häckklippning köping"
        />

        <meta name="robots" content="index, follow" />

        <meta name="language" content="sv-SE" />

        <meta name="theme-color" content="#0f9d58" />

        <link rel="canonical" href="https://mackoping.se/" />
      </Helmet>

      <main className="home" aria-label="Startsida">

        {/* HERO */}
        <section className="section hero" aria-label="Introduktion">
          <Hero showStats={false} />
        </section>

        {/* REVIEWS */}
        <section className="section reviews" aria-label="Kundrecensioner">
          <GoogleReviews />
        </section>

        {/* SERVICES */}
        <section className="section services" aria-label="Våra tjänster">
          <Services />
        </section>

        {/* ABOUT */}
        <section className="section about" aria-label="Om oss">
          <About />
        </section>

        {/* CTA */}
        <section className="section cta" aria-label="Kontaktuppmaning">
          <CTA />
        </section>

      </main>
    </>
  );
}