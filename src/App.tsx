import { useCallback, useEffect, useRef, useState } from 'react';
import { SLIDES } from './slides';
import './App.css';

const W = 1280;
const H = 720;

export default function App() {
  const [cur, setCur] = useState(() => {
    const n = parseInt(location.hash.replace('#', ''), 10);
    return n >= 1 && n <= SLIDES.length ? n - 1 : 0;
  });
  const [dir, setDir] = useState(1);
  const [scale, setScale] = useState(1);
  const stageRef = useRef<HTMLDivElement>(null);

  const go = useCallback((n: number) => {
    const next = (n + SLIDES.length) % SLIDES.length;
    setDir(n > cur ? 1 : -1);
    setCur(next);
    history.replaceState(null, '', `#${next + 1}`);
  }, [cur]);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => {
      const { width, height } = e.contentRect;
      setScale(Math.min((width - 28) / W, (height - 28) / H));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (['ArrowRight', 'PageDown', ' '].includes(e.key)) { e.preventDefault(); go(cur + 1); }
      if (['ArrowLeft', 'PageUp'].includes(e.key)) { e.preventDefault(); go(cur - 1); }
      if (e.key === 'Home') go(0);
      if (e.key === 'End') go(SLIDES.length - 1);
      if (e.key === 'f') toggleFs();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [cur, go]);

  const toggleFs = () => {
    if (document.fullscreenElement) document.exitFullscreen();
    else document.documentElement.requestFullscreen?.();
  };

  const [activeMap, setActiveMap] = useState<{ name: string; desc: string; query: string; address: string } | null>(null);

  useEffect(() => {
    const onOpenMap = (e: Event) => {
      const customEvent = e as CustomEvent<{ name: string; desc: string; query: string; address: string }>;
      if (customEvent.detail) {
        setActiveMap(customEvent.detail);
      }
    };
    window.addEventListener('open-map', onOpenMap);
    return () => window.removeEventListener('open-map', onOpenMap);
  }, []);

  const s = SLIDES[cur];

  return (
    <main className="deck">
      <h1 className="sr-only">STS Group B — Health, Society, and HIV &amp; AIDS Education</h1>
      <div className="stage" ref={stageRef}>
        <div style={{ width: W * scale, height: H * scale }}>
          <div className="canvas" style={{ width: W, height: H, transform: `scale(${scale})`, transformOrigin: 'top left' }}>
            <div key={cur} className={`slide-anim ${dir > 0 ? 'fwd' : 'back'}`}>{s.render()}</div>
          </div>
        </div>
      </div>

      {activeMap && (
        <div className="map-modal-overlay" onClick={() => setActiveMap(null)}>
          <div className="map-modal" onClick={(e) => e.stopPropagation()}>
            <header className="map-modal-header">
              <div>
                <span className="map-badge">📍 Verified Healthcare Location</span>
                <h3>{activeMap.name}</h3>
                <p>{activeMap.address}</p>
              </div>
              <div className="map-modal-actions">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activeMap.query)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="map-ext-btn"
                >
                  Open in Google Maps ↗
                </a>
                <button className="map-close-btn" onClick={() => setActiveMap(null)} aria-label="Close Map">
                  ✕
                </button>
              </div>
            </header>
            <div className="map-iframe-container">
              <iframe
                title={activeMap.name}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(activeMap.query)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                allowFullScreen
              />
            </div>
            <footer className="map-modal-footer">
              <span>{activeMap.desc}</span>
              <span className="map-tag">100% Free &amp; Confidential Testing Hub</span>
            </footer>
          </div>
        </div>
      )}

      <nav className="bar" aria-label="Slide controls">
        <div className="bar-l">
          <span className="badge">STS W15 · GROUP B</span>
          <span className="role"><b>{s.speaker}</b> · {s.role}</span>
        </div>
        <div className="bar-c">
          {SLIDES.map((_, k) => (
            <button key={k} id={`dot-${k + 1}`} className={`pdot ${k === cur ? 'on' : ''} ${k < cur ? 'done' : ''}`} onClick={() => go(k)} aria-label={`Go to slide ${k + 1}`} />
          ))}
        </div>
        <div className="bar-r">
          <button id="prev-slide" className="nav-btn" onClick={() => go(cur - 1)} aria-label="Previous slide">←</button>
          <span className="count">{String(cur + 1).padStart(2, '0')} <i>/ {SLIDES.length}</i></span>
          <button id="next-slide" className="nav-btn primary" onClick={() => go(cur + 1)} aria-label="Next slide">→</button>
          <button id="fullscreen" className="nav-btn" onClick={toggleFs} aria-label="Fullscreen">⛶</button>
        </div>
      </nav>
    </main>
  );
}
