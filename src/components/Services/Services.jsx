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
        <Icon size={32} strokeWidth={1.5} />
      </div>

      <div className="service-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

    </motion.article>
  )
}

export default function Services() {

  const services = [
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
    {
      icon: Leaf,
      title: "Trädgårdsservice",
      description:
        "Professionell trädgårdsskötsel, plantering, beskärning och löpande underhåll för privatpersoner och företag.",
    },
  ]

  return (
    <section
      className="services-section"
      aria-label="Våra tjänster inom bygg, fastighet och trädgård"
    >

      <div className="services-container">

        {/* LEFT COLUMN: HEADER */}
        <header className="services-header">
          <span className="services-label">
            VAD VI HJÄLPER DIG MED
          </span>
          <h2 className="services-title">
            Vi erbjuder byggnation, fastighetsskötsel och trädgårdsservice.
          </h2>

        </header>

        {/* RIGHT COLUMN: GRID */}
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