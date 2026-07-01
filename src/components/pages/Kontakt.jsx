import { useState } from 'react';

function TreasureMap() {
  return (
    <div style={{
      position: 'relative',
      height: '300px',
      borderRadius: '14px',
      border: '4px solid #5b3a1e',
      boxShadow: '6px 6px 0 #1a1a1a',
      overflow: 'hidden',
      background: 'oklch(85% 0.05 85)',
      backgroundImage: [
        'radial-gradient(circle at 15% 20%, oklch(78% 0.06 75) 0 60px, transparent 61px)',
        'radial-gradient(circle at 85% 15%, oklch(80% 0.055 80) 0 50px, transparent 51px)',
        'radial-gradient(circle at 75% 85%, oklch(78% 0.06 70) 0 70px, transparent 71px)',
        'radial-gradient(circle at 25% 80%, oklch(80% 0.05 78) 0 45px, transparent 46px)',
      ].join(', '),
    }}>
      <svg viewBox="0 0 400 300" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <path d="M 40 230 Q 100 260 150 190 T 260 120 T 330 70" fill="none" stroke="#5b3a1e" strokeWidth="3" strokeDasharray="8 8" strokeLinecap="round" />
        <circle cx="335" cy="45" r="26" fill="none" stroke="#5b3a1e" strokeWidth="2" />
        <line x1="335" y1="22" x2="335" y2="68" stroke="#5b3a1e" strokeWidth="1.5" />
        <line x1="312" y1="45" x2="358" y2="45" stroke="#5b3a1e" strokeWidth="1.5" />
        <text x="331" y="18" fontFamily="Bangers, cursive" fontSize="12" fill="#5b3a1e">N</text>
      </svg>
      <div style={{
        position: 'absolute',
        top: '10px',
        left: '50%',
        transform: 'translateX(-50%) rotate(-2deg)',
        fontFamily: 'Bangers, cursive',
        fontSize: '18px',
        letterSpacing: '1px',
        background: 'oklch(85% 0.16 95)',
        border: '3px solid #1a1a1a',
        borderRadius: '8px',
        padding: '4px 16px',
        boxShadow: '3px 3px 0 #1a1a1a',
        whiteSpace: 'nowrap',
      }}>
        SCHATZKARTE
      </div>
      <div style={{ position: 'absolute', top: '170px', left: '20px', width: '16px', height: '16px', background: '#c0392b', border: '2px solid #1a1a1a', borderRadius: '50% 50% 50% 0', transform: 'rotate(-45deg)' }} />
      <div style={{ position: 'absolute', top: '130px', left: '44px', fontFamily: 'Caveat, cursive', fontSize: '20px', fontWeight: 700, color: '#3a2413', maxWidth: '150px' }}>
        Hier wohnt Ute, sie hat immer Kekse.
      </div>
      <div style={{ position: 'absolute', top: '95px', left: '245px', width: '16px', height: '16px', background: '#c0392b', border: '2px solid #1a1a1a', borderRadius: '50% 50% 50% 0', transform: 'rotate(-45deg)' }} />
      <div style={{ position: 'absolute', top: '58px', left: '255px', fontFamily: 'Caveat, cursive', fontSize: '20px', fontWeight: 700, color: '#3a2413' }}>
        Vorsicht: Nachbars Hund!
      </div>
      <div style={{ position: 'absolute', bottom: '56px', right: '56px', fontFamily: 'Bangers, cursive', fontSize: '34px', color: '#c0392b', transform: 'rotate(12deg)', WebkitTextStroke: '1px #1a1a1a' }}>
        &#x2715;
      </div>
      <div style={{ position: 'absolute', bottom: '22px', right: '24px', fontFamily: 'Caveat, cursive', fontSize: '22px', fontWeight: 700, color: '#3a2413', textAlign: 'right' }}>
        Ziel: Unser Buro<br />(Kaffee vorhanden)
      </div>
    </div>
  );
}

