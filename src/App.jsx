import { useApp } from './hooks/useApp';
import BootOverlay from './components/BootOverlay';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Kontakt from './components/pages/Kontakt';
import Impressum from './components/pages/Impressum';
import NotFound from './components/pages/NotFound';
import TermsModal from './components/overlays/TermsModal';
import IdlePopup from './components/overlays/IdlePopup';
import ScrollMessage from './components/overlays/ScrollMessage';
import Confetti from './components/overlays/Confetti';

export default function App() {
  const app = useApp();

  return (
    <div style={{
      fontFamily: 'Nunito, sans-serif',
      background: 'oklch(96% 0.015 90)',
      backgroundImage: 'radial-gradient(oklch(88% 0.02 90) 2px, transparent 2.5px)',
      backgroundSize: '24px 24px',
      color: '#1a1a1a',
      minHeight: '100vh',
      position: 'relative',
    }}>
      {app.bootPhase !== 'done' && (
        <BootOverlay bootProgress={app.bootProgress} bootLabel={app.bootLabel} />
      )}

      <Header
        goHome={app.goHome}
        goKontakt={app.goKontakt}
        goImpressum={app.goImpressum}
        navBtnStyle={app.navBtnStyle}
      />

      <main>
        {app.page === 'home' && (
          <Home
            heroCtaStyle={app.heroCtaStyle}
            jumpHero={app.jumpHero}
            cursorFound={app.cursorFound}
            cursorSeconds={app.cursorSeconds}
            handleCursorEnter={app.handleCursorEnter}
            handleCursorLeave={app.handleCursorLeave}
            handleCursorClick={app.handleCursorClick}
            resetCursorGame={app.resetCursorGame}
          />
        )}
        {app.page === 'kontakt' && (
          <Kontakt
            contactName={app.contactName}
            contactEmail={app.contactEmail}
            contactMessage={app.contactMessage}
            contactSubmitted={app.contactSubmitted}
            setContactName={app.setContactName}
            setContactEmail={app.setContactEmail}
            setContactMessage={app.setContactMessage}
            submitContactForm={app.submitContactForm}
            resetContactForm={app.resetContactForm}
          />
        )}
        {app.page === 'impressum' && (
          <Impressum impressumMinutes={app.impressumMinutes} />
        )}
        {app.page === '404' && (
          <NotFound goHome={app.goHome} />
        )}
      </main>

      <Footer
        toggleTerms={app.toggleTerms}
        go404={app.go404}
        handleScrollTop={app.handleScrollTop}
        scrollBtnStyle={app.scrollBtnStyle}
      />

      {app.termsOpen && <TermsModal onClose={app.toggleTerms} />}
      {app.idle.visible && (
        <IdlePopup
          stage={app.idle.stage}
          onClose={app.closeIdle}
          onYes={app.idleYes}
          onNo={app.idleNo}
        />
      )}
      {app.scrollMessage && <ScrollMessage />}
      <Confetti pieces={app.confettiPieces} />
    </div>
  );
}
