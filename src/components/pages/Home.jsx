import { useState } from 'react';

const cardHoverStyle = { transform: 'translate(3px,3px)', boxShadow: '3px 3px 0 #1a1a1a' };
const cardBaseStyle = {
  transition: 'transform .15s ease, box-shadow .15s ease',
  flex: 1,
  minWidth: '220px',
  border: '3px solid #1a1a1a',
  borderRadius: '14px',
  boxShadow: '6px 6px 0 #1a1a1a',
  padding: '26px',
};

function ServiceCard({ title, description, bg, titleStyle }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ ...cardBaseStyle, background: bg, ...(hovered ? cardHoverStyle : {}) }}
    >
      <div style={{
        fontFamily: 'Bangers, cursive',
        fontSize: '20px',
        marginBottom: '8px',
        letterSpacing: '0.5px',
        ...titleStyle,
      }}>
        {title}
      </div>
      <div style={{ fontSize: '14px', fontWeight: 700, color: titleStyle?.color || '#1a1a1a', lineHeight: 1.5 }}>
        {description}
      </div>
    </div>
  );
}

function CursorGame({ cursorFound, cursorSeconds, onEnter, onLeave, onClick, onReset }) {
  const [resetHover, setResetHover] = useState(false);
  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onClick}
      style={{
        position: 'relative',
        height: '220px',
        border: '4px dashed #1a1a1a',
        borderRadius: '14px',
        background: 'white',
        cursor: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        boxShadow: '6px 6px 0 rgba(26,26,26,0.25)',
      }}
    >
      {cursorFound ? (
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: 'Bangers, cursive', fontSize: '22px', marginBottom: '12px' }}>
            Gefunden! (War die ganze Zeit da.)
          </div>
          <button
            onClick={onReset}
            onMouseEnter={() => setResetHover(true)}
            onMouseLeave={() => setResetHover(false)}
            style={{
              background: 'oklch(85% 0.16 95)',
              border: '3px solid #1a1a1a',
              padding: '9px 20px',
              borderRadius: '10px',
              cursor: 'pointer',
              fontFamily: 'Nunito, sans-serif',
              fontWeight: 800,
              color: '#1a1a1a',
              boxShadow: resetHover ? '1px 1px 0 #1a1a1a' : '3px 3px 0 #1a1a1a',
              transform: resetHover ? 'translate(2px,2px)' : 'none',
              transition: 'transform .12s ease, box-shadow .12s ease',
            }}
          >
            Nochmal
          </button>
        </div>
      ) : (
        <div style={{ color: '#1a1a1a', fontWeight: 700, fontSize: '14px' }}>
          Bewegen Sie die Maus hierhinein.
        </div>
      )}
      <div style={{
        position: 'absolute',
        bottom: '10px',
        right: '14px',
        fontSize: '12px',
        fontWeight: 800,
        color: '#1a1a1a',
        fontVariantNumeric: 'tabular-nums',
      }}>
        {cursorSeconds}s gesucht
      </div>
    </div>
  );
}

export default function Home({ heroCtaStyle, jumpHero, cursorFound, cursorSeconds, handleCursorEnter, handleCursorLeave, handleCursorClick, resetCursorGame }) {
  const [ctaHover, setCtaHover] = useState(false);

  return (
    <div>
      <section style={{
        background: 'oklch(58% 0.19 25)',
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.22) 3px, transparent 3.5px)',
        backgroundSize: '26px 26px',
        padding: '90px 48px 100px',
        borderBottom: '4px solid #1a1a1a',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'oklch(85% 0.16 95)',
            color: '#1a1a1a',
            fontFamily: 'Bangers, cursive',
            fontSize: '15px',
            letterSpacing: '0.5px',
            padding: '10px 20px',
            borderRadius: '50px',
            marginBottom: '26px',
            border: '3px solid #1a1a1a',
            boxShadow: '4px 4px 0 #1a1a1a',
            transform: 'rotate(-3deg)',
          }}>
            ★ SEIT 2011 UNVERÄNDERT ERFOLGREICH ★
          </div>
          <div style={{
            fontFamily: 'Bangers, cursive',
            fontSize: '58px',
            lineHeight: 1.1,
            maxWidth: '760px',
            color: 'white',
            WebkitTextStroke: '2px #1a1a1a',
            textShadow: '4px 4px 0 #1a1a1a',
          }}>
            Zukunftssichere Lösungen für Ihr Unternehmen.
          </div>
          <p style={{
            fontSize: '18px',
            fontWeight: 700,
            color: 'white',
            maxWidth: '560px',
            marginTop: '24px',
            lineHeight: 1.6,
          }}>
            Seit 2011 begleiten wir Kunden durch Prozesse, deren Ausgang wir selbst nicht kennen.
          </p>
          <button
            onMouseEnter={() => { jumpHero(); setCtaHover(true); }}
            onMouseLeave={() => setCtaHover(false)}
            style={{
              ...heroCtaStyle,
              filter: ctaHover ? 'brightness(1.08)' : undefined,
            }}
          >
            Angebot anfragen
          </button>
        </div>
      </section>

      <section style={{
        padding: '70px 48px',
        display: 'flex',
        gap: '24px',
        flexWrap: 'wrap',
        maxWidth: '1000px',
        margin: '0 auto',
      }}>
        <ServiceCard
          title="Synergieoptimierung"
          description="Wir verbinden Dinge, die vorher nicht verbunden waren."
          bg="oklch(85% 0.16 95)"
          titleStyle={{}}
        />
        <ServiceCard
          title="Nachhaltige Skalierung"
          description="Wächst, bis es das nicht mehr tut."
          bg="oklch(75% 0.13 245)"
          titleStyle={{ color: 'white', WebkitTextStroke: '0.5px #1a1a1a' }}
        />
        <ServiceCard
          title="Digitale Transformation"
          description="Aus PDF wird PDF/A."
          bg="oklch(78% 0.15 145)"
          titleStyle={{}}
        />
      </section>

      <section style={{
        background: 'oklch(93% 0.03 95)',
        padding: '70px 48px 100px',
        borderTop: '4px solid #1a1a1a',
        borderBottom: '4px solid #1a1a1a',
      }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <div style={{ fontFamily: 'Bangers, cursive', fontSize: '32px', marginBottom: '8px', letterSpacing: '0.5px' }}>
            Finden Sie unseren Cursor.
          </div>
          <p style={{ fontSize: '14px', fontWeight: 700, color: '#1a1a1a', marginBottom: '18px' }}>
            Ein interaktives Feature für zwischendurch. Bewegen Sie sich in der Box.
          </p>
          <CursorGame
            cursorFound={cursorFound}
            cursorSeconds={cursorSeconds}
            onEnter={handleCursorEnter}
            onLeave={handleCursorLeave}
            onClick={handleCursorClick}
            onReset={resetCursorGame}
          />
        </div>
      </section>
    </div>
  );
}
