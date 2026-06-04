import { useEffect, useState } from "react"
import "./Slideshow.css"

export default function Slideshow({
  interval = 3500,
  ariaLabel = "Bildspel med projektbilder från MAC Service"
}) {

  let images = []

  try {
    const modules = import.meta.glob(
      "/src/assets/bilder/*.{png,jpg,jpeg,webp}",
      { eager: true }
    )

    images = Object.values(modules).map(m => m?.default || m)
  } catch (e) {
    console.error("Slideshow import error:", e)
    images = []
  }

  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!images.length) return

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, interval)

    return () => clearInterval(id)
  }, [images.length, interval])

  if (!images.length) {
    return (
      <div className="slideshow-empty" aria-label="Inga bilder tillgängliga" />
    )
  }

  return (
    <div
      className="slideshow"
      role="region"
      aria-label={ariaLabel}
    >

      {images.map((src, i) => (
        <div
          key={i}
          className={`slide ${i === index ? "active" : ""}`}
          style={{ backgroundImage: `url(${src})` }}
          role="img"
          aria-hidden={i !== index}
          aria-label={`Projektbild ${i + 1}`}
        />
      ))}

      {/* Screen reader helper */}
      <span className="sr-only">
        Bild {index + 1} av {images.length}
      </span>

    </div>
  )
}