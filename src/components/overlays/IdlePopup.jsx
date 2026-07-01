import { useState } from 'react';

export default function IdlePopup({ stage, onClose, onYes, onNo }) {
  const [yesHover, setYesHover] = useState(false);
  const [noHover, setNoHover] = useState(false);

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      width: '280px',
      background: 'white',
      border: '4px solid #1a1a1a',
      borderRadius: '16px',
      boxShadow: '6px 6px 0 #1a1a1a',
      padding: '20px',
      zIndex: 9998,
    }}>
      <div
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '8px',
          right: '12px',
          cursor: 'pointer',
          color: '#1a1a1a',
          fontWeight: 900,
          fontSize: '16px',
          lineHeight: 1,
        }}
      >
        &#x2715;
      </div>
      {stage === 'ask' ? (
        <>
          <div style={{ fontFamily: 'Bangers, cursive', fontSize: '19px', marginBottom: '6px' }}>
            Hey. Noch da?
          </div>
          <div style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a', marginBottom: '16px' }}>
            Soll ich dir einen witzigen Fakt &uuml;ber Ziegen erz&auml;hlen?
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={onYes}
              onMouseEnter={() => setYesHover(true)}
              onMouseLeave={() => setYesHover(false)}
              style={{
                flex: 1,
                padding: '9px',
                background: 'oklch(78% 0.15 145)',
                color: '#1a1a1a',
                border: '3px solid #1a1a1a',
                borderRadius: '10px',
                cursor: 'pointer',
                fontFamily: 'Bangers, cursive',
                fontSize: '15px',
                boxShadow: yesHover ? '1px 1px 0 #1a1a1a' : '3px 3px 0 #1a1a1a',
                transform: yesHover ? 'translate(2px,2px)' : 'none',
                transition: 'transform .12s ease, box-shadow .12s ease',
              }}
            >
              Ja
            </button>
            <button
              onClick={onNo}
              onMouseEnter={() => setNoHover(true)}
              onMouseLeave={() => setNoHover(false)}
              style={{
                flex: 1,
                padding: '9px',
                background: 'white',
                border: '3px solid #1a1a1a',
                borderRadius: '10px',
                cursor: 'pointer',
                fontFamily: 'Bangers, cursive',
                fontSize: '15px',
                boxShadow: noHover ? '1px 1px 0 #1a1a1a' : '3px 3px 0 #1a1a1a',
                transform: noHover ? 'translate(2px,2px)' : 'none',
                transition: 'transform .12s ease, box-shadow .12s ease',
              }}
            >
              Nein
            </button>
          </div>
        </>
      ) : (
        <div style={{ fontSize: '14px', fontWeight: 700, color: '#1a1a1a', lineHeight: 1.6 }}>
          Ziegen haben einen deutschen Akzent, wenn sie meckern.
        </div>
      )}
    </div>
  );
}
