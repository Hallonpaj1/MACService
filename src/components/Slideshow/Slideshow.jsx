import { useEffect, useState } from "react"
import "./Slideshow.css"

export default function Slideshow({ interval = 3500 }) {
  // Import all images from src/assets/bilder using Vite's glob (eager)
  let images = []
  try {
    const modules = import.meta.glob('/src/assets/bilder/*.{png,jpg,jpeg,webp}', { eager: true })
    images = Object.values(modules).map(m => m && (m.default || m))
  } catch (e) {
    console.error('Slideshow import error:', e)
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

  if (!images.length) return null

  return (
    <div className="slideshow">
      {images.map((src, i) => (
        <div
          key={i}
          className={`slide ${i === index ? 'active' : ''}`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
    </div>
  )
}
