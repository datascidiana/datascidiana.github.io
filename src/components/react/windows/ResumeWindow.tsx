export default function ResumeWindow() {
  const base = import.meta.env.BASE_URL;
  const resumeUrl = `${base}resume.pdf#toolbar=1&navpanes=0&view=FitH`;
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        gap: 12,
        fontFamily: 'var(--font-system)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ fontSize: 18, fontWeight: 700 }}>Diana Morales — Resume</h2>
        <a
          href={resumeUrl}
          download
          style={{
            padding: '6px 16px',
            fontSize: 13,
            fontFamily: 'var(--font-system)',
            fontWeight: 500,
            background: 'var(--accent-blue)',
            border: 'none',
            borderRadius: 6,
            color: 'white',
            textDecoration: 'none',
            cursor: 'pointer',
            transition: 'filter 0.15s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.filter = 'brightness(1.1)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.filter = 'none'; }}
        >
          Download PDF
        </a>
      </div>

      {isMobile ? (
        <div style={{ textAlign: 'center', padding: '40px 20px', color: 'var(--text-secondary)', fontSize: 13 }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>📄</div>
          <p style={{ marginBottom: 20 }}>PDF preview isn't available on mobile.<br />Download to view the full resume.</p>
          <a
            href={`${base}resume.pdf`}
            download="Diana_Morales_Resume.pdf"
            style={{
              display: 'inline-block',
              padding: '10px 24px',
              background: 'var(--accent-blue)',
              color: 'white',
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            ↓ Download Resume
          </a>
        </div>
      ) : (
        <iframe
          src={resumeUrl}
          title="Resume"
          style={{
            flex: 1,
            minHeight: 400,
            border: '0.5px solid var(--border-light)',
            borderRadius: 8,
            background: 'white',
          }}
        />
      )}
    </div>
  );
}
