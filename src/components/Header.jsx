import { useState } from 'react';

const navLinkBase = {
  color: '#1a1a1a',
  textDecoration: 'none',
  fontSize: '15px',
  fontWeight: 800,
  cursor: 'pointer',
  padding: '8px 16px',
  border: '3px solid #1a1a1a',
  borderRadius: '10px',
  background: 'white',
  boxShadow: '3px 3px 0 #1a1a1a',
  transition: 'transform .12s ease, box-shadow .12s ease',
  display: 'inline-block',
};

const navLinkHover = {
  transform: 'translate(2px,2px)',
  boxShadow: '1px 1px 0 #1a1a1a',
};

export default function Header({ goHome, goKontakt, goImpressum, navBtnStyle }) {
  const [homeHover, setHomeHover] = useState(false);
  const [impHover, setImpHover] = useState(false);
  const [btnHover, setBtnHover] = useState(false);

  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '18px 48px',
      borderBottom: '4px solid #1a1a1a',
      background: 'oklch(96% 0.015 90)',
    }}>
      <div
        onClick={goHome}
        style={{
          fontFamily: 'Bangers, cursive',
          fontSize: '26px',
          letterSpacing: '0.5px',
          cursor: 'pointer',
          color: 'oklch(58% 0.19 25)',
          WebkitTextStroke: '1px #1a1a1a',
        }}
      >
        Papierkorb &amp; Partner
      </div>
      <nav style={{ display: 'flex', gap: '18px', alignItems: 'center' }}>
        <a
          onClick={goHome}
          onMouseEnter={() => setHomeHover(true)}
          onMouseLeave={() => setHomeHover(false)}
          style={{ ...navLinkBase, ...(homeHover ? navLinkHover : {}) }}
        >
          Home
        </a>
        <button
          onMouseEnter={() => setBtnHover(true)}
          onMouseLeave={() => setBtnHover(false)}
          onClick={goKontakt}
          style={{
            ...navBtnStyle,
            ...(btnHover ? { transform: 'translate(2px,2px)', boxShadow: '1px 1px 0 #1a1a1a' } : {}),
          }}
        >
          Kontakt
        </button>
        <a
          onClick={goImpressum}
          onMouseEnter={() => setImpHover(true)}
          onMouseLeave={() => setImpHover(false)}
          style={{ ...navLinkBase, ...(impHover ? navLinkHover : {}) }}
        >
          Impressum
        </a>
      </nav>
    </header>
  );
}
