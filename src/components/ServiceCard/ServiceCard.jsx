import { motion } from "framer-motion"
import "../ServiceCard/ServiceCard.css"

export default function ServiceCard({ icon: Icon, title, description, index }) {

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="service-card"
      aria-label={`Tjänst: ${title}`}
    >

      <div className="relative z-10">

        {/* ICON */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="service-icon"
          aria-hidden="true"
        >
          <Icon className="w-8 h-8 text-white" />
        </motion.div>

        {/* TITLE (SEO VIKTIG) */}
        <h3 className="service-title">
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p className="service-description">
          {description}
        </p>

      </div>

      {/* DECORATION */}
      <div className="service-accent" aria-hidden="true" />

    </motion.article>
  )
}