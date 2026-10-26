import { useRef, useState } from 'react';
import type { PointerEvent as RPE } from 'react';
import { ScaledCard } from './CarouselCards';

export type Platform = 'ig' | 'fb';

const CAPTION =
  "Getting tested isn't something to whisper about — it's normal, smart self-care, Greyhounds! 🐾❤️ Swipe to separate HIV facts from fiction, learn how RA 11166 protects your privacy starting at age 15, and save our guide to FREE, 100% confidential testing right here in Naga City & CamSur.";
const TAGS = '#UNCCares #KnowYourStatusBicol #RA11166 #EndTheStigma #NagaCityHealth';

const Icon = {
  heart: (filled: boolean) => (
    <svg viewBox="0 0 24 24" width="24" height="24" className={filled ? 'liked' : ''}>
      <path
        d="M16.8 3.5c-2 0-3.6 1-4.8 2.7C10.8 4.5 9.2 3.5 7.2 3.5 4.3 3.5 2 5.9 2 8.9c0 5.3 8.2 10.9 10 11.6 1.8-.7 10-6.3 10-11.6 0-3-2.3-5.4-5.2-5.4z"
        fill={filled ? '#ff3040' : 'none'}
        stroke={filled ? '#ff3040' : 'currentColor'}
        strokeWidth="1.9"
      />
    </svg>
  ),
  comment: (
    <svg viewBox="0 0 24 24" width="24" height="24"><path d="M20.7 16.4A9.5 9.5 0 1 0 17 20.3L21.5 21.5Z" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" /></svg>
  ),
  send: (
    <svg viewBox="0 0 24 24" width="24" height="24"><path d="M22 3 9.2 10.1M22 3l-7 18-3.8-8.3L2 9.6Z" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" /></svg>
  ),
  save: (filled: boolean) => (
    <svg viewBox="0 0 24 24" width="24" height="24"><path d="M19 21 12 15.5 5 21V3h14Z" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" /></svg>
  ),
  verified: (
    <svg viewBox="0 0 40 40" width="13" height="13"><path fill="#0095f6" d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Z" /><path fill="#fff" d="m17.2 27.5-6.7-6.4 2.4-2.5 4.2 4 9.4-9.4 2.4 2.5Z" /></svg>
  ),
};

interface Props {
  platform: Platform;
  width?: number;
  index?: number;
  onIndexChange?: (i: number) => void;
}

export function SocialPost({ platform, width = 340, index, onIndexChange }: Props) {
  const [inner, setInner] = useState(0);
  const i = index ?? inner;
  const setI = (n: number) => {
    const v = Math.max(0, Math.min(2, n));
    setInner(v);
    onIndexChange?.(v);
  };
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [burst, setBurst] = useState(0);
  const [more, setMore] = useState(false);
  const [drag, setDrag] = useState(0);
  const start = useRef<number | null>(null);
  const lastTap = useRef(0);

  const down = (e: RPE) => {
    start.current = e.clientX;
    (e.target as Element).setPointerCapture?.(e.pointerId);
  };
  const move = (e: RPE) => start.current !== null && setDrag(e.clientX - start.current);
  const up = () => {
    if (start.current === null) return;
    if (drag < -40) setI(i + 1);
    else if (drag > 40) setI(i - 1);
    else {
      const now = Date.now();
      if (now - lastTap.current < 300) {
        setLiked(true);
        setBurst((b) => b + 1);
      }
      lastTap.current = now;
    }
    start.current = null;
    setDrag(0);
  };

  const media = (
    <div className="sp-media" style={{ width, height: width * 1.25 }} onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerCancel={up}>
      <div className="sp-track" style={{ transform: `translateX(${-i * width + drag}px)`, transition: drag ? 'none' : undefined }}>
        {[0, 1, 2].map((k) => (
          <ScaledCard key={k} index={k} width={width} />
        ))}
      </div>
      {platform === 'ig' && <span className="sp-pill">{i + 1}/3</span>}
      {i > 0 && <button className="sp-arrow l" onClick={(e) => { e.stopPropagation(); setI(i - 1); }} onPointerDown={(e) => e.stopPropagation()} aria-label="Previous image">‹</button>}
      {i < 2 && <button className="sp-arrow r" onClick={(e) => { e.stopPropagation(); setI(i + 1); }} onPointerDown={(e) => e.stopPropagation()} aria-label="Next image">›</button>}
      {burst > 0 && <span key={burst} className="sp-burst">❤</span>}
      {platform === 'fb' && (
        <div className="fb-dots">{[0, 1, 2].map((k) => <span key={k} className={k === i ? 'on' : ''} />)}</div>
      )}
    </div>
  );

  if (platform === 'fb') {
    return (
      <article className="sp fb" style={{ width }}>
        <header className="fb-head">
          <div className="sp-avatar plain">🐾</div>
          <div className="fb-who">
            <b>UNC Cares — Youth Health {Icon.verified}</b>
            <span>2h · 🌐</span>
          </div>
          <span className="sp-dots">···</span>
        </header>
        <p className="fb-cap">
          {more ? CAPTION : CAPTION.slice(0, 120) + '… '}
          {!more && <button onClick={() => setMore(true)}>See more</button>}
          {more && <span className="tags"> {TAGS}</span>}
        </p>
        {media}
        <div className="fb-stats">
          <span><i className="r like">👍</i><i className="r love">❤️</i> {liked ? 'You and 2.4K others' : '2.4K'}</span>
          <span>312 comments · 89 shares</span>
        </div>
        <div className="fb-actions">
          <button className={liked ? 'on' : ''} onClick={() => setLiked(!liked)}>👍 Like</button>
          <button>💬 Comment</button>
          <button>↗ Share</button>
        </div>
      </article>
    );
  }

  return (
    <article className="sp ig" style={{ width }}>
      <header className="ig-head">
        <div className="sp-avatar"><span>🐾</span></div>
        <div className="ig-who">
          <b>unc.cares {Icon.verified}</b>
          <span>University of Nueva Caceres</span>
        </div>
        <span className="sp-dots">···</span>
      </header>
      {media}
      <div className="ig-actions">
        <button onClick={() => setLiked(!liked)} aria-label="Like">{Icon.heart(liked)}</button>
        <button aria-label="Comment">{Icon.comment}</button>
        <button aria-label="Share">{Icon.send}</button>
        <div className="ig-dots">{[0, 1, 2].map((k) => <span key={k} className={k === i ? 'on' : ''} />)}</div>
        <button className="save" onClick={() => setSaved(!saved)} aria-label="Save">{Icon.save(saved)}</button>
      </div>
      <div className="ig-meta">
        <p className="likes">{(liked ? 1285 : 1284).toLocaleString()} likes</p>
        <p className="cap">
          <b>unc.cares</b> {more ? CAPTION : CAPTION.slice(0, 70) + '… '}
          {!more && <button onClick={() => setMore(true)}>more</button>}
          {more && <span className="tags"> {TAGS}</span>}
        </p>
        <p className="muted">View all 86 comments</p>
        <p className="time">2 hours ago</p>
      </div>
    </article>
  );
}
