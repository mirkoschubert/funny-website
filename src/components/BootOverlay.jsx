export default function BootOverlay({ bootProgress, bootLabel }) {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'oklch(58% 0.19 25)',
      backgroundImage: 'radial-gradient(rgba(255,255,255,0.3) 3px, transparent 3.5px)',
      backgroundSize: '26px 26px',
      zIndex: 10000,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '22px',
    }}>
      <div style={{
        fontFamily: 'Bangers, cursive',
        fontSize: '40px',
        color: 'oklch(96% 0.02 95)',
        letterSpacing: '1px',
        animation: 'bounceLogo 1s ease-in-out infinite',
        WebkitTextStroke: '2px #1a1a1a',
      }}>
        Papierkorb &amp; Partner
      </div>
      <div style={{
        width: '280px',
        height: '22px',
        background: 'white',
        borderRadius: '6px',
        overflow: 'hidden',
        border: '3px solid #1a1a1a',
        boxShadow: '4px 4px 0 #1a1a1a',
      }}>
        <div style={{
          height: '100%',
          background: 'oklch(85% 0.16 95)',
          transition: 'width .2s ease',
          width: bootProgress + '%',
        }} />
      </div>
      <div style={{
        color: 'white',
        fontFamily: 'Bangers, cursive',
        fontSize: '20px',
        minHeight: '24px',
        animation: 'blink90s 1s steps(1) infinite',
      }}>
        {bootLabel}
      </div>
    </div>
  );
}