export default function Kontakt({ contactName, contactEmail, contactMessage, contactSubmitted, setContactName, setContactEmail, setContactMessage, submitContactForm, resetContactForm }) {
  const [submitHover, setSubmitHover] = useState(false);
  const [resetHover, setResetHover] = useState(false);

  const inputStyle = {
    padding: '13px 14px',
    border: '3px solid #1a1a1a',
    borderRadius: '10px',
    fontSize: '14px',
    fontFamily: 'Nunito, sans-serif',
    fontWeight: 700,
    outline: 'none',
    width: '100%',
  };

  return (
    <div style={{ padding: '70px 48px 110px', maxWidth: '640px', margin: '0 auto' }}>
      <div style={{
        fontFamily: 'Bangers, cursive',
        fontSize: '42px',
        marginBottom: '6px',
        letterSpacing: '0.5px',
        color: 'oklch(58% 0.19 25)',
        WebkitTextStroke: '1px #1a1a1a',
      }}>
        Kontakt
      </div>
      <p style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a', margin: '12px 0 28px' }}>
        Wir antworten. Theoretisch.
      </p>

      {contactSubmitted ? (
        <div style={{
          background: 'oklch(78% 0.15 145)',
          border: '3px solid #1a1a1a',
          borderRadius: '14px',
          boxShadow: '6px 6px 0 #1a1a1a',
          padding: '28px',
        }}>
          <div style={{ fontFamily: 'Bangers, cursive', fontSize: '20px', marginBottom: '8px' }}>
            Nachricht gesendet.
          </div>
          <div style={{ fontSize: '14px', fontWeight: 700, color: '#1a1a1a', lineHeight: 1.6 }}>
            Horst hat deine Nachricht erhalten. Er wird sich nie melden, aber schon, dass du sie los bist.
          </div>
          <button
            onClick={resetContactForm}
            onMouseEnter={() => setResetHover(true)}
            onMouseLeave={() => setResetHover(false)}
            style={{
              marginTop: '16px',
              background: 'white',
              border: '3px solid #1a1a1a',
              padding: '9px 18px',
              borderRadius: '10px',
              cursor: 'pointer',
              fontFamily: 'Nunito, sans-serif',
              fontWeight: 800,
              boxShadow: resetHover ? '1px 1px 0 #1a1a1a' : '3px 3px 0 #1a1a1a',
              transform: resetHover ? 'translate(2px,2px)' : 'none',
              transition: 'transform .12s ease, box-shadow .12s ease',
            }}
          >
            Neue Nachricht
          </button>
        </div>
      ) : (
        <form onSubmit={submitContactForm} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <input
            placeholder="Name"
            value={contactName}
            onChange={e => setContactName(e.target.value)}
            style={inputStyle}
          />
          <input
            type="email"
            placeholder="E-Mail"
            value={contactEmail}
            onChange={e => setContactEmail(e.target.value)}
            style={inputStyle}
          />
          <textarea
            placeholder="Nachricht"
            value={contactMessage}
            onChange={e => setContactMessage(e.target.value)}
            rows={5}
            style={{ ...inputStyle, resize: 'vertical' }}
          />
          <button
            type="submit"
            onMouseEnter={() => setSubmitHover(true)}
            onMouseLeave={() => setSubmitHover(false)}
            style={{
              alignSelf: 'flex-start',
              padding: '13px 28px',
              background: 'oklch(85% 0.16 95)',
              color: '#1a1a1a',
              border: '3px solid #1a1a1a',
              borderRadius: '10px',
              fontFamily: 'Bangers, cursive',
              fontSize: '17px',
              letterSpacing: '0.5px',
              cursor: 'pointer',
              boxShadow: submitHover ? '2px 2px 0 #1a1a1a' : '5px 5px 0 #1a1a1a',
              transform: submitHover ? 'translate(3px,3px)' : 'none',
              transition: 'transform .12s ease, box-shadow .12s ease',
            }}
          >
            Nachricht senden
          </button>
        </form>
      )}

      <div style={{ marginTop: '50px' }}>
        <div style={{ fontFamily: 'Bangers, cursive', fontSize: '24px', marginBottom: '8px', letterSpacing: '0.5px' }}>
          So finden Sie uns.
        </div>
        <p style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a', marginBottom: '16px' }}>
          Wir verzichten bewusst auf Kartendienste Dritter.
        </p>
        <TreasureMap />
      </div>
    </div>
  );
}
