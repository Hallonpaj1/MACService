import { motion } from "framer-motion"
import { Leaf, Hammer, Home as HomeIcon } from "lucide-react"
import "./Services.css"

const ServiceCard = ({ icon: Icon, title, description, delay }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      className="service-card"
      aria-label={`Tjänst: ${title}`}
    >

      <div className="service-icon" aria-hidden="true">
        <Icon size={24} />
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

    </motion.article>
  )
}

export default function Services() {

  const services = [
    {
      icon: Leaf,
      title: "Trädgårdsservice i Köping",
      description:
        "Professionell trädgårdsskötsel, plantering, beskärning och löpande underhåll för privatpersoner och företag.",
    },
    {
      icon: Hammer,
      title: "Byggtjänster & renovering",
      description:
        "Renovering och mindre byggnationer utförda med hög kvalitet och fokus på hållbarhet.",
    },
    {
      icon: HomeIcon,
      title: "Fastighetsskötsel",
      description:
        "Löpande fastighetsskötsel inklusive underhåll, målning, snöröjning och enklare reparationer.",
    },
  ]

  return (
    <section
      className="services-section"
      aria-label="Våra tjänster inom trädgård, bygg och fastighetsskötsel"
    >

      <div className="services-container">

        {/* HEADER (SEO VIKTIGT) */}
        <header className="services-header">

          <span className="services-label">
            Tjänster i Köping
          </span>

          <h2 className="services-title">
            Professionell trädgårdsservice, bygg och fastighetsskötsel
          </h2>

          <p className="services-subtitle">
            Vi erbjuder kompletta lösningar för din fastighet i Köping med omnejd.
          </p>

        </header>

        {/* GRID */}
        <div className="services-grid">
          {services.map((s, i) => (
            <ServiceCard
              key={i}
              icon={s.icon}
              title={s.title}
              description={s.description}
              delay={i * 0.15}
            />
          ))}
        </div>

      </div>
    </section>
  )
}