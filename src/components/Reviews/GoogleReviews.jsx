import './GoogleReviews.css'
import manualData from '../../data/google_reviews_manual.json'

export default function GoogleReviews({ googleSearchUrl = 'https://www.google.com/search?q=MAC+Service+K%C3%B6ping+reviews' }) {

  const reviews = (manualData && manualData.reviews && manualData.reviews.length)
    ? manualData.reviews
    : [
      { author: 'Anna S.', rating: 5, text: 'Snabb och proffsig service. Rekommenderas varmt!', date: '2025-09-12' }
    ]

  return (
    <section className="google-reviews section">
      <div className="container reviews-container">
        <h2 className="reviews-title">Google Omdömen för MAC Service</h2>

        <div className="reviews-list">
          {reviews.map((r, i) => (
            <article className="review-card" key={i}>
              <div className="review-header">
                <strong className="review-author">{r.author}</strong>
                <span className="review-rating">{Array.from({ length: r.rating || 0 }).map((_, idx) => '★').join('')}</span>
              </div>
              <p className="review-text">{r.text || r.note || '—'}</p>
              <div className="review-date">{r.relative_time_description || r.date || ''}</div>
            </article>
          ))}
        </div>

        <a className="reviews-cta" href={googleSearchUrl} target="_blank" rel="noreferrer">Se fler omdömen på Google</a>
      </div>
    </section>
  )
}
