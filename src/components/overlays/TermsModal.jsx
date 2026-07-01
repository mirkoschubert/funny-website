import { useState } from 'react';

export default function TermsModal({ onClose }) {
  const [btnHover, setBtnHover] = useState(false);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(20,20,25,0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        padding: '24px',
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div style={{
        background: 'white',
        border: '4px solid #1a1a1a',
        borderRadius: '16px',
        boxShadow: '8px 8px 0 #1a1a1a',
        padding: '40px',
        maxWidth: '440px',
        width: '100%',
      }}>
        <div style={{
          fontFamily: 'Bangers, cursive',
          fontSize: '28px',
          marginBottom: '16px',
          letterSpacing: '0.5px',
        }}>
          Nutzungsbedingungen
        </div>
        <div style={{ fontSize: '16px', fontWeight: 700, marginBottom: '20px' }}>
          Hiermit erklären Sie sich einverstanden...
        </div>
        <div style={{
          background: 'oklch(93% 0.02 90)',
          border: '3px solid #1a1a1a',
          borderRadius: '10px',
          padding: '14px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <img
            src="/penguin.webp"
            alt="Ein Pinguin"
            style={{
              maxWidth: '100%',
              maxHeight: '220px',
              border: '3px solid #1a1a1a',
              borderRadius: '6px',
              transform: 'rotate(-1.5deg)',
              boxShadow: '4px 4px 0 rgba(26,26,26,0.3)',
              display: 'block',
            }}
          />
        </div>
        <div style={{ fontSize: '12px', fontWeight: 700, color: '#555', marginTop: '14px', marginBottom: '24px' }}>
          Als Entschädigung für die Bedingungen, die Sie nie lesen werden.
        </div>
        <button
          onClick={onClose}
          onMouseEnter={() => setBtnHover(true)}
          onMouseLeave={() => setBtnHover(false)}
          style={{
            padding: '12px 28px',
            background: 'oklch(85% 0.16 95)',
            color: '#1a1a1a',
            border: '3px solid #1a1a1a',
            borderRadius: '10px',
            fontFamily: 'Bangers, cursive',
            fontSize: '17px',
            letterSpacing: '0.5px',
            cursor: 'pointer',
            boxShadow: btnHover ? '2px 2px 0 #1a1a1a' : '5px 5px 0 #1a1a1a',
            transform: btnHover ? 'translate(3px,3px)' : 'none',
            transition: 'transform .12s ease, box-shadow .12s ease',
          }}
        >
          Verstanden
        </button>
      </div>
    </div>
  );
}
