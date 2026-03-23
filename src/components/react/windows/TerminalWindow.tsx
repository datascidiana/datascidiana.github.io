import { useState, useRef, useEffect } from 'react';

interface TerminalLine {
  type: 'input' | 'output';
  text: string;
}

const commands: Record<string, string> = {
  help: `Available commands:
  about      – Who is Diana?
  experience – Work history
  skills     – Technical skills
  projects   – Featured projects
  education  – Academic background
  contact    – Get in touch
  blog       – Read my articles
  books      – What I'm reading
  clear      – Clear terminal`,

  about: `
  Diana Morales — AI Scientist · Chicago, IL
  ════════════════════════════════════════════
  AI Scientist specializing in agentic AI
  systems, large language models, and
  production machine learning. I lead
  cross-functional AI initiatives from
  discovery through prototype to adoption —
  building systems like autonomous AI agents
  with LangGraph, fine-tuning LLMs for
  specialized domains, and architecting
  knowledge graph platforms that power
  enterprise AI workflows.`,

  experience: `
  💼 Work Experience
  ════════════════════════════════════════════

  Independent R&D
  ──────────────────────────────────────────
  • Autonomous AI pentest agent (LangGraph)
  • Fine-tuned LLMs for cybersecurity (QLoRA)
  • Knowledge graph platform (Neo4j, multimodal)

  Innovation AI Scientist, Wex  Jun 2024 – Present
  ──────────────────────────────────────────
  • Agentic AI for FSA claims (97% precision)
  • 3 AI agents used by CEO & Investor Relations team
  • Automated transaction data cleansing (98%+ accuracy)
  • Digital Dynamo Award recipient

  Data Scientist, Accenture     Apr 2022 – Jun 2024
  ──────────────────────────────────────────
  • Audience segmentation (95% accuracy)
  • Fine-tuned LLM for sentiment analysis
  • GCP/VertexAI, Looker dashboards`,

  skills: `
  🛠  Technical Skills
  ════════════════════════════════════════════
  Core       │ Agentic AI, LLMs, Machine Learning
  Frameworks │ LangGraph, vLLM, QLoRA, PyTorch
  Techniques │ RAG, Prompt Engineering, NLP, OCR
  Platforms  │ GCP/VertexAI, Neo4j, NVIDIA DGX
  Languages  │ Python, SQL
  Data       │ Unsupervised Learning, Clustering
  Other      │ Data Storytelling, Knowledge Graphs`,

  projects: `
  📁 Featured Projects
  ════════════════════════════════════════════
  → Autonomous AI Pentest Agent    LangGraph
  → Fine-tuned LLMs (Cybersec)     QLoRA/vLLM
  → Knowledge Graph Platform       Neo4j
  → Agentic AI for FSA Claims      RAG/OCR
  → C-Suite AI Agents              Agentic AI
  → Transaction Data Cleansing     Clustering
  → Multilingual NLP Segmentation  VertexAI
  → LLM Sentiment Analysis         Fine-tuning
  → Facial Expression Recognition  CNN
  → AI Tic-Tac-Toe / Wumpus Agent  Minimax/CSP
  → Spam Classifiers (SVM & NB)    Classification
  ... and 15+ more on GitHub

  Visit: github.com/datascidiana`,

  education: `
  🎓 Education
  ════════════════════════════════════════════
  B.S. Computer Science
  Illinois Institute of Technology
  Chicago, IL
  GPA: 4.0 / 4.0  ★`,

  contact: `
  📬 Contact
  ════════════════════════════════════════════
  📧 Email     datascidiana@gmail.com
  🐙 GitHub    github.com/datascidiana
  💼 LinkedIn  linkedin.com/in/datascidiana
  📝 Medium    medium.com/@datascidiana`,

  blog: `
  📝 Recent Articles on Medium
  ════════════════════════════════════════════
  → How I Build Effective Agentic Systems
  → How I Built My First RAG Pipeline
  → How to Reduce Class Imbalance Bias in AI

  Read more: medium.com/@datascidiana`,

  books: `
  📚 Currently Reading
  ════════════════════════════════════════════
  → AI Engineering               Chip Huyen
  → LLM Engineer's Handbook      Iusztin & Labonne
  → Empire of AI                 Karen Hao
  → The Hundred-Page LM Book     Andriy Burkov
  → Steal Like an Artist         Austin Kleon`,
};

function renderWithLinks(text: string) {
  const urlRegex = /(https?:\/\/[^\s]+|[a-z0-9-]+\.[a-z]{2,}\/[^\s]*)/g;
  const parts = text.split(urlRegex);
  return parts.map((part, i) => {
    if (urlRegex.test(part)) {
      const href = part.startsWith('http') ? part : `https://${part}`;
      return (
        <a key={i} href={href} target="_blank" rel="noopener noreferrer"
          style={{ color: '#5af78e', textDecoration: 'underline' }}>
          {part}
        </a>
      );
    }
    return part;
  });
}

export default function TerminalWindow() {
  const [history, setHistory] = useState<TerminalLine[]>([
    { type: 'output', text: "Last login: " + new Date().toDateString() + " on ttys000" },
    { type: 'output', text: "Welcome to Diana's terminal. Type \"help\" to see available commands." },
    { type: 'output', text: '' },
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newLines: TerminalLine[] = [
      ...history,
      { type: 'input', text: `diana@macbook ~ % ${cmd}` },
    ];

    if (trimmed === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    const response = commands[trimmed];
    if (response) {
      newLines.push({ type: 'output', text: response });
    } else if (trimmed) {
      newLines.push({
        type: 'output',
        text: `zsh: command not found: ${trimmed}\nType "help" for available commands.`,
      });
    }

    setHistory(newLines);
    setInput('');
  };

  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: '#1e1e1e',
        margin: -20,
        padding: 14,
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        color: '#f0f0f0',
      }}
      onClick={() => inputRef.current?.focus()}
    >
      <div style={{ flex: 1, overflow: 'auto' }}>
        {history.map((line, i) => (
          <div
            key={i}
            style={{
              color: line.type === 'input' ? '#5af78e' : '#f0f0f0',
              whiteSpace: 'pre-wrap',
              lineHeight: 1.6,
              marginBottom: 2,
            }}
          >
            {line.type === 'output' ? renderWithLinks(line.text) : line.text}
          </div>
        ))}

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ color: '#5af78e', marginRight: 8 }}>
            diana@macbook ~ %
          </span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') handleCommand(input); }}
            style={{
              flex: 1,
              background: 'none',
              border: 'none',
              outline: 'none',
              color: '#f0f0f0',
              fontFamily: 'var(--font-mono)',
              fontSize: 13,
              caretColor: '#f0f0f0',
            }}
            autoFocus
            spellCheck={false}
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
