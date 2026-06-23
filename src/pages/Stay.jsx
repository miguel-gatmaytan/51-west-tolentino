import { Link } from 'react-router-dom';
import { site, rooms, amenities } from '../data/content.js';
import SectionHeading from '../components/SectionHeading.jsx';
import RidgeDivider from '../components/RidgeDivider.jsx';
import { Icon } from '../components/Icons.jsx';

const imageBase = `${import.meta.env.BASE_URL}/`;
const policies = [
  {
    label: 'Check-in',
    value: '2:00 PM',
    note: 'Early check-in on request, subject to availability.',
  },
  {
    label: 'Check-out',
    value: '12:00 NN',
    note: 'Late check-out on request, subject to availability.',
  },
  {
    label: 'Front desk',
    value: '24 hours',
    note: 'Someone is always on duty.',
  },
];

export default function Stay() {
  const roomImages = {
    'Standard Double': `${imageBase}single.jpg`,
    'Twin Room': `${imageBase}double.jpg`,
    'Family Room': `${imageBase}triple.jpg`,
  };

  return (
    <>
      {/* ── Page header ───────────────────────────────────────────── */}
      <div className="page-header">
        <div className="container page-header__inner">
          <p
            className="section-heading__eyebrow"
            style={{ marginBottom: '0.75rem' }}
          >
            Rooms & Amenities
          </p>
          <h1>Where you'll sleep</h1>
          <p
            style={{
              marginTop: '1rem',
              color: 'var(--sage-light)',
              maxWidth: '36rem',
              lineHeight: 1.7,
            }}
          >
            Three straightforward room types — all air-conditioned, all with
            private bathrooms and hot showers. Clean, comfortable, and ready
            when you arrive.
          </p>
        </div>
        <div className="page-header__ridge" aria-hidden="true">
          <RidgeDivider tone="on-pine" />
        </div>
      </div>

      {/* ── Room listings ─────────────────────────────────────────── */}
      <section className="section section--cream">
        <div className="container">
          <div className="rooms-list">
            {rooms.map((room, i) => (
              <div key={room.name} className="room-card">
                <div className="room-card__photo" style={{ height: '220px' }}>
                  <img
                    src={roomImages[room.name] || `${imageBase}51-1/301.jpg`}
                    alt={`Photo — ${room.name}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: 6,
                    }}
                  />
                </div>
                <div className="room-card__info">
                  <div className="room-card__meta">
                    <span className="room-card__badge">{room.sleeps}</span>
                    <span className="room-card__badge">{room.bed}</span>
                  </div>
                  <h2 className="room-card__name">{room.name}</h2>
                  <p className="room-card__desc">{room.description}</p>
                  <ul className="room-card__features">
                    {room.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn btn--amber">
                    Enquire about this room
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── All amenities ─────────────────────────────────────────── */}
      <section className="section section--fog">
        <div className="container">
          <SectionHeading
            eyebrow="Facilities"
            title="Everything that's included"
          >
            <p>
              All amenities are available to registered guests. No hidden
              extras, no resort fees.
            </p>
          </SectionHeading>

          <div className="full-amenities">
            {amenities.map((a) => (
              <div key={a.label} className="amenity-card">
                <Icon name={a.icon} />
                <span>{a.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Policies ──────────────────────────────────────────────── */}
      <section className="section section--pine">
        <div className="container">
          <SectionHeading
            eyebrow="Good to know"
            title="Policies at a glance"
            align="center"
          >
            <p>
              For anything not covered here, the{' '}
              <Link
                to="/faq"
                style={{ color: 'var(--amber)', textDecoration: 'underline' }}
              >
                FAQ page
              </Link>{' '}
              has more detail — or just ask us directly.
            </p>
          </SectionHeading>

          <div className="policies-grid">
            {policies.map((p) => (
              <div
                key={p.label}
                className="card"
                style={{
                  background: 'rgba(247,242,233,0.06)',
                  border: '1.5px solid rgba(247,242,233,0.12)',
                }}
              >
                <div className="policy-item__label">{p.label}</div>
                <div className="policy-item__value">{p.value}</div>
                <div className="policy-item__note">{p.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Book CTA ──────────────────────────────────────────────── */}
      <section className="cta-band">
        <div className="container">
          <h2>Ready to book?</h2>
          <p>
            Contact us directly or book through Agoda — either way we'll make
            sure everything is sorted before you arrive.
          </p>
          <div className="cta-band__actions">
            <Link to="/contact" className="btn btn--amber">
              Contact us directly
            </Link>
            <a
              href={site.agodaUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn--outline-cream"
            >
              Book via Agoda
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
