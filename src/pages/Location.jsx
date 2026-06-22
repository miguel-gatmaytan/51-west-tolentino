import { site, nearby, gettingThere } from '../data/content.js';
import SectionHeading from '../components/SectionHeading.jsx';
import RidgeDivider from '../components/RidgeDivider.jsx';
import { ArrowIcon } from '../components/Icons.jsx';

export default function Location() {
  return (
    <>
      {/* ── Page header ───────────────────────────────────────────── */}
      <div className="page-header">
        <div className="container page-header__inner">
          <p className="section-heading__eyebrow" style={{ marginBottom: '0.75rem' }}>
            What's Nearby
          </p>
          <h1>Tagaytay at<br />your doorstep</h1>
          <p style={{ marginTop: '1rem', color: 'var(--sage-light)', maxWidth: '36rem', lineHeight: 1.7 }}>
            From the inn, almost everything Tagaytay is known for is a
            10–20 minute drive. Here's what's around.
          </p>
        </div>
        <div className="page-header__ridge" aria-hidden="true">
          <RidgeDivider tone="on-pine" />
        </div>
      </div>

      {/* ── Nearby places ─────────────────────────────────────────── */}
      <section className="section section--cream">
        <div className="container">
          <SectionHeading eyebrow="Attractions & essentials" title="What's within reach">
            <p>
              Distances and travel times are approximate — traffic and road
              conditions in Tagaytay vary, especially on weekends and holidays.
            </p>
          </SectionHeading>

          <div className="location-categories">
            {nearby.map((cat) => (
              <div key={cat.category}>
                <p className="location-category__label">{cat.category}</p>
                <div className="location-places">
                  {cat.places.map((place) => (
                    <div key={place.name} className="place-card">
                      <h3 className="place-card__name">{place.name}</h3>
                      <p className="place-card__blurb">{place.blurb}</p>
                      <p className="place-card__distance">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1.6}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M12 21s7-5.5 7-11a7 7 0 0 0-14 0c0 5.5 7 11 7 11Z" />
                          <circle cx="12" cy="10" r="2.5" />
                        </svg>
                        {place.distance}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Getting here ──────────────────────────────────────────── */}
      <section className="section section--fog">
        <div className="container">
          <SectionHeading eyebrow="Getting here" title="How to reach us">
            <p>
              We're in Tolentino West, Tagaytay City — accessible by private
              car, bus, or rideshare from Metro Manila.
            </p>
          </SectionHeading>

          <div className="getting-here-list">
            {gettingThere.map((item) => (
              <div key={item.mode} className="getting-here-item">
                <div className="getting-here-item__mode">{item.mode}</div>
                <p className="getting-here-item__details">{item.details}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '2.5rem', padding: '1.25rem 1.5rem', background: 'var(--cream)', borderRadius: '12px', borderLeft: '3px solid var(--amber)' }}>
            <p style={{ fontSize: '0.9rem', color: 'var(--pine-light)', lineHeight: 1.7 }}>
              <strong style={{ color: 'var(--pine)' }}>Tip:</strong> If you're driving up from Manila on a Friday evening or weekend, build in extra time. The Tagaytay–Calamba Road can get congested. Leaving before 8 AM or after 9 PM usually makes the drive much smoother.
            </p>
          </div>
        </div>
      </section>

      {/* ── Map ───────────────────────────────────────────────────── */}
      <section className="section section--cream">
        <div className="container">
          <SectionHeading eyebrow="Find us" title="On the map">
            <p>
              {site.address.line1}, {site.address.line2},{' '}
              {site.address.country}
            </p>
          </SectionHeading>

          <div className="map-embed">
            <iframe
              title="51 West Tolentino Inn on Google Maps"
              src={site.mapEmbedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(site.mapQuery)}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn--outline-pine btn--small"
            >
              Open in Google Maps <ArrowIcon />
            </a>
            <a
              href={`https://waze.com/ul?q=${encodeURIComponent(site.mapQuery)}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn--outline-pine btn--small"
            >
              Open in Waze <ArrowIcon />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
