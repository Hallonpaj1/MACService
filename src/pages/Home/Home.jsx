import Hero from "../../components/Hero/Hero";
import Services from "../../components/Services/Services";
import About from "../../components/About/About";
import CTA from "../../components/CTA/CTA";
import GoogleReviews from "../../components/Reviews/GoogleReviews";
import "./Home.css";

export default function Home() {
  return (
    <main className="home">

      <section className="section hero">
        <Hero showStats={false} />
      </section>

      <GoogleReviews />

      <section className="section services">
        <Services />
      </section>

      <section className="section about">
        <About />
      </section>

      <section className="section cta">
        <CTA />
      </section>

    </main>
  );
}