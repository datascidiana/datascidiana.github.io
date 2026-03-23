import { useState } from 'react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  category: string;
}

const projects: Project[] = [
  // --- Professional / Research projects (from resume) ---
  {
    title: 'Autonomous AI Pentest Agent',
    description: 'AI penetration testing agent using LangGraph with human-in-the-loop approval gates, MITRE ATT&CK mapping, LLM-powered context compression, and crash-safe state persistence.',
    tags: ['LangGraph', 'Agentic AI', 'Cybersecurity'],
    category: 'Agentic AI',
  },
  {
    title: 'Fine-tuned LLMs for Cybersecurity',
    description: 'Custom fine-tuned LLMs using QLoRA on NVIDIA DGX Spark via vLLM for attack planning, security reasoning, and pentest orchestration.',
    tags: ['LLMs', 'QLoRA', 'vLLM', 'NVIDIA DGX'],
    category: 'LLMs',
  },
  {
    title: 'Automated Knowledge Graph Platform',
    description: 'Neo4j-based platform ingesting 7+ data sources including GitHub repos, architecture diagrams via vision LLMs, and threat models with vector similarity retrieval.',
    tags: ['Neo4j', 'Knowledge Graphs', 'RAG'],
    category: 'Agentic AI',
  },
  {
    title: 'Agentic AI for FSA Claims',
    description: '97% precision in reimbursement predictions, reducing processing time from days to minutes using RAG pipelines, prompt engineering, and OCR.',
    tags: ['RAG', 'OCR', 'Prompt Engineering'],
    category: 'Agentic AI',
  },
  {
    title: 'C-Suite AI Agents',
    description: '3 AI agents built for CEO & Investor Relations team to automate research, reporting, and strategic analysis workflows.',
    tags: ['Agentic AI', 'LLMs', 'Automation'],
    category: 'Agentic AI',
  },
  {
    title: 'Automated Transaction Data Cleansing Pipeline',
    description: 'Fully automated pipeline using unsupervised clustering models (98%+ accuracy) to correct mislabeled transactions and reduce fraud false positives.',
    tags: ['Unsupervised Learning', 'Clustering', 'ETL'],
    category: 'Machine Learning',
  },
  {
    title: 'Multilingual NLP Segmentation',
    description: 'Multilingual NLP model for audience segmentation on GCP VertexAI with 95% accuracy and 66% reduction in false negatives.',
    tags: ['NLP', 'GCP', 'VertexAI'],
    category: 'NLP',
  },
  {
    title: 'LLM Customer Sentiment Analysis',
    description: 'Fine-tuned LLM to extract customer sentiment with detailed pros/cons from feedback, enhancing actionable insights.',
    tags: ['LLMs', 'Fine-tuning', 'NLP'],
    category: 'LLMs',
  },
  // --- Personal / Academic projects (from GitHub) ---
  {
    title: 'Facial Expression Recognition',
    description: 'Real-time emotion detection through camera feed using convolutional neural networks.',
    tags: ['CNN', 'Computer Vision', 'Python'],
    github: 'https://github.com/kylehornacek-null/RealTimeEmotionDetectionPrototype',
    category: 'Computer Vision',
  },
  {
    title: 'AI Tic-Tac-Toe Agent',
    description: 'Intelligent game-playing agent using minimax decision optimization.',
    tags: ['Minimax', 'Game AI', 'Python'],
    github: 'https://github.com/dianabmorales/intro_to_artificial_intelligence/tree/main/problem2',
    category: 'Machine Learning',
  },
  {
    title: 'AI Wumpus Game Agent',
    description: 'Logic-based agent for minesweeper-style puzzle solving using knowledge representation.',
    tags: ['Knowledge-Based Agent', 'CSP', 'Python'],
    github: 'https://github.com/dianabmorales/intro_to_artificial_intelligence/tree/main/problem3',
    category: 'Machine Learning',
  },
  {
    title: 'Travelling Salesman Problem',
    description: 'Shortest path discovery using A*, depth-first search, and breadth-first search strategies.',
    tags: ['A*', 'DFS', 'BFS', 'Pathfinding'],
    github: 'https://github.com/dianabmorales/intro_to_artificial_intelligence/tree/main/problem1',
    category: 'Machine Learning',
  },
  {
    title: 'Movie Recommender System',
    description: 'Recommendation system for movies using collaborative filtering algorithms.',
    tags: ['Recommendation', 'Collaborative Filtering'],
    github: 'https://github.com/dianabmorales/coursera_intro_to_machine_learning/tree/main/machine-learning-ex-8',
    category: 'Machine Learning',
  },
  {
    title: 'Shopping Cart Recommender',
    description: 'Product suggestions based on purchase history using frequent itemsets and association rules.',
    tags: ['Association Rules', 'Frequent Itemsets'],
    github: 'https://github.com/dianabmorales/data_mining_coursework/blob/main/diana-morales-cs422-hw3.ipynb',
    category: 'Machine Learning',
  },
  {
    title: 'Spam Classifier (SVM)',
    description: 'Email filtering system using support vector machines with Gaussian kernels.',
    tags: ['SVM', 'Gaussian Kernels', 'Classification'],
    github: 'https://github.com/dianabmorales/coursera_intro_to_machine_learning/tree/main/machine-learning-ex-6/ex6',
    category: 'Machine Learning',
  },
  {
    title: 'Spam Classifier (Naive Bayes)',
    description: 'Probabilistic email spam detection using Bernoulli Naive Bayes.',
    tags: ['Naive Bayes', 'NLP', 'Classification'],
    github: 'https://github.com/dianabmorales/intro_to_artificial_intelligence/tree/main/problem4',
    category: 'NLP',
  },
  {
    title: 'Handwriting Detection',
    description: 'Digit recognition using regularized neural networks.',
    tags: ['Neural Network', 'Classification'],
    github: 'https://github.com/dianabmorales/coursera_intro_to_machine_learning/tree/main/machine-learning-ex-4/ex4',
    category: 'Computer Vision',
  },
  {
    title: 'Cancer Diagnosis Predictor',
    description: 'Medical diagnosis classification using decision trees and PCA.',
    tags: ['Decision Tree', 'PCA', 'Classification'],
    github: 'https://github.com/dianabmorales/data_mining_coursework/blob/main/diana-morales-cs422-hw2.ipynb',
    category: 'Machine Learning',
  },
  {
    title: 'Image Compression',
    description: 'Image compression using K-means clustering and PCA dimensionality reduction.',
    tags: ['K-means', 'PCA', 'Python'],
    github: 'https://github.com/dianabmorales/coursera_intro_to_machine_learning/tree/main/machine-learning-ex-7/ex7',
    category: 'Computer Vision',
  },
  {
    title: 'Failing Server Anomaly Detection',
    description: 'Identifies unusual server behavior patterns using anomaly detection.',
    tags: ['Anomaly Detection', 'Unsupervised'],
    github: 'https://github.com/dianabmorales/coursera_intro_to_machine_learning/tree/main/machine-learning-ex-8',
    category: 'Machine Learning',
  },
  {
    title: 'College Admission Predictor',
    description: 'Binary classification model for university admission decisions using logistic regression.',
    tags: ['Logistic Regression', 'Classification'],
    github: 'https://github.com/dianabmorales/coursera_intro_to_machine_learning/tree/main/machine-learning-ex-2/ex2',
    category: 'Machine Learning',
  },
  {
    title: 'Food Truck Profits Predictor',
    description: 'Revenue forecasting for food truck ventures using linear regression.',
    tags: ['Linear Regression', 'Prediction'],
    github: 'https://github.com/dianabmorales/coursera_intro_to_machine_learning/tree/main/machine-learning-ex-1/ex1',
    category: 'Machine Learning',
  },
  {
    title: 'Clustering Analysis',
    description: 'Grouping analysis on real estate, wine, and automotive datasets using K-means and hierarchical clustering.',
    tags: ['K-means', 'Hierarchical Clustering'],
    github: 'https://github.com/dianabmorales/data_mining_coursework/blob/main/diana-morales-cs422-hw4.ipynb',
    category: 'Machine Learning',
  },
  {
    title: 'Movie Rating Prediction',
    description: 'User profile-based rating predictions for movies.',
    tags: ['Recommendation', 'Data Mining'],
    github: 'https://github.com/dianabmorales/data_mining_coursework/blob/main/diana-morales-cs422-hw6.ipynb',
    category: 'Machine Learning',
  },
  {
    title: 'ML Pipeline with ONNX Export',
    description: 'End-to-end model development workflow with Scikit-Learn pipeline and ONNX export.',
    tags: ['Scikit-Learn', 'ONNX', 'Pipeline'],
    github: 'https://github.com/dianabmorales/data_mining_coursework/blob/main/Diana_Morales_Project_cs422.ipynb',
    category: 'Machine Learning',
  },
  {
    title: 'Cross Validation & Regularization',
    description: 'Hyperparameter tuning using cross validation and regularization techniques.',
    tags: ['Cross Validation', 'Regularization'],
    github: 'https://github.com/dianabmorales/coursera_intro_to_machine_learning/tree/main/machine-learning-ex-5/ex5',
    category: 'Machine Learning',
  },
  {
    title: 'Data Preprocessing & PCA',
    description: 'Data cleaning, missing value imputation, and dimensionality reduction on historical datasets.',
    tags: ['PCA', 'Data Cleaning', 'Preprocessing'],
    github: 'https://github.com/dianabmorales/data_mining_coursework/blob/main/diana-morales-cs422-hw1.ipynb',
    category: 'Machine Learning',
  },
];

