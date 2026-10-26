import type { ReactElement } from 'react';

const Brand = ({ n, light }: { n: number; light?: boolean }) => (
  <div className={`cc-top ${light ? 'is-light' : ''}`}>
    <span className="cc-brand">
      <span className="cc-logo">UNC</span> Youth Health
    </span>
    <span className="cc-count">{n}/3</span>
  </div>
);

export function CardOne() {
  return (
    <div className="cc cc-1">
      <div className="cc-glow" />
      <Brand n={1} />
      <div className="cc-body">
        <span className="cc-kicker">Zero judgment · Pure science</span>
        <h3 className="cc-title">
          Let's talk about <em>HIV.</em>
          <br />Myths vs. Facts
        </h3>
        <div className="cc-mf">
          <p className="m">✕ Dorm CRs, utensils, sweat, hugs or mosquitoes spread HIV.</p>
          <p className="f">✓ HIV only passes through blood, semen, vaginal/rectal fluids or breast milk.</p>
        </div>
        <div className="cc-mf">
          <p className="m">✕ You can tell someone has HIV by how they look.</p>
          <p className="f">✓ Most people feel fine for years. Testing is the only way to know.</p>
        </div>
        <div className="cc-uu">
          <b>U = U</b>
          <span>Undetectable = Untransmittable. On free daily ART, PLHIV can't pass HIV sexually.</span>
        </div>
      </div>
      <div className="cc-foot">
        <span>Verified · DOH &amp; WHO</span>
        <span>Swipe → your rights</span>
      </div>
    </div>
  );
}

export function CardTwo() {
  const rows = [
    ['"I\'m 16/17 — they\'ll need my parents\' signature."', 'Sec. 29', 'Ages 15+ can get tested WITHOUT parental consent.'],
    ['"My school or classmates will find out."', 'Sec. 30 & 50', '100% confidential. Leaking a status = up to 5 yrs in prison.'],
    ['"It could hurt my enrollment or scholarship."', 'Sec. 49', 'Schools cannot expel, refuse, or withhold scholarships.'],
  ];
  return (
    <div className="cc cc-2">
      <div className="cc-glow gold" />
      <Brand n={2} />
      <div className="cc-body">
        <span className="cc-kicker gold">Republic Act No. 11166</span>
        <h3 className="cc-title">
          Nervous to get tested? <em className="gold">The law has your back.</em>
        </h3>
        {rows.map(([m, s, f]) => (
          <div className="cc-law" key={s}>
            <p className="m">{m}</p>
            <p className="f">
              <span className="sec">{s}</span>
              {f}
            </p>
          </div>
        ))}
      </div>
      <div className="cc-foot">
        <span>PH HIV &amp; AIDS Policy Act</span>
        <span>Swipe → Naga clinics</span>
      </div>
    </div>
  );
}

export function CardThree() {
  return (
    <div className="cc cc-3">
      <Brand n={3} light />
      <div className="cc-body">
        <span className="cc-kicker sage">Free · Private · Judgment-free</span>
        <h3 className="cc-title dark">
          Where to get tested <em>near UNC</em>
        </h3>
        <div className="cc-clinic hl">
          <b>📍 Naga City Hygiene Clinic</b>
          <span>City Health Office, City Hall Compound · Mon–Fri 8AM–5PM</span>
        </div>
        <div className="cc-clinic">
          <b>📍 BMC SAGIP Clinic</b>
          <span>DOH Treatment Hub · Testing, PrEP/PEP &amp; free ART</span>
        </div>
        <div className="cc-clinic">
          <b>📍 CamSur Rural Health Units</b>
          <span>Ask your municipal RHU for free screening &amp; referral</span>
        </div>
        <div className="cc-steps">
          <div><i>1</i>Private chat</div>
          <div><i>2</i>Finger-prick</div>
          <div><i>3</i>Results ~20 min</div>
        </div>
      </div>
      <div className="cc-foot dark">
        <span>₱0 · Bring any valid ID</span>
        <span>Save this 🔖</span>
      </div>
    </div>
  );
}

export const CARDS: (() => ReactElement)[] = [CardOne, CardTwo, CardThree];

/** Renders a card at an arbitrary width by scaling the 360px design. */
export function ScaledCard({ index, width }: { index: number; width: number }) {
  const C = CARDS[index];
  const s = width / 360;
  return (
    <div style={{ width, height: width * 1.25, overflow: 'hidden', flexShrink: 0 }}>
      <div style={{ transform: `scale(${s})`, transformOrigin: 'top left', width: 360, height: 450 }}>
        <C />
      </div>
    </div>
  );
}
