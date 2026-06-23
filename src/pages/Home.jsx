import { Link } from 'react-router-dom';
import { site, stats, values, amenities, rooms } from '../data/content.js';
import RidgeDivider from '../components/RidgeDivider.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { Icon, ArrowIcon, ChevronIcon } from '../components/Icons.jsx';

export default function Home() {
  const roomImages = {
    'Standard Double': '/single.jpg',
    'Twin Room': '/double.jpg',
    'Family Room': '/triple.jpg',
  };

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="hero" aria-label="Welcome">
        <div
          className="hero__bg"
          aria-hidden="true"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/36212727/pexels-photo-36212727.jpeg?_gl=1*12u9b3c*_ga*MTcxMTAwNTQwNi4xNzgxNjI2MzI1*_ga_8JE65Q40S6*czE3ODE2MjYzMjQkbzEkZzEkdDE3ODE2MjYzMzgkajQ2JGwwJGgw')",
            backgroundSize: 'cover',
          }}
        />
        <div className="hero__ridge" aria-hidden="true">
          {/* <RidgeDivider tone="on-pine" /> */}{' '}
        </div>

        <div className="hero__content">
          <p className="hero__eyebrow">Tagaytay City · Cavite · Philippines</p>
          <h1 className="hero__title">
            Cool air, easy nights,
            <br />
            ridge-top mornings.
          </h1>
          <p className="hero__tagline">
            {site.name} sits on Tagaytay's western ridge — close enough to every
            viewpoint and food strip, quiet enough to actually sleep. Simple
            rooms, free parking, always someone on the desk.
          </p>
          <div className="hero__actions">
            <Link to="/contact" className="btn btn--amber">
              Plan your stay
            </Link>
            <Link to="/stay" className="btn btn--outline-cream">
              See rooms
            </Link>
          </div>
        </div>

        <div className="hero__scroll-hint" aria-hidden="true">
          Scroll
          <ChevronIcon />
        </div>
      </section>

      {/* ── Stats bar ─────────────────────────────────────────────── */}
      <div className="stats-bar">
        <div className="stats-bar__inner">
          {stats.map((stat) => (
            <div key={stat.label} className="stats-bar__item">
              <div className="stats-bar__value">{stat.value}</div>
              <div className="stats-bar__label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Why stay here ─────────────────────────────────────────── */}
      <section className="section section--cream">
        <div className="container">
          <SectionHeading
            eyebrow="Why stay here"
            title="A proper basecamp for Tagaytay"
          >
            <p>
              Tagaytay draws people for the cool mountain air, the views over
              Taal Lake, and the food — and 51 West is set up to be the easy,
              comfortable place you come back to at the end of the day.
            </p>
          </SectionHeading>

          <div className="values-grid">
            {values.map((val, i) => (
              <div key={val.title} className="card card--fog">
                <div className="values-grid__number" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="values-grid__title">{val.title}</h3>
                <p className="values-grid__body">{val.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Rooms preview ─────────────────────────────────────────── */}
      <section className="section section--fog">
        <div className="container">
          <SectionHeading eyebrow="Where you'll sleep" title="Rooms">
            <p>
              Three room types, all air-conditioned with private bathrooms, hot
              showers, and free Wi-Fi. Nothing over-designed — just comfortable,
              clean, and fairly priced.
            </p>
          </SectionHeading>

          <div className="rooms-preview">
            {rooms.map((room) => (
              <div key={room.name}>
                <div
                  className="rooms-preview__photo"
                  style={{ height: '200px' }}
                >
                  <img
                    src={roomImages[room.name] || '/51-1/301.jpg'}
                    alt={`Photo — ${room.name}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: 6,
                    }}
                  />
                </div>
                <p className="rooms-preview__meta">
                  {room.bed} · {room.sleeps}
                </p>
                <h3 className="rooms-preview__name">{room.name}</h3>
                <p className="rooms-preview__desc">{room.description}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '2.5rem' }}>
            <Link to="/stay" className="link-arrow">
              Full details & amenities <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Amenities strip ───────────────────────────────────────── */}
      <section className="section section--pine">
        <div className="container">
          <SectionHeading
            eyebrow="What's included"
            title="Amenities"
            align="center"
          >
            <p>
              Everything you'd expect from a well-run small inn — and nothing
              you're paying for that you won't use.
            </p>
          </SectionHeading>

          <div className="amenities-grid">
            {amenities.map((a) => (
              <div key={a.label} className="amenity-item">
                <div className="amenity-item__icon">
                  <Icon name={a.icon} />
                </div>
                <span>{a.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Location teaser ───────────────────────────────────────── */}
      <section className="section section--cream">
        <div className="container">
          <div className="location-teaser">
            <div className="location-teaser__text">
              <SectionHeading
                eyebrow="What's nearby"
                title="Close to everything Tagaytay is known for"
              >
                <p>
                  Tolentino West puts you a short ride from Picnic Grove,
                  People's Park in the Sky, and the Aguinaldo Highway food
                  corridor — while staying far enough from the main strip to
                  actually get a good night's sleep.
                </p>
              </SectionHeading>
              <Link to="/location" className="link-arrow">
                See what's nearby <ArrowIcon />
              </Link>
            </div>

            <div className="location-teaser__photo" style={{ height: '260px' }}>
              <img
                src="https://primer.com.ph/travel/wp-content/uploads/sites/6/2017/11/peoples-park-Cavite-Provincial-Government.jpg"
                alt="Photo — view towards Taal Lake"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: 6,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA band ──────────────────────────────────────────────── */}
      <section className="cta-band">
        <div className="container">
          <h2>Ready to book?</h2>
          <p>
            No online booking portal yet — just get in touch directly and we'll
            sort out the rest. We're usually quick to respond.
          </p>
          <div className="cta-band__actions">
            <Link to="/contact" className="btn btn--amber">
              Contact us
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
