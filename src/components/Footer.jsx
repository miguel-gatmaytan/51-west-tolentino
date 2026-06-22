import { Link } from 'react-router-dom';
import { site, navLinks } from '../data/content.js';
import RidgeDivider from './RidgeDivider.jsx';
import { PhoneIcon, MailIcon, PinIcon, FacebookIcon } from './Icons.jsx';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__divider">
        <RidgeDivider tone="on-cream" />
      </div>

      <div className="footer__main">
        <div className="container footer__grid">
          <div className="footer__col footer__brand">
            <p className="footer__name">{site.name}</p>
            <p className="footer__tagline">{site.tagline}.</p>
            <a
              className="footer__social"
              href={site.facebookUrl}
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon className="footer__social-icon" />
              <span>@{site.facebookHandle}</span>
            </a>
          </div>

          <div className="footer__col">
            <p className="footer__heading">Explore</p>
            <ul className="footer__links">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <p className="footer__heading">Find us</p>
            <ul className="footer__contact">
              <li>
                <PinIcon className="footer__icon" />
                <span>
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                  <br />
                  {site.address.country}
                </span>
              </li>
              <li>
                <PhoneIcon className="footer__icon" />
                <a href={`tel:${site.phone.replace(/\s+/g, '')}`}>{site.phoneDisplay}</a>
              </li>
              <li>
                <MailIcon className="footer__icon" />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <p className="footer__heading">Front desk</p>
            <p className="footer__hours">{site.frontDeskHours}</p>
            <p className="footer__note">
              No booking portal here yet — message us directly and we’ll sort out the rest.
            </p>
            <Link to="/contact" className="btn btn--small btn--outline-cream">
              Get in touch
            </Link>
          </div>
        </div>

        <div className="container footer__bottom">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p className="footer__credit">Tolentino West · Tagaytay City · Cavite</p>
        </div>
      </div>
    </footer>
  );
}
