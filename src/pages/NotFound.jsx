import { Link } from 'react-router-dom';
import RidgeDivider from '../components/RidgeDivider.jsx';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem',
        background: 'var(--pine)',
        color: 'var(--cream)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'absolute', inset: 'auto 0 0 0', height: '40%' }}>
        <RidgeDivider tone="on-pine" />
      </div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <p
          style={{
            fontFamily: 'var(--font-display, Fraunces)',
            fontSize: '6rem',
            fontWeight: 700,
            color: 'var(--amber)',
            lineHeight: 1,
            marginBottom: '1rem',
          }}
        >
          404
        </p>
        <h1 style={{ color: 'var(--cream)', marginBottom: '1rem' }}>
          Page not found
        </h1>
        <p style={{ color: 'var(--sage-light)', maxWidth: '28rem', marginBottom: '2rem', lineHeight: 1.65 }}>
          Looks like this page wandered off the ridge. Head back home and we'll
          point you in the right direction.
        </p>
        <Link to="/" className="btn btn--amber">
          Back to home
        </Link>
      </div>
    </div>
  );
}
