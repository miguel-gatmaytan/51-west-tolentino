import { useState } from 'react';
import { Link } from 'react-router-dom';
import { faqs } from '../data/content.js';
import SectionHeading from '../components/SectionHeading.jsx';
import RidgeDivider from '../components/RidgeDivider.jsx';
import { ChevronIcon } from '../components/Icons.jsx';

function FAQItem({ q, a, id }) {
  const [open, setOpen] = useState(false);
  const triggerId = `faq-trigger-${id}`;
  const panelId = `faq-panel-${id}`;

  return (
    <div className={`faq-item ${open ? 'faq-item--open' : ''}`}>
      <button
        type="button"
        id={triggerId}
        className="faq-item__trigger"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
      >
        {q}
        <ChevronIcon className="faq-item__chevron" />
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className="faq-item__body"
      >
        <div className="faq-item__body-inner">
          <p className="faq-item__answer">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <>
      {/* ── Page header ───────────────────────────────────────────── */}
      <div className="page-header">
        <div className="container page-header__inner">
          <p className="section-heading__eyebrow" style={{ marginBottom: '0.75rem' }}>
            FAQ
          </p>
          <h1>Frequently asked<br />questions</h1>
          <p style={{ marginTop: '1rem', color: 'var(--sage-light)', maxWidth: '36rem', lineHeight: 1.7 }}>
            Answers to the things guests usually ask before they arrive.
            Can't find what you're looking for? Just contact us.
          </p>
        </div>
        <div className="page-header__ridge" aria-hidden="true">
          <RidgeDivider tone="on-pine" />
        </div>
      </div>

      {/* ── FAQ accordion ─────────────────────────────────────────── */}
      <section className="section section--cream">
        <div className="container" style={{ maxWidth: '58rem' }}>
          <SectionHeading eyebrow="All questions" title="Got a question?">
          </SectionHeading>

          <div className="faq-list" role="list">
            {faqs.map((item, i) => (
              <FAQItem key={i} id={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Still have questions ──────────────────────────────────── */}
      <section className="section section--fog">
        <div className="container" style={{ textAlign: 'center', maxWidth: '44rem' }}>
          <SectionHeading
            eyebrow="Still not sure?"
            title="We're happy to answer"
            align="center"
          >
            <p>
              Drop us a message, give us a call, or find us on Facebook.
              We're a small team — expect a real reply, not a bot.
            </p>
          </SectionHeading>
          <Link to="/contact" className="btn btn--amber">
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
}