const tagColors: Record<string, string> = {
  'Agentic AI': '#007aff',
  'LLMs': '#af52de',
  'Machine Learning': '#ff9500',
  'NLP': '#ff2d55',
  'Computer Vision': '#5ac8fa',
};

export default function ProjectsWindow() {
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(projects.map((p) => p.category))];
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <div style={{ fontFamily: 'var(--font-system)' }}>
      {/* Finder-style toolbar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 16,
          paddingBottom: 12,
          borderBottom: '0.5px solid var(--border-light)',
        }}
      >
        <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '4px 12px',
                fontSize: 12,
                fontFamily: 'var(--font-system)',
                fontWeight: filter === cat ? 600 : 400,
                background: filter === cat ? 'var(--accent-blue)' : '#f0f0f0',
                border: 'none',
                borderRadius: 6,
                color: filter === cat ? 'white' : 'var(--text-primary)',
                cursor: 'pointer',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 2, background: '#f0f0f0', borderRadius: 6, padding: 2 }}>
          <button
            onClick={() => setView('grid')}
            style={{
              padding: '3px 8px',
              fontSize: 14,
              background: view === 'grid' ? 'white' : 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              borderRadius: 4,
              boxShadow: view === 'grid' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
            }}
          >
            ⊞
          </button>
          <button
            onClick={() => setView('list')}
            style={{
              padding: '3px 8px',
              fontSize: 14,
              background: view === 'list' ? 'white' : 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              borderRadius: 4,
              boxShadow: view === 'list' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
            }}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Project cards */}
      <div
        style={{
          display: view === 'grid' ? 'grid' : 'flex',
          gridTemplateColumns: view === 'grid' ? 'repeat(auto-fill, minmax(200px, 1fr))' : undefined,
          flexDirection: view === 'list' ? 'column' : undefined,
          gap: 10,
        }}
      >
        {filtered.map((project) => {
          const catColor = tagColors[project.category] || 'var(--accent-blue)';
          const cardStyle: React.CSSProperties = {
            padding: 14,
            background: 'white',
            border: '0.5px solid var(--border-light)',
            borderRadius: 8,
            textDecoration: 'none',
            transition: 'box-shadow 0.2s, transform 0.15s',
            display: 'block',
            cursor: project.github ? 'pointer' : 'default',
          };
          const cardContent = (
            <>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <span style={{ fontSize: 20 }}>📁</span>
                <h3 style={{ color: 'var(--text-primary)', fontSize: 13, fontWeight: 600 }}>
                  {project.title}
                </h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: 12, lineHeight: 1.5, marginBottom: 10 }}>
                {project.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: '2px 8px',
                      fontSize: 10,
                      background: `${catColor}15`,
                      borderRadius: 10,
                      color: catColor,
                      fontWeight: 500,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </>
          );

          if (project.github) {
            return (
              <a
                key={project.title}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={cardStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.1)';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                {cardContent}
              </a>
            );
          }

          return (
            <div key={project.title} style={cardStyle}>
              {cardContent}
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: 16, fontSize: 11, color: 'var(--text-tertiary)', textAlign: 'center' }}>
        {filtered.length} of {projects.length} projects
      </div>
    </div>
  );
}
