/**
 * SectionHeading
 * --------------
 * Consistent "eyebrow label + heading + intro paragraph" block used
 * at the top of most sections and pages.
 *
 * @param {{
 *   eyebrow?: string,
 *   title: string,
 *   children?: React.ReactNode,
 *   align?: 'left' | 'center',
 *   as?: 'h1' | 'h2' | 'h3',
 * }} props
 */
export default function SectionHeading({ eyebrow, title, children, align = 'left', as = 'h2' }) {
  const Heading = as;
  return (
    <div className={`section-heading section-heading--${align}`}>
      {eyebrow && <p className="section-heading__eyebrow">{eyebrow}</p>}
      <Heading className="section-heading__title">{title}</Heading>
      {children && <div className="section-heading__intro">{children}</div>}
    </div>
  );
}
