const discardedModels = [
  {
    name: 'gpt-wrapper-v47.pkl',
    size: '2.3 KB',
    reason: 'Just called the API and added a system prompt. Called it "proprietary."',
  },
  {
    name: 'cat_classifier_final_FINAL.h5',
    size: '847 MB',
    reason: 'Achieved 99.9% accuracy. Labeled everything as cat. Including dogs. And cars.',
  },
  {
    name: 'perfect_model.pt',
    size: '1.2 GB',
    reason: '100% accuracy on training data. 12% on test data. Textbook overfitting.',
  },
  {
    name: 'sentiment_analyzer_v1.onnx',
    size: '340 MB',
    reason: 'Classified "I\'m not happy" as positive. Couldn\'t handle sarcasm either.',
  },
  {
    name: 'resume_ranker.pkl',
    size: '56 MB',
    reason: 'Ranked all resumes equally. Technically unbiased. Practically useless.',
  },
  {
    name: 'chatbot_that_says_no.bin',
    size: '4.1 GB',
    reason: 'Fine-tuned on refusal data. Now refuses to do anything, including inference.',
  },
  {
    name: 'time_series_prophet.joblib',
    size: '23 MB',
    reason: 'Predicted the stock market would "go up or down." Investors were not impressed.',
  },
  {
    name: 'rag_pipeline_v0.tar.gz',
    size: '128 MB',
    reason: 'Retrieved the right documents. Then hallucinated the answer anyway.',
  },
];

export default function TrashWindow() {
  return (
    <div style={{ fontFamily: 'var(--font-system)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
        <span style={{ fontSize: 32 }}>🗑️</span>
        <div>
          <h2 style={{ fontSize: 18, fontWeight: 700 }}>Trash</h2>
          <p style={{ fontSize: 12, color: 'var(--text-tertiary)' }}>
            {discardedModels.length} items — models that didn't make the cut
          </p>
        </div>
      </div>

      <div
        style={{
          marginTop: 16,
          padding: '8px 12px',
          background: '#fef9e7',
          border: '0.5px solid #f0e0a0',
          borderRadius: 6,
          fontSize: 12,
          color: '#8a7030',
          display: 'flex',
          alignItems: 'center',
          gap: 6,
        }}
      >
        <span>⚠️</span>
        Warning: These models were discarded for good reason. Do not restore.
      </div>

      <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 1 }}>
        {[...discardedModels].reverse().map((model, i) => (
          <div
            key={model.name}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 10,
              padding: '10px 8px',
              borderBottom:
                i < discardedModels.length - 1
                  ? '0.5px solid var(--border-light)'
                  : 'none',
              transition: 'background 0.15s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#f8f8f8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
            }}
          >
            <span style={{ fontSize: 20, flexShrink: 0, marginTop: 1 }}>📄</span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-primary)',
                  }}
                >
                  {model.name}
                </span>
                <span
                  style={{
                    fontSize: 11,
                    color: 'var(--text-tertiary)',
                    whiteSpace: 'nowrap',
                    marginLeft: 8,
                  }}
                >
                  {model.size}
                </span>
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: 'var(--text-secondary)',
                  lineHeight: 1.5,
                  marginTop: 2,
                }}
              >
                {model.reason}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: 20,
          textAlign: 'center',
          fontSize: 11,
          color: 'var(--text-tertiary)',
          lineHeight: 1.6,
        }}
      >
        "Not every model can be deployed to production."
        <br />
        — Every ML engineer, probably
      </div>
    </div>
  );
}
