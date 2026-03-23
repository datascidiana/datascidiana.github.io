const articles = [
  {
    title: 'How I Build Effective Agentic Systems',
    date: '2025',
    topic: 'Agentic AI',
    url: 'https://medium.com/data-science-collective/how-i-build-effective-agentic-systems-412aed611917?sk=da32365290874d27b942eef0f56f2064',
  },
  {
    title: 'How I Built My First RAG Pipeline',
    date: '2024',
    topic: 'RAG',
    url: 'https://medium.com/data-science/how-i-built-my-first-rag-pipeline-6e178326e3c8?sk=52047168e39299dbd026bb036b32861e',
  },
  {
    title: 'How to Reduce Class Imbalance Bias in AI — Explained with a Riddle',
    date: '2024',
    topic: 'Machine Learning',
    url: 'https://medium.com/data-science/how-to-reduce-class-imbalance-bias-in-ai-explained-with-a-riddle-d85690e0ee48?sk=ad5c91543f07ed3892a0ca9535aaa300',
  },
];

const topicColors: Record<string, string> = {
  'Agentic AI': '#007aff',
  RAG: '#af52de',
  'Machine Learning': '#ff9500',
};

export default function BlogWindow() {
  return (
    <div style={{ fontFamily: 'var(--font-system)' }}>
      {/* Safari-style URL bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '7px 12px',
          marginBottom: 20,
          background: '#f5f5f5',
          borderRadius: 8,
          border: '0.5px solid var(--border-color)',
        }}
      >
        <span style={{ color: 'var(--text-tertiary)', fontSize: 12 }}>🔒</span>
        <a
          href="https://medium.com/@datascidiana"
          target="_blank"
          rel="noopener noreferrer"
          style={{ flex: 1, fontSize: 13, color: 'var(--text-secondary)', textAlign: 'center', textDecoration: 'none' }}
        >
          medium.com/@datascidiana
        </a>
      </div>

      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 4 }}>Blog</h2>
      <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 20 }}>
        Writing about AI, ML, and data science on Medium
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        {articles.map((article, i) => (
          <a
            key={article.title}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '14px 8px',
              textDecoration: 'none',
              borderBottom: i < articles.length - 1 ? '0.5px solid var(--border-light)' : 'none',
              transition: 'background 0.15s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#f8f8f8'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
          >
            <div style={{ flex: 1, marginRight: 12 }}>
              <div style={{ color: 'var(--text-primary)', fontSize: 14, fontWeight: 500, marginBottom: 3 }}>
                {article.title}
              </div>
              <div style={{ fontSize: 12, color: 'var(--text-tertiary)' }}>
                {article.date}
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
              <span
                style={{
                  padding: '3px 10px',
                  fontSize: 11,
                  fontWeight: 500,
                  background: `${topicColors[article.topic] || '#007aff'}15`,
                  borderRadius: 10,
                  color: topicColors[article.topic] || '#007aff',
                  whiteSpace: 'nowrap',
                }}
              >
                {article.topic}
              </span>
              <span style={{ color: 'var(--text-tertiary)', fontSize: 16 }}>›</span>
            </div>
          </a>
        ))}
      </div>

      <div
        style={{
          marginTop: 24,
          textAlign: 'center',
        }}
      >
        <a
          href="https://medium.com/@datascidiana"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '8px 20px',
            fontSize: 13,
            fontWeight: 500,
            background: 'var(--accent-blue)',
            color: 'white',
            borderRadius: 6,
            textDecoration: 'none',
            transition: 'filter 0.15s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.filter = 'brightness(1.1)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.filter = 'none'; }}
        >
          View all articles on Medium
        </a>
      </div>
    </div>
  );
}
