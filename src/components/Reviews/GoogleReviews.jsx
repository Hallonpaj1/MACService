import './GoogleReviews.css'
import manualData from '../../data/google_reviews_manual.json'

export default function GoogleReviews({
  googleSearchUrl = 'https://www.google.com/search?q=MAC+Service+Köping+reviews'
}) {

  const reviews = (manualData && manualData.reviews && manualData.reviews.length)
    ? manualData.reviews
    : [
        {
          author: 'Anna S.',
          rating: 5,
          text: 'Snabb och proffsig service. Rekommenderas varmt!',
          date: '2025-09-12'
        }
      ]

  return (
    <section
      className="google-reviews section"
      aria-label="Kundomdömen från Google"
    >
      <div className="container reviews-container">

        {/* SEO HEADER */}
        <h2 className="reviews-title">
          Kundomdömen för MAC Service i Köping
        </h2>

        <p className="reviews-subtitle">
          Läs vad våra kunder säger om vår trädgårdsservice, bygg och fastighetsskötsel
        </p>

        {/* REVIEWS LIST */}
        <div className="reviews-list" role="list">
          {reviews.map((r, i) => (
            <article
              className="review-card"
              key={i}
              role="listitem"
              aria-label={`Omdöme från ${r.author}`}
            >

              <header className="review-header">
                <strong className="review-author">
                  {r.author}
                </strong>

                <span
                  className="review-rating"
                  aria-label={`Betyg ${r.rating || 0} av 5`}
                >
                  {'★'.repeat(r.rating || 0)}
                </span>
              </header>

              <p className="review-text">
                {r.text || r.note || '—'}
              </p>

              <time className="review-date">
                {r.relative_time_description || r.date || ''}
              </time>

            </article>
          ))}
        </div>

        {/* CTA (SEO + trust signal) */}
        <a
          className="reviews-cta"
          href={googleSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Öppna fler Google recensioner i ny flik"
        >
          Se fler omdömen på Google
        </a>

      </div>
    </section>
  )
}