export default function ContactWindow() {
  return (
    <div style={{ fontFamily: 'var(--font-system)' }}>
      {/* Mail compose header */}
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
          <span style={{ color: 'var(--accent-blue)' }}>datascidiana@gmail.com</span>
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

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 10,
        }}
      >
        {[
          { label: 'GitHub', icon: '🐙', url: 'https://github.com/datascidiana', display: '@datascidiana' },
          { label: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/datascidiana/', display: 'Diana Morales' },
          { label: 'Medium', icon: '📝', url: '#', display: '@datascidiana' },
          { label: 'Email', icon: '📧', url: 'mailto:datascidiana@gmail.com', display: 'datascidiana@gmail.com' },
        ].map((link) => (
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
            <span style={{ fontSize: 28 }}>{link.icon}</span>
            <div style={{ minWidth: 0 }}>
              <div style={{ color: 'var(--text-primary)', fontSize: 14, fontWeight: 600 }}>
                {link.label}
              </div>
              <div style={{ color: 'var(--accent-blue)', fontSize: 12, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {link.display}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
