import { useState } from 'react';
import { site } from '../data/content.js';
import SectionHeading from '../components/SectionHeading.jsx';
import RidgeDivider from '../components/RidgeDivider.jsx';
import { PhoneIcon, MailIcon, PinIcon, FacebookIcon } from '../components/Icons.jsx';

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  inquiry: 'general',
  checkIn: '',
  checkOut: '',
  guests: '2',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Static site — no back-end. In a real deployment you'd wire this
    // up to a service like Formspree, Netlify Forms, or EmailJS.
    setSubmitted(true);
  };

  return (
    <>
      {/* ── Page header ───────────────────────────────────────────── */}
      <div className="page-header">
        <div className="container page-header__inner">
          <p className="section-heading__eyebrow" style={{ marginBottom: '0.75rem' }}>
            Contact
          </p>
          <h1>Get in touch</h1>
          <p style={{ marginTop: '1rem', color: 'var(--sage-light)', maxWidth: '36rem', lineHeight: 1.7 }}>
            Whether you want to check availability, ask a question, or make
            a direct booking — we're reachable here, by phone, or on Facebook.
          </p>
        </div>
        <div className="page-header__ridge" aria-hidden="true">
          <RidgeDivider tone="on-pine" />
        </div>
      </div>

      {/* ── Contact layout ────────────────────────────────────────── */}
      <section className="section section--pine">
        <div className="container">
          <div className="contact-layout">

            {/* Contact info */}
            <div className="contact-info">
              <SectionHeading eyebrow="Reach us" title="Direct contact">
              </SectionHeading>

              <div className="contact-info-item">
                <div className="contact-info-item__icon">
                  <PinIcon />
                </div>
                <div>
                  <p className="contact-info-item__label">Address</p>
                  <p className="contact-info-item__value">
                    {site.address.line1}<br />
                    {site.address.line2}<br />
                    {site.address.country}
                  </p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-item__icon">
                  <PhoneIcon />
                </div>
                <div>
                  <p className="contact-info-item__label">Phone</p>
                  <p className="contact-info-item__value">
                    <a href={`tel:${site.phone.replace(/\s+/g, '')}`}>
                      {site.phoneDisplay}
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-item__icon">
                  <MailIcon />
                </div>
                <div>
                  <p className="contact-info-item__label">Email</p>
                  <p className="contact-info-item__value">
                    <a href={`mailto:${site.email}`}>{site.email}</a>
                  </p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-item__icon">
                  <FacebookIcon />
                </div>
                <div>
                  <p className="contact-info-item__label">Facebook</p>
                  <p className="contact-info-item__value">
                    <a
                      href={site.facebookUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      @{site.facebookHandle}
                    </a>
                    <br />
                    <span style={{ fontSize: '0.82rem', color: 'var(--sage-light)' }}>
                      Fastest response — we check messages daily.
                    </span>
                  </p>
                </div>
              </div>

              <div style={{ marginTop: '1rem', padding: '1.25rem', background: 'rgba(247,242,233,0.07)', borderRadius: '12px', borderLeft: '3px solid var(--amber)' }}>
                <p style={{ color: 'var(--sage-light)', fontSize: '0.88rem', lineHeight: 1.65 }}>
                  <strong style={{ color: 'var(--cream)' }}>Front desk:</strong>{' '}
                  {site.frontDeskHours}. You can also call any time —
                  if it rings out, try again and someone will pick up.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="contact-form">
              {submitted ? (
                <div className="form-success">
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
                    <circle cx="12" cy="12" r="9" />
                    <path d="M8 12.5l3 3 5-5" />
                  </svg>
                  <h3>Message sent!</h3>
                  <p>
                    Thanks for reaching out. We'll get back to you as soon
                    as we can — usually within a day.
                  </p>
                  <button
                    type="button"
                    className="btn btn--outline-pine btn--small"
                    onClick={() => {
                      setForm(initialForm);
                      setSubmitted(false);
                    }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h2 className="contact-form__title">Send us a message</h2>
                  <p className="contact-form__subtitle">
                    Fill in as much or as little as you like — we'll follow up.
                  </p>

                  <div className="form-row">
                    <div className="form-field">
                      <label className="form-field__label" htmlFor="firstName">
                        First name
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        className="form-field__input"
                        placeholder="Maria"
                        value={form.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-field">
                      <label className="form-field__label" htmlFor="lastName">
                        Last name
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        className="form-field__input"
                        placeholder="Santos"
                        value={form.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-field">
                      <label className="form-field__label" htmlFor="email">
                        Email address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="form-field__input"
                        placeholder="maria@example.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-field">
                      <label className="form-field__label" htmlFor="phone">
                        Phone (optional)
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="form-field__input"
                        placeholder="+63 9XX XXX XXXX"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label className="form-field__label" htmlFor="inquiry">
                      Type of enquiry
                    </label>
                    <select
                      id="inquiry"
                      name="inquiry"
                      className="form-field__select"
                      value={form.inquiry}
                      onChange={handleChange}
                    >
                      <option value="general">General question</option>
                      <option value="booking">Booking / availability</option>
                      <option value="group">Group or event</option>
                      <option value="other">Something else</option>
                    </select>
                  </div>

                  {form.inquiry === 'booking' && (
                    <div className="form-row">
                      <div className="form-field">
                        <label className="form-field__label" htmlFor="checkIn">
                          Check-in date
                        </label>
                        <input
                          id="checkIn"
                          name="checkIn"
                          type="date"
                          className="form-field__input"
                          value={form.checkIn}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-field">
                        <label className="form-field__label" htmlFor="checkOut">
                          Check-out date
                        </label>
                        <input
                          id="checkOut"
                          name="checkOut"
                          type="date"
                          className="form-field__input"
                          value={form.checkOut}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  )}

                  {form.inquiry === 'booking' && (
                    <div className="form-field">
                      <label className="form-field__label" htmlFor="guests">
                        Number of guests
                      </label>
                      <select
                        id="guests"
                        name="guests"
                        className="form-field__select"
                        value={form.guests}
                        onChange={handleChange}
                      >
                        {['1', '2', '3', '4', '5+'].map((n) => (
                          <option key={n} value={n}>{n} {n === '1' ? 'guest' : 'guests'}</option>
                        ))}
                      </select>
                    </div>
                  )}

                  <div className="form-field">
                    <label className="form-field__label" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-field__textarea"
                      placeholder="Anything specific you'd like to know or mention…"
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>

                  <button type="submit" className="btn btn--amber form-submit">
                    Send message
                  </button>

                  <p className="form-note">
                    This form is a demo on the static site — in the live version
                    it will deliver your message directly to our inbox.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
