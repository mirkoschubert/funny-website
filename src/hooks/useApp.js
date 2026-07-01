import { useState, useEffect, useRef, useCallback } from 'react';

export function useApp() {
  const [page, setPage] = useState('home');
  const [bootProgress, setBootProgress] = useState(0);
  const [bootPhase, setBootPhase] = useState('loading');
  const [cursorSeconds, setCursorSeconds] = useState(0);
  const [cursorFound, setCursorFound] = useState(false);
  const [heroJump, setHeroJump] = useState(null);
  const [, setScrollClicks] = useState(0);
  const [scrollMessage, setScrollMessage] = useState(false);
  const [scrollNudge, setScrollNudge] = useState(false);
  const [confettiPieces, setConfettiPieces] = useState([]);
  const [termsOpen, setTermsOpen] = useState(false);
  const [idle, setIdle] = useState({ visible: false, stage: 'ask' });
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [impressumMinutes, setImpressumMinutes] = useState(6);

  const bootTimerRef = useRef(null);
  const holdTimeoutRef = useRef(null);
  const jokeTimeoutRef = useRef(null);
  const impressumTimerRef = useRef(null);
  const idleTimeoutRef = useRef(null);
  const cursorIntervalRef = useRef(null);
  const confettiTimeoutRef = useRef(null);
  const scrollMsgTimeoutRef = useRef(null);
  const nudgeTimeoutRef = useRef(null);
  const audioCtxRef = useRef(null);
  const resetIdleRef = useRef(null);

  const go = useCallback((targetPage) => {
    setPage(targetPage);
  }, []);

  const goHome = useCallback(() => go('home'), [go]);
  const goImpressum = useCallback(() => go('impressum'), [go]);
  const go404 = useCallback(() => go('404'), [go]);

  const playMariachi = useCallback(() => {
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      const now = ctx.currentTime;
      const notes = [659.25, 783.99, 987.77, 1318.51];
      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.value = freq;
        const start = now + i * 0.12;
        gain.gain.setValueAtTime(0, start);
        gain.gain.linearRampToValueAtTime(0.18, start + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.25);
        osc.connect(gain).connect(ctx.destination);
        osc.start(start);
        osc.stop(start + 0.3);
      });
    } catch {
      // AudioContext not supported
    }
  }, []);

  const goKontakt = useCallback(() => {
    playMariachi();
    go('kontakt');
  }, [playMariachi, go]);

  const jumpHero = useCallback(() => {
    const dx = Math.floor(Math.random() * 160 - 80);
    const dy = Math.floor(Math.random() * 60 - 30);
    setHeroJump({ x: dx, y: dy });
  }, []);

  const handleCursorEnter = useCallback(() => {
    setCursorFound(found => {
      if (found) return found;
      clearInterval(cursorIntervalRef.current);
      cursorIntervalRef.current = setInterval(() => {
        setCursorSeconds(s => s + 1);
      }, 1000);
      return found;
    });
  }, []);

  const handleCursorLeave = useCallback(() => {
    clearInterval(cursorIntervalRef.current);
  }, []);

  const handleCursorClick = useCallback(() => {
    setCursorFound(found => {
      if (found) return found;
      clearInterval(cursorIntervalRef.current);
      return true;
    });
  }, []);

  const resetCursorGame = useCallback((e) => {
    if (e) e.stopPropagation();
    setCursorFound(false);
    setCursorSeconds(0);
  }, []);

  const submitContactForm = useCallback((e) => {
    e.preventDefault();
    setContactSubmitted(true);
  }, []);

  const resetContactForm = useCallback(() => {
    setContactSubmitted(false);
    setContactName('');
    setContactEmail('');
    setContactMessage('');
  }, []);

  const toggleTerms = useCallback(() => {
    setTermsOpen(open => !open);
  }, []);

  const fireConfetti = useCallback(() => {
    const colors = [
      'oklch(85% 0.16 95)',
      'oklch(58% 0.19 25)',
      'oklch(78% 0.15 145)',
      'oklch(75% 0.13 245)',
    ];
    const pieces = Array.from({ length: 28 }, () => ({
      id: Math.random(),
      left: Math.random() * 100,
      delay: Math.random() * 0.6,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setConfettiPieces(pieces);
    clearTimeout(confettiTimeoutRef.current);
    confettiTimeoutRef.current = setTimeout(() => setConfettiPieces([]), 3200);
  }, []);

  const handleScrollTop = useCallback(() => {
    setScrollClicks(prev => {
      const count = prev + 1;
      const phase = (count - 1) % 4;
      if (phase === 0) {
        window.scrollBy({ top: 3 });
        setScrollNudge(true);
        clearTimeout(nudgeTimeoutRef.current);
        nudgeTimeoutRef.current = setTimeout(() => setScrollNudge(false), 260);
      } else if (phase === 1) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (phase === 2) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        fireConfetti();
      } else {
        setScrollMessage(true);
        clearTimeout(scrollMsgTimeoutRef.current);
        scrollMsgTimeoutRef.current = setTimeout(() => setScrollMessage(false), 2500);
      }
      return count;
    });
  }, [fireConfetti]);

  const closeIdle = useCallback(() => {
    setIdle({ visible: false, stage: 'closed' });
    if (resetIdleRef.current) resetIdleRef.current();
  }, []);

  const idleYes = useCallback(() => {
    setIdle({ visible: true, stage: 'fact' });
  }, []);

  const idleNo = useCallback(() => {
    closeIdle();
  }, [closeIdle]);

  useEffect(() => {
    bootTimerRef.current = setInterval(() => {
      setBootProgress(cur => {
        if (cur >= 99) return cur;
        const next = Math.min(99, cur + Math.floor(Math.random() * 7 + 5));
        if (next >= 99) {
          clearInterval(bootTimerRef.current);
          holdTimeoutRef.current = setTimeout(() => {
            setBootPhase('joke');
            jokeTimeoutRef.current = setTimeout(() => {
              setBootProgress(100);
              setBootPhase('done');
            }, 950);
          }, 1400);
        }
        return next;
      });
    }, 180);

    return () => {
      clearInterval(bootTimerRef.current);
      clearTimeout(holdTimeoutRef.current);
      clearTimeout(jokeTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    impressumTimerRef.current = setInterval(() => {
      setImpressumMinutes(m => m + 1);
    }, 6000);
    return () => clearInterval(impressumTimerRef.current);
  }, []);

  useEffect(() => {
    const resetIdle = () => {
      clearTimeout(idleTimeoutRef.current);
      idleTimeoutRef.current = setTimeout(() => {
        setIdle(prev => prev.visible ? prev : { visible: true, stage: 'ask' });
      }, 25000);
    };
    resetIdleRef.current = resetIdle;
    const events = ['mousemove', 'keydown', 'click', 'scroll'];
    events.forEach(evt => window.addEventListener(evt, resetIdle));
    resetIdle();
    return () => {
      events.forEach(evt => window.removeEventListener(evt, resetIdle));
      clearTimeout(idleTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    return () => {
      clearInterval(cursorIntervalRef.current);
      clearTimeout(confettiTimeoutRef.current);
      clearTimeout(scrollMsgTimeoutRef.current);
      clearTimeout(nudgeTimeoutRef.current);
    };
  }, []);

  const navBaseStyle = {
    padding: '9px 18px',
    background: 'oklch(58% 0.19 25)',
    color: 'white',
    border: '3px solid #1a1a1a',
    borderRadius: '10px',
    fontFamily: 'Bangers, cursive',
    letterSpacing: '0.5px',
    fontSize: '17px',
    cursor: 'pointer',
    boxShadow: '3px 3px 0 #1a1a1a',
  };

  const navBtnStyle = { ...navBaseStyle, transition: 'transform .12s ease, box-shadow .12s ease' };

  const heroCtaStyle = {
    marginTop: '32px',
    padding: '15px 32px',
    background: 'oklch(85% 0.16 95)',
    color: '#1a1a1a',
    border: '3px solid #1a1a1a',
    borderRadius: '10px',
    fontFamily: 'Bangers, cursive',
    fontSize: '19px',
    letterSpacing: '0.5px',
    cursor: 'pointer',
    display: 'block',
    boxShadow: '5px 5px 0 #1a1a1a',
    transform: heroJump ? `translate(${heroJump.x}px, ${heroJump.y}px)` : 'translate(0px, 0px)',
    transition: 'transform 0.18s ease',
  };

  const scrollBtnStyle = {
    padding: '9px 16px',
    border: '3px solid #1a1a1a',
    background: 'white',
    color: '#1a1a1a',
    borderRadius: '10px',
    fontSize: '13px',
    fontWeight: 800,
    cursor: 'pointer',
    fontFamily: 'Nunito, sans-serif',
    boxShadow: '3px 3px 0 #1a1a1a',
    transform: scrollNudge ? 'translateY(4px)' : 'translateY(0px)',
    transition: 'transform .2s ease',
  };

  return {
    page,
    bootPhase,
    bootProgress,
    bootLabel: bootPhase === 'loading' ? bootProgress + '%' : bootPhase === 'joke' ? 'Nur Spass.' : '',
    cursorFound,
    cursorSeconds,
    heroCtaStyle,
    navBtnStyle,
    scrollBtnStyle,
    scrollMessage,
    confettiPieces,
    termsOpen,
    idle,
    contactName,
    contactEmail,
    contactMessage,
    contactSubmitted,
    impressumMinutes,
    goHome,
    goKontakt,
    goImpressum,
    go404,
    jumpHero,
    handleCursorEnter,
    handleCursorLeave,
    handleCursorClick,
    resetCursorGame,
    setContactName,
    setContactEmail,
    setContactMessage,
    submitContactForm,
    resetContactForm,
    toggleTerms,
    handleScrollTop,
    closeIdle,
    idleYes,
    idleNo,
  };
}
