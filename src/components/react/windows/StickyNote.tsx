import { useState } from 'react';
import { Rnd } from 'react-rnd';

export default function StickyNote() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <Rnd
      default={{
        x: typeof window !== 'undefined' ? window.innerWidth - 280 : 800,
        y: 60,
        width: 220,
        height: 'auto' as unknown as number,
      }}
      minWidth={180}
      bounds="parent"
      enableResizing={false}
      style={{ zIndex: 500, pointerEvents: 'auto' }}
    >
      <div
        style={{
          background: '#fbf0b2',
          borderRadius: 2,
          padding: 16,
          fontFamily: 'var(--font-system)',
          fontSize: 13,
          color: '#5a5000',
          cursor: 'move',
          boxShadow: '2px 3px 12px rgba(0, 0, 0, 0.15)',
          position: 'relative',
          lineHeight: 1.6,
        }}
      >
        <button
          onClick={() => setVisible(false)}
          style={{
            position: 'absolute',
            top: 4,
            right: 8,
            background: 'none',
            border: 'none',
            color: '#b0a050',
            cursor: 'pointer',
            fontSize: 16,
            fontFamily: 'var(--font-system)',
          }}
        >
          ×
        </button>
        <div style={{ marginBottom: 6, fontWeight: 700, fontSize: 14 }}>
          Welcome! 👋
        </div>
        <div>
          Double-click the icons or
          <br />
          use the dock to explore.
          <br />
          Have fun!
        </div>
      </div>
    </Rnd>
  );
}
