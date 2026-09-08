import { useEffect, useState } from "react"
import stugaSmall from "../../assets/Stuga-small.jpg"
import "./Slideshow.css"

export default function Slideshow({
  interval = 3500,
  ariaLabel = "Bildspel med projektbilder från MAC Service"
}) {

  let images = []

  try {
    const modules = import.meta.glob(
      "/src/assets/bilder/*.{png,jpg,jpeg}",
      { eager: true }
    )

    images = Object.values(modules)
      .map(m => m?.default || m)
      .sort()
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

  useEffect(() => {
    if (!images.length) return

    const nextSrc = images[(index + 1) % images.length]
    const preloadImage = new Image()
    preloadImage.src = nextSrc
  }, [index, images])

  if (!images.length) {
    return (
      <div className="slideshow-empty" aria-label="Inga bilder tillgängliga" />
    )
  }

  const currentImage = images[index]
  const isStuga = currentImage && currentImage.includes("Stuga")

  return (
    <div
      className="slideshow"
      role="region"
      aria-label={ariaLabel}
    >

      <img
        key={index}
        className="slide-image"
        src={currentImage}
        srcSet={isStuga ? `${stugaSmall} 400w, ${currentImage} 600w` : undefined}
        sizes={isStuga ? "(max-width: 768px) 400px, 600px" : undefined}
        alt={`Projektbild ${index + 1}`}
        loading="lazy"
        decoding="async"
        width="1600"
        height="1067"
      />

      {/* Screen reader helper */}
      <span className="sr-only">
        Bild {index + 1} av {images.length}
      </span>

    </div>
  )
}