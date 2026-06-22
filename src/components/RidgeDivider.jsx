/**
 * RidgeDivider
 * ------------
 * The site's signature graphic: a layered silhouette of Tagaytay's
 * ridge with Taal Volcano's cone-in-lake profile on the horizon.
 * Used in the hero, as a section divider, and in the footer.
 *
 * @param {{
 *   tone?: 'on-pine' | 'on-cream',
 *   flip?: boolean,
 *   className?: string,
 * }} props
 */
export default function RidgeDivider({ tone = 'on-cream', flip = false, className = '' }) {
  return (
    <svg
      className={`ridge ridge--${tone} ${flip ? 'ridge--flip' : ''} ${className}`}
      viewBox="0 0 1440 300"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* back ridge */}
      <path
        className="ridge__layer ridge__layer--1"
        d="M0,170 C140,140 260,195 400,165 C540,135 660,185 800,160 C940,135 1080,185 1220,155 C1320,135 1400,165 1440,150 L1440,300 L0,300 Z"
      />

      {/* Taal Lake */}
      <ellipse className="ridge__lake" cx="1010" cy="222" rx="150" ry="13" />

      {/* Taal Volcano cone, with a small crater notch near the apex */}
      <path
        className="ridge__volcano"
        d="M885,232 L985,98 L1003,116 L1021,98 L1125,232 Z"
      />

      {/* mid ridge */}
      <path
        className="ridge__layer ridge__layer--2"
        d="M0,210 C160,185 320,235 480,205 C610,180 740,230 880,222 C940,210 1060,210 1120,224 C1240,198 1340,232 1440,205 L1440,300 L0,300 Z"
      />

      {/* front ridge */}
      <path
        className="ridge__layer ridge__layer--3"
        d="M0,250 C150,220 300,270 460,238 C620,205 800,262 980,232 C1140,206 1300,252 1440,228 L1440,300 L0,300 Z"
      />
    </svg>
  );
}
