// Branded 404.
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Page not found — Rig Wire' };

export default function NotFound() {
  return (
    <main style={{ maxWidth: 640, margin: '96px auto', padding: '0 16px', textAlign: 'center' }}>
      <p style={{ letterSpacing: '0.12em', fontSize: 12, textTransform: 'uppercase', opacity: 0.7 }}>
        Rig Wire
      </p>
      <h1 style={{ fontSize: 28, margin: '12px 0' }}>This story isn&apos;t available</h1>
      <p style={{ opacity: 0.8, lineHeight: 1.6 }}>
        It may have been updated, merged into a bigger story, or removed by our editors.
      </p>
      <p style={{ marginTop: 24 }}>
        <a href="/">Go to the front page</a>
      </p>
    </main>
  );
}
