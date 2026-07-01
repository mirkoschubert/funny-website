import { useState } from 'react';

export default function NotFound({ goHome }) {
  const [btnHover, setBtnHover] = useState(false);

  return (
    <div style={{ padding: '90px 48px 120px', maxWidth: '640px', margin: '0 auto' }}>
      <div style={{
        fontFamily: 'Bangers, cursive',
        fontSize: '100px',
        lineHeight: 1,
        color: 'oklch(58% 0.19 25)',
        WebkitTextStroke: '3px #1a1a1a',
        textShadow: '5px 5px 0 #1a1a1a',
      }}>
        404
      </div>
      <div style={{
        fontFamily: 'Bangers, cursive',
        fontSize: '22px',
        color: '#1a1a1a',
        margin: '18px 0 28px',
        letterSpacing: '0.5px',
      }}>
        Diese Seite gibt es nicht. Wie beruhigend.
      </div>
      <div style={{
        border: '4px solid #1a1a1a',
        borderRadius: '14px',
        boxShadow: '6px 6px 0 #1a1a1a',
        overflow: 'hidden',
        background: 'white',
        padding: '16px',
        display: 'flex',
        justifyContent: 'center',
      }}>
        <img
          src="/hamster-run.gif"
          alt="Hamster rennt im Laufrad"
          style={{ maxWidth: '100%', maxHeight: '340px', border: '3px solid #1a1a1a', borderRadius: '8px' }}
        />
      </div>
      <button
        onClick={goHome}
        onMouseEnter={() => setBtnHover(true)}
        onMouseLeave={() => setBtnHover(false)}
        style={{
          marginTop: '30px',
          padding: '13px 28px',
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
        Zur&uuml;ck zur Startseite
      </button>
    </div>
  );
}
