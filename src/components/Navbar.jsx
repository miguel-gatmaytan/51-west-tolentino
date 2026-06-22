import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { site, navLinks } from '../data/content.js';
import { MenuIcon, CloseIcon } from './Icons.jsx';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu whenever a link is followed.
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand" onClick={closeMenu}>
          <span className="navbar__mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <circle cx="22.5" cy="9.5" r="2.4" className="navbar__mark-sun" />
              <path d="M2 26 L11 12 L15 17 L19.5 9 L30 26 Z" className="navbar__mark-ridge" />
            </svg>
          </span>
          <span className="navbar__wordmark">
            <span className="navbar__name">{site.shortName}</span>
            <span className="navbar__sub">Tolentino Inn</span>
          </span>
        </Link>

        <nav className={`navbar__nav ${isOpen ? 'navbar__nav--open' : ''}`} aria-label="Primary">
          <ul>
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) => (isActive ? 'is-active' : '')}
                  onClick={closeMenu}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="btn btn--small btn--amber navbar__cta" onClick={closeMenu}>
            Plan your stay
          </Link>
        </nav>

        <button
          type="button"
          className="navbar__toggle"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>
  );
}
