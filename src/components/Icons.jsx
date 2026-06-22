/**
 * Small, hand-drawn-feeling line icons used throughout the site.
 * Kept as inline SVG (no icon-library dependency) so the project
 * stays lightweight and easy to restyle via currentColor.
 */

const base = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

/** Paths for amenity / category icons, keyed by name. */
const paths = {
  wifi: (
    <>
      <path d="M2 8.5c5.5-5 14.5-5 20 0" />
      <path d="M5 12c3.5-3 10.5-3 14 0" />
      <path d="M8 15.5c2-1.7 6-1.7 8 0" />
      <circle cx="12" cy="19" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  snow: (
    <>
      <path d="M12 2v20M4.5 6 19.5 18M19.5 6 4.5 18" />
      <path d="M12 2 9.5 4.5M12 2l2.5 2.5M12 22l-2.5-2.5M12 22l2.5-2.5" />
    </>
  ),
  parking: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M9 16V8h3.2a2.6 2.6 0 0 1 0 5.2H9" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  leaf: (
    <>
      <path d="M4 20c8 1 15-5 16-16-11 1-17 8-16 16Z" />
      <path d="M5 19c2.5-3.5 6-7 11-9.5" />
    </>
  ),
  shower: (
    <>
      <path d="M6 9a6 6 0 0 1 11.9-1H19a2 2 0 0 1 0 4H6a3 3 0 0 1 0-3Z" />
      <path d="M7 16v1M10 16v2M13 16v1M16 16v2" />
    </>
  ),
  tv: (
    <>
      <rect x="3" y="5" width="18" height="12" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </>
  ),
  broom: (
    <>
      <path d="M19 4 9.5 13.5" />
      <path d="M9.5 13.5 4 19l2-2 .5-3.5L9.5 13.5Z" />
      <path d="M5 21l2.5-2.5" />
    </>
  ),
  map: (
    <>
      <path d="M9 4 4 6v14l5-2 6 2 5-2V4l-5 2-6-2Z" />
      <path d="M9 4v14M15 6v14" />
    </>
  ),
  noSmoking: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M5 5l14 14" />
      <path d="M5 14h7a2 2 0 0 0 0-4" />
      <path d="M13 16h6" />
    </>
  ),
  mountain: (
    <>
      <path d="M2 20 9 9l3 4 3.5-5L22 20Z" />
      <circle cx="17.5" cy="6" r="1.4" fill="currentColor" stroke="none" />
    </>
  ),
  ticket: (
    <>
      <path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4Z" />
      <path d="M10 6v12" strokeDasharray="2 2" />
    </>
  ),
  coffee: (
    <>
      <path d="M4 8h13v4a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5Z" />
      <path d="M17 9h1.5a2 2 0 0 1 0 4H17" />
      <path d="M7 3.5c0 .8.8 1-.2 2M11 3.5c0 .8.8 1-.2 2" />
    </>
  ),
  bag: (
    <>
      <path d="M6 8h12l1 12H5L6 8Z" />
      <path d="M9 8a3 3 0 0 1 6 0" />
    </>
  ),
};

/**
 * Renders one of the named amenity / category icons.
 * @param {{ name: keyof typeof paths, className?: string }} props
 */
export function Icon({ name, className }) {
  const content = paths[name];
  if (!content) return null;
  return (
    <svg className={`icon ${className || ''}`} {...base} aria-hidden="true">
      {content}
    </svg>
  );
}

export function MenuIcon({ className }) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

export function CloseIcon({ className }) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <path d="M5 5l14 14M19 5 5 19" />
    </svg>
  );
}

export function ChevronIcon({ className }) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function ArrowIcon({ className }) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function PhoneIcon({ className }) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <path d="M5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a1.5 1.5 0 0 1-1.6 1.5A16 16 0 0 1 3.5 5.6 1.5 1.5 0 0 1 5 4Z" />
    </svg>
  );
}

export function MailIcon({ className }) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 6.5 12 13l9-6.5" />
    </svg>
  );
}

export function PinIcon({ className }) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <path d="M12 21s7-5.5 7-11a7 7 0 0 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function FacebookIcon({ className }) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <path d="M14 21v-7h2.5l.5-3H14V9c0-.9.3-1.5 1.7-1.5H17V4.8c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2V11H8v3h2.5v7Z" />
    </svg>
  );
}
