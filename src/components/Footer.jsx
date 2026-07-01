import { useState } from 'react';

export default function Footer({ toggleTerms, go404, handleScrollTop, scrollBtnStyle }) {
  const [termsHover, setTermsHover] = useState(false);
  const [careerHover, setCareerHover] = useState(false);

  return (
    <footer style={{
      borderTop: '4px solid #1a1a1a',
      padding: '30px 48px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '16px',
      marginTop: '40px',
      background: 'oklch(58% 0.19 25)',
    }}>
      <div style={{ fontSize: '13px', fontWeight: 800, color: 'white' }}>
        &copy; 2026 Papierkorb &amp; Partner GmbH
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
        <a
          onClick={toggleTerms}
          onMouseEnter={() => setTermsHover(true)}
          onMouseLeave={() => setTermsHover(false)}
          style={{
            fontSize: '13px',
            fontWeight: 800,
            color: '#1a1a1a',
            cursor: 'pointer',
            background: termsHover ? 'white' : 'oklch(85% 0.16 95)',
            padding: '7px 14px',
            border: '2px solid #1a1a1a',
            borderRadius: '8px',
            transition: 'background .12s ease',
          }}
        >
          Nutzungsbedingungen
        </a>
        <a
          onClick={go404}
          onMouseEnter={() => setCareerHover(true)}
          onMouseLeave={() => setCareerHover(false)}
          style={{
            fontSize: '13px',
            fontWeight: 800,
            color: careerHover ? 'oklch(85% 0.16 95)' : 'white',
            cursor: 'pointer',
            transition: 'color .12s ease',
          }}
        >
          Karriere
        </a>
        <button
          onClick={handleScrollTop}
          style={scrollBtnStyle}
        >
          Nach oben
        </button>
      </div>
    </footer>
  );
}
