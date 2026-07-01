export default function Impressum({ impressumMinutes }) {
  return (
    <div style={{ padding: '70px 48px 110px', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{
        fontFamily: 'Bangers, cursive',
        fontSize: '42px',
        marginBottom: '24px',
        letterSpacing: '0.5px',
        color: 'oklch(58% 0.19 25)',
        WebkitTextStroke: '1px #1a1a1a',
      }}>
        Impressum
      </div>
      <div style={{
        background: 'white',
        border: '3px solid #1a1a1a',
        borderRadius: '14px',
        boxShadow: '6px 6px 0 #1a1a1a',
        padding: '26px 30px',
        fontSize: '15px',
        fontWeight: 700,
        lineHeight: 1.9,
        color: '#1a1a1a',
      }}>
        <div>Angaben gemäß § 5 TMG:</div>
        <div style={{ marginTop: '14px' }}>
          Papierkorb & Partner GmbH<br />
          Musterstraße 12<br />
          20095 Hamburg
        </div>
        <div style={{ marginTop: '14px' }}>
          Vertreten durch: Horst Bümmel, Geschäftsführer
        </div>
        <div style={{ marginTop: '14px' }}>
          Kontakt: Telefon zwecklos, E-Mail siehe Kontaktformular
        </div>
        <div style={{ marginTop: '14px' }}>
          Registergericht: Amtsgericht Irgendwo, HRB 000000<br />
          Umsatzsteuer-ID: DE000000000
        </div>
      </div>
      <div style={{
        marginTop: '32px',
        padding: '16px 22px',
        background: 'oklch(85% 0.16 95)',
        border: '3px solid #1a1a1a',
        borderRadius: '10px',
        boxShadow: '5px 5px 0 #1a1a1a',
        display: 'inline-block',
        transform: 'rotate(-2deg)',
      }}>
        <div style={{ fontSize: '14px', fontWeight: 900 }}>
          Letzte Aktualisierung: vor {impressumMinutes} Minuten
        </div>
        <div style={{ fontSize: '12px', fontWeight: 700, color: '#3a2413', marginTop: '4px' }}>
          (Wir aktualisieren wirklich sehr oft.)
        </div>
      </div>
    </div>
  );
}
