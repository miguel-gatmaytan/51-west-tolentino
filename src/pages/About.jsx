import { Link } from 'react-router-dom';
import { site } from '../data/content.js';
import SectionHeading from '../components/SectionHeading.jsx';
import RidgeDivider from '../components/RidgeDivider.jsx';
import { Icon, ArrowIcon } from '../components/Icons.jsx';

const highlights = [
  {
    icon: 'leaf',
    title: 'Family-run',
    body: 'A small, owner-operated property — not a chain, not a franchise. The people at the front desk actually know the area.',
  },
  {
    icon: 'clock',
    title: 'Always staffed',
    body: "Someone is always on duty, day or night. If something comes up, you won't be left waiting.",
  },
  {
    icon: 'map',
    title: 'Local knowledge',
    body: 'Ask us where to watch the sunset, which restaurants are worth the drive, or how to get to Taal Volcano Island.',
  },
  {
    icon: 'parking',
    title: 'Free parking',
    body: 'Private on-site parking at no extra charge — one less thing to worry about on the drive up from Manila.',
  },
];

export default function About() {
  return (
    <>
      {/* ── Page header ───────────────────────────────────────────── */}
      <div className="page-header">
        <div className="container page-header__inner">
          <p
            className="section-heading__eyebrow"
            style={{ marginBottom: '0.75rem' }}
          >
            About
          </p>
          <h1>
            A small inn on
            <br />
            the western ridge
          </h1>
          <p
            style={{
              marginTop: '1rem',
              color: 'var(--sage-light)',
              maxWidth: '36rem',
              lineHeight: 1.7,
            }}
          >
            51 West Tolentino Inn is a family-run guesthouse in Tolentino West,
            Tagaytay City — positioned on the quieter western side of the ridge,
            away from the busiest strips.
          </p>
        </div>
        <div className="page-header__ridge" aria-hidden="true">
          <RidgeDivider tone="on-pine" />
        </div>
      </div>

      {/* ── Story ─────────────────────────────────────────────────── */}
      <section className="section section--cream">
        <div className="container">
          <div className="about-split">
            <div className="about-split__text">
              <SectionHeading
                eyebrow="Our story"
                title="Built for guests, run by family"
              ></SectionHeading>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  color: 'var(--pine-light)',
                  lineHeight: 1.75,
                }}
              >
                <p>
                  {site.name} started as a simple idea: create a clean,
                  comfortable place to stay in Tagaytay that treats guests like
                  people — not booking numbers. The inn sits in Tolentino West,
                  on the ridge's quieter western flank, where the cool mountain
                  air arrives early in the morning and the noise of the main
                  highway fades out in the evening.
                </p>
                <p>
                  We're not a resort or a boutique hotel with a concept behind
                  it. We're a well-kept small inn with friendly staff, good
                  Wi-Fi, reliable hot water, and free parking — the practical
                  things that make a difference when you've been driving since
                  Manila.
                </p>
                <p>
                  Tagaytay gets busy on weekends and holidays, and it can be
                  hard to find a place that's close to everything without being
                  in the middle of everything. That's the gap we're trying to
                  fill.
                </p>
              </div>
              <div style={{ marginTop: '2rem' }}>
                <Link to="/contact" className="link-arrow">
                  Get in touch <ArrowIcon />
                </Link>
              </div>
            </div>

            <div className="about-split__photo" style={{ height: '360px' }}>
              <img
                src="/lobby.jpg"
                alt="Photo — inn exterior / entrance"
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

      {/* ── Highlights ────────────────────────────────────────────── */}
      <section className="section section--fog">
        <div className="container">
          <SectionHeading
            eyebrow="What makes us different"
            title="What you can rely on"
          >
            <p>
              Small properties live or die on the details. Here's what we focus
              on.
            </p>
          </SectionHeading>

          <div className="highlights-grid">
            {highlights.map((h) => (
              <div key={h.title} className="highlight-card">
                <Icon name={h.icon} className="highlight-card__icon" />
                <h3 className="highlight-card__title">{h.title}</h3>
                <p className="highlight-card__body">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Second photo split ────────────────────────────────────── */}
      <section className="section section--cream">
        <div className="container">
          <div className="about-split about-split--reverse">
            <div className="about-split__text">
              <SectionHeading
                eyebrow="Where we are"
                title="Tolentino West, Tagaytay City"
              ></SectionHeading>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  color: 'var(--pine-light)',
                  lineHeight: 1.75,
                }}
              >
                <p>
                  Tagaytay City sits on a ridge roughly 700 metres above sea
                  level, about 60 kilometres south of Metro Manila. The city is
                  divided into barangays along the ridge — Tolentino West, where
                  we're located, is on the calmer western end, away from the
                  most heavily trafficked tourist spots.
                </p>
                <p>
                  The cool air, the views over Taal Lake, and the concentration
                  of good restaurants along the highway are what bring most
                  people here. From the inn, you can reach Picnic Grove in under
                  15 minutes by car, and the Olivarez Plaza area (transport hub
                  and shopping) in under 10.
                </p>
              </div>
              <div style={{ marginTop: '2rem' }}>
                <Link to="/location" className="link-arrow">
                  Explore what's nearby <ArrowIcon />
                </Link>
              </div>
            </div>

            <div className="about-split__photo" style={{ height: '240px' }}>
              <img
                src="/outdoor.jpg"
                alt="Photo — Taal Lake / ridge view"
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

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="cta-band">
        <div className="container">
          <h2>Come see for yourself</h2>
          <p>
            Drop us a message or give us a call — we'll let you know what's
            available and what to expect.
          </p>
          <div className="cta-band__actions">
            <Link to="/contact" className="btn btn--amber">
              Contact us
            </Link>
            <a
              href={site.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn--outline-cream"
            >
              Find us on Facebook
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
