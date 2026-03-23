export default function ResumeWindow() {
  const base = import.meta.env.BASE_URL;
  const resumeUrl = `${base}resume.pdf#toolbar=1&navpanes=0&view=FitH`;

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
    </div>
  );
}
