import { useState } from 'react';

const GitHubIcon = () => (
  <svg viewBox="0 0 16 16" width="28" height="28" fill="currentColor" style={{ color: '#1a1a1a' }}>
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
  </svg>
);

const EMAIL = 'datascidiana@gmail.com';

const links = [
  { label: 'GitHub', icon: <GitHubIcon />, url: 'https://github.com/datascidiana', display: '@datascidiana' },
  { label: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/datascidiana/', display: 'Diana Morales' },
  { label: 'Medium', icon: '📝', url: 'https://medium.com/@datascidiana', display: '@datascidiana' },
];

export default function ContactWindow() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div style={{ fontFamily: 'var(--font-system)' }}>
      <div
        style={{
          marginBottom: 20,
          padding: '12px 16px',
          background: '#f8f8f8',
          borderRadius: 8,
          border: '0.5px solid var(--border-light)',
        }}
      >
        <div style={{ display: 'flex', gap: 8, marginBottom: 6, fontSize: 13 }}>
          <span style={{ color: 'var(--text-secondary)', width: 36 }}>To:</span>
          <span style={{ color: 'var(--accent-blue)' }}>{EMAIL}</span>
        </div>
        <div style={{ display: 'flex', gap: 8, fontSize: 13 }}>
          <span style={{ color: 'var(--text-secondary)', width: 36 }}>Subj:</span>
          <span style={{ color: 'var(--text-primary)' }}>Let's connect!</span>
        </div>
      </div>

      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 4 }}>Get in Touch</h2>
      <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 20 }}>
        Feel free to reach out through any of these channels
      </p>

      <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
        {links.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: 16,
              background: 'white',
              border: '0.5px solid var(--border-light)',
              borderRadius: 10,
              textDecoration: 'none',
              transition: 'box-shadow 0.2s, transform 0.15s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'none';
            }}
          >
            <span style={{ fontSize: 28, display: 'flex', alignItems: 'center' }}>{link.icon}</span>
            <div style={{ minWidth: 0 }}>
              <div style={{ color: 'var(--text-primary)', fontSize: 14, fontWeight: 600 }}>{link.label}</div>
              <div style={{ color: 'var(--accent-blue)', fontSize: 12, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {link.display}
              </div>
            </div>
          </a>
        ))}

        {/* Email — copy to clipboard */}
        <button
          onClick={handleCopyEmail}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: 16,
            background: copied ? '#f0fdf4' : 'white',
            border: copied ? '0.5px solid #86efac' : '0.5px solid var(--border-light)',
            borderRadius: 10,
            cursor: 'pointer',
            textAlign: 'left',
            transition: 'box-shadow 0.2s, transform 0.15s, background 0.2s, border-color 0.2s',
            width: '100%',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.transform = 'none';
          }}
        >
          <span style={{ fontSize: 28 }}>{copied ? '✅' : '📧'}</span>
          <div style={{ minWidth: 0 }}>
            <div style={{ color: 'var(--text-primary)', fontSize: 14, fontWeight: 600 }}>
              {copied ? 'Copied!' : 'Email'}
            </div>
            <div style={{ color: copied ? '#16a34a' : 'var(--accent-blue)', fontSize: 12, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {copied ? 'Email copied to clipboard' : EMAIL}
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
