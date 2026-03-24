import { useState } from 'react';

interface Book {
  title: string;
  author: string;
  cover?: string;
  color: string;
}

const books: Book[] = [
  {
    title: 'AI Engineering',
    author: 'Chip Huyen',
    cover: '/photos/book-ai-engineering.jpg',
    color: '#2a6496',
  },
  {
    title: "LLM Engineer's Handbook",
    author: 'Paul Iusztin & Maxime Labonne',
    cover: '/photos/book-llm-handbook.jpg',
    color: '#6b3a8a',
  },
  {
    title: 'Empire of AI',
    author: 'Karen Hao',
    cover: '/photos/book-empire-of-ai.jpg',
    color: '#8c3a3a',
  },
  {
    title: 'The Hundred-Page Language Models Book',
    author: 'Andriy Burkov',
    cover: '/photos/book-hundred-page-lm.jpg',
    color: '#3a3a3a',
  },
  {
    title: 'Steal Like an Artist',
    author: 'Austin Kleon',
    cover: '/photos/book-steal-like-artist.jpg',
    color: '#1a1a1a',
  },
];

export default function BookshelfWindow() {
  const [hoveredBook, setHoveredBook] = useState<number | null>(null);

  return (
    <div style={{ fontFamily: 'var(--font-system)' }}>
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 4 }}>Bookshelf</h2>
      <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 20 }}>
        Books that shaped my thinking
      </p>

      {/* Bookshelf */}
      <div
        className="bookshelf-outer"
        style={{
          background: 'linear-gradient(180deg, #5c3d1e 0%, #4a3218 100%)',
          borderRadius: 8,
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
        }}
      >
        {/* Back wall */}
        <div
          style={{
            background:
              'linear-gradient(180deg, #f0e6d6 0%, #e8dcc8 60%, #d8ccb4 100%)',
            padding: '28px 24px 0',
            position: 'relative',
          }}
        >
          {/* Books row */}
          <div
            className="bookshelf-row"
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              gap: 12,
              minHeight: 195,
            }}
          >
            {books.map((book, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoveredBook(i)}
                onMouseLeave={() => setHoveredBook(null)}
                style={{
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  transform: hoveredBook === i ? 'translateY(-10px)' : 'none',
                  overflow: 'hidden',
                  borderRadius: 2,
                  boxShadow: hoveredBook === i
                    ? '0 12px 28px rgba(0,0,0,0.4), 2px 2px 4px rgba(0,0,0,0.2)'
                    : '1px 1px 4px rgba(0,0,0,0.25), 3px 3px 8px rgba(0,0,0,0.1)',
                  background: book.color,
                  flexShrink: 0,
                  position: 'relative',
                  zIndex: hoveredBook === i ? 10 : 1,
                }}
              >
                {book.cover ? (
                  <img
                    src={book.cover}
                    alt={book.title}
                    style={{
                      height: 180,
                      width: 'auto',
                      display: 'block',
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: 115,
                      height: 180,
                      background: `linear-gradient(135deg, ${book.color} 0%, ${book.color}cc 100%)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: 12,
                    }}
                  >
                    <span
                      style={{
                        color: 'rgba(255,255,255,0.9)',
                        fontSize: 11,
                        fontWeight: 700,
                        textAlign: 'center',
                        lineHeight: 1.4,
                      }}
                    >
                      {book.title}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Shelf plank — front face */}
        <div
          style={{
            height: 14,
            background: 'linear-gradient(180deg, #8b6940 0%, #6d5233 40%, #5c4328 100%)',
            boxShadow: '0 3px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.15)',
            position: 'relative',
          }}
        >
          {/* Plank edge highlight */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 2,
              background: 'linear-gradient(180deg, rgba(200,170,130,0.6), transparent)',
            }}
          />
        </div>

        {/* Shelf plank — bottom thickness */}
        <div
          style={{
            height: 6,
            background: 'linear-gradient(180deg, #4a3520 0%, #3d2c1a 100%)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
          }}
        />
      </div>

      {/* Hovered book details */}
      {hoveredBook !== null && (
        <div
          style={{
            marginTop: 16,
            padding: 14,
            background: '#f8f8f8',
            borderRadius: 8,
            border: '0.5px solid var(--border-light)',
            fontSize: 13,
          }}
        >
          <div style={{ fontWeight: 600, marginBottom: 2 }}>
            {books[hoveredBook].title}
          </div>
          <div style={{ color: 'var(--text-secondary)', fontSize: 12 }}>
            by {books[hoveredBook].author}
          </div>
        </div>
      )}
    </div>
  );
}
