export default function Confetti({ pieces }) {
  return pieces.map(piece => (
    <div
      key={piece.id}
      style={{
        position: 'fixed',
        top: '-20px',
        left: piece.left + '%',
        width: '10px',
        height: '14px',
        background: piece.color,
        zIndex: 9998,
        animation: `confettiFall 2.4s ease-in forwards`,
        animationDelay: piece.delay + 's',
      }}
    />
  ));
}
