export default function AboutWindow() {
  return (
    <div style={{ maxWidth: 650 }}>
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: '50%',
            background: '#f0f0f0',
            border: '3px solid white',
            boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 48,
            flexShrink: 0,
          }}
        >
          👩‍💻
        </div>

        <div style={{ flex: 1, minWidth: 250 }}>
          <h2
            style={{
              fontSize: 24,
              fontWeight: 700,
              marginBottom: 4,
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-system)',
            }}
          >
            Diana Morales
          </h2>
          <p
            style={{
              fontSize: 14,
              color: 'var(--text-secondary)',
              marginBottom: 16,
              fontFamily: 'var(--font-system)',
            }}
          >
            AI Scientist · Chicago, IL
          </p>
          <p
            style={{
              color: 'var(--text-primary)',
              lineHeight: 1.7,
              fontSize: 13,
              fontFamily: 'var(--font-system)',
            }}
          >
            AI Scientist specializing in agentic AI systems, large language models,
            and production machine learning. I lead cross-functional AI initiatives
            from discovery through prototype to adoption — building systems like
            autonomous AI agents with LangGraph, fine-tuning LLMs for specialized
            domains, and architecting knowledge graph platforms that power
            enterprise AI workflows.
          </p>
        </div>
      </div>

      {/* Experience */}
      <div
        style={{
          marginTop: 24,
          borderTop: '0.5px solid var(--border-light)',
          paddingTop: 20,
        }}
      >
        <h3
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: 'var(--text-secondary)',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            marginBottom: 12,
            fontFamily: 'var(--font-system)',
          }}
        >
          Experience
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            {
              role: 'Independent Research & Development',
              company: '',
              period: '',
              bullets: [
                'Architected an autonomous AI penetration testing agent using LangGraph with human-in-the-loop approval gates, MITRE ATT\u0026CK mapping, and crash-safe state persistence',
                'Trained and deployed custom fine-tuned LLMs using QLoRA on NVIDIA DGX Spark via vLLM for cybersecurity applications',
                'Built an automated knowledge graph platform on Neo4j ingesting 7+ data sources with vector similarity retrieval for contextual augmentation',
              ],
            },
            {
              role: 'Innovation AI Scientist',
              company: 'Wex',
              period: 'Jun 2024 – Present',
              bullets: [
                'Led cross-functional AI initiatives from discovery to prototype to adoption, de-risking investments in emerging opportunities',
                'Achieved 97% precision in reimbursement predictions, reducing FSA claims processing from days to minutes using agentic AI with RAG, prompt engineering, and OCR — contributing to a $786M increase in market cap',
                'Built 3 high-impact agentic AI agents used by the CEO and Investor Relations team for earnings calls; received WEX Digital Dynamo Award',
                'Delivered a fully automated transaction data cleansing pipeline using unsupervised clustering models (98%+ accuracy)',
                'Championed company-wide AI enablement through articles, training, and demos viewed by the Board of Directors',
              ],
            },
            {
              role: 'Data Scientist',
              company: 'Accenture',
              period: 'Apr 2022 – Jun 2024',
              bullets: [
                'Spearheaded a multilingual NLP model for audience segmentation on GCP VertexAI — 95% accuracy, 66% reduction in false negatives',
                'Delivered data-driven insights to executive leadership via presentations, visualizations, and Looker dashboards',
                'Fine-tuned an LLM to extract customer sentiment with detailed pros/cons from feedback',
                'Established reputation as go-to AI expert by crafting and delivering educational AI presentations',
              ],
            },
          ].map((job) => (
            <div
              key={job.role}
              style={{
                padding: 14,
                background: '#f8f8fa',
                borderRadius: 8,
                fontFamily: 'var(--font-system)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
                <span style={{ fontSize: 13, fontWeight: 600 }}>
                  {job.role}{job.company ? ` · ${job.company}` : ''}
                </span>
                <span style={{ fontSize: 11, color: 'var(--text-tertiary)', whiteSpace: 'nowrap', marginLeft: 8 }}>
                  {job.period}
                </span>
              </div>
              <ul style={{ margin: 0, paddingLeft: 16, listStyle: 'none' }}>
                {job.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    style={{
                      fontSize: 12,
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      marginBottom: 3,
                      position: 'relative',
                      paddingLeft: 12,
                    }}
                  >
                    <span style={{ position: 'absolute', left: 0, color: 'var(--text-tertiary)' }}>·</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div
        style={{
          marginTop: 20,
          borderTop: '0.5px solid var(--border-light)',
          paddingTop: 20,
        }}
      >
        <h3
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: 'var(--text-secondary)',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            marginBottom: 12,
            fontFamily: 'var(--font-system)',
          }}
        >
          Skills
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {[
            'Python',
            'SQL',
            'Machine Learning',
            'Unsupervised Learning',
            'NLP',
            'LLMs',
            'Fine-tuning (QLoRA)',
            'vLLM',
            'Agentic AI',
            'LangGraph',
            'RAG Pipelines',
            'Prompt Engineering',
            'Knowledge Graphs',
            'Neo4j',
            'GCP / VertexAI',
            'OCR',
            'Data Storytelling',
          ].map((skill) => (
            <span
              key={skill}
              style={{
                padding: '4px 12px',
                background: '#f0f0f0',
                borderRadius: 20,
                fontSize: 12,
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-system)',
                fontWeight: 500,
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Education */}
      <div
        style={{
          marginTop: 20,
          borderTop: '0.5px solid var(--border-light)',
          paddingTop: 20,
        }}
      >
        <h3
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: 'var(--text-secondary)',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            marginBottom: 8,
            fontFamily: 'var(--font-system)',
          }}
        >
          Education
        </h3>
        <div style={{ fontFamily: 'var(--font-system)', fontSize: 13 }}>
          <span style={{ fontWeight: 600 }}>B.S. Computer Science</span>
          <span style={{ color: 'var(--text-secondary)' }}> · Illinois Institute of Technology · Chicago, IL · GPA 4.0/4.0</span>
        </div>
      </div>

      <div style={{ marginTop: 24, borderTop: '0.5px solid var(--border-light)', paddingTop: 20, textAlign: 'center' }}>
        <a
          href="/resume.pdf"
          download="Diana_Morales_Resume.pdf"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '10px 20px',
            background: 'var(--accent-blue)',
            color: 'white',
            borderRadius: 8,
            textDecoration: 'none',
            fontSize: 13,
            fontWeight: 600,
            fontFamily: 'var(--font-system)',
            transition: 'opacity 0.15s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85'; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
        >
          ↓ Download Resume
        </a>
      </div>
    </div>
  );
}
