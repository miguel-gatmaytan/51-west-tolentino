import RidgeDivider from './RidgeDivider.jsx';

/**
 * PhotoPlaceholder
 * ----------------
 * A styled stand-in for a real photograph. Renders a gradient panel
 * with a faint ridge watermark and a caption describing what image
 * should go here — makes it obvious where to drop in real photos
 * of the property without leaving a broken image or a stock photo.
 *
 * @param {{ label: string, ratio?: 'wide' | 'tall' | 'square', className?: string }} props
 */
export default function PhotoPlaceholder({ label, ratio = 'wide', className = '' }) {
  return (
    <div className={`photo-placeholder photo-placeholder--${ratio} ${className}`}>
      <RidgeDivider tone="on-pine" className="photo-placeholder__ridge" />
      <span className="photo-placeholder__label">{label}</span>
    </div>
  );
}
