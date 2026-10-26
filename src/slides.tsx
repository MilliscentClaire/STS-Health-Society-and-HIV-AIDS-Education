import { useState } from 'react';
import type { ReactNode } from 'react';
import { SocialPost } from './components/SocialPost';
import type { Platform } from './components/SocialPost';
import { ScaledCard } from './components/CarouselCards';

export interface SlideDef {
  role: string;
  speaker: string;
  dark?: boolean;
  render: () => ReactNode;
}

function Shell(p: { eyebrow: string; title: ReactNode; speaker: string; footL: ReactNode; footR: ReactNode; children: ReactNode; dark?: boolean }) {
  return (
    <div className={`slide ${p.dark ? 'dark' : ''}`}>
      <header className="s-head">
        <div>
          <span className="eyebrow">{p.eyebrow}</span>
          <h2 className="s-title">{p.title}</h2>
        </div>
        <span className="speaker"><i />{p.speaker}</span>
      </header>
      <div className="s-body">{p.children}</div>
      <footer className="s-foot"><span>{p.footL}</span><span>{p.footR}</span></footer>
    </div>
  );
}

function PostToggle({ index, width = 262 }: { index?: number; width?: number }) {
  const [pf, setPf] = useState<Platform>('ig');
  const [i, setI] = useState(index ?? 0);
  return (
    <div className="post-wrap">
      <div className="seg">
        <button className={pf === 'ig' ? 'on' : ''} onClick={() => setPf('ig')}>Instagram</button>
        <button className={pf === 'fb' ? 'on' : ''} onClick={() => setPf('fb')}>Facebook</button>
      </div>
      <div className="phone">
        <SocialPost platform={pf} width={width} index={i} onIndexChange={setI} />
      </div>
    </div>
  );
}

const Rationale = ({ title, items }: { title: string; items: [string, ReactNode][] }) => (
  <div className="rationale">
    <h3>{title}</h3>
    {items.map(([h, b], k) => (
      <div className="r-item" key={h}>
        <span className="r-num">0{k + 1}</span>
        <div><b>{h}</b><p>{b}</p></div>
      </div>
    ))}
  </div>
);

const P1 = 'Part 1 · Theoretical Overview';

export const SLIDES: SlideDef[] = [
  {
    role: 'Title & Theoretical Roadmap', speaker: 'Group B', dark: true,
    render: () => (
      <div className="slide dark title-slide">
        <div className="ribbon-art" aria-hidden>
          <svg viewBox="0 0 200 300"><path d="M100 20c-30 0-45 25-45 50 0 30 20 55 45 90 25-35 45-60 45-90 0-25-15-50-45-50Z M100 160 40 280 M100 160l60 120" fill="none" stroke="url(#rg)" strokeWidth="26" strokeLinecap="round" /><defs><linearGradient id="rg" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stopColor="#ff5a67" /><stop offset="1" stopColor="#8f1420" /></linearGradient></defs></svg>
        </div>
        <header className="s-head">
          <span className="eyebrow light">Science, Technology & Society · Week 15</span>
          <span className="chip-glass">University of Nueva Caceres</span>
        </header>
        <div className="title-main">
          <span className="chip-red">🎗️ Group B Presentation</span>
          <h1>Health, Society &amp;<br /><em>HIV &amp; AIDS</em> Education</h1>
          <p className="lede">Connecting clinical science, Republic Act No. 11166, and empathetic digital communication for the Bicolano youth.</p>
          <div className="title-parts">
            <div><span>Part 1</span><b>Theoretical Overview</b><p>HIV vs. AIDS · Health Tech &amp; U=U · RA 11166 · Youth Stigma</p></div>
            <div><span className="gold">Part 2</span><b>Live Group Output</b><p>AI Myth &amp; Language Audit · UNC 3-slide IG/FB Campaign</p></div>
          </div>
        </div>
        <footer className="s-foot"><span>Group B · 10 Members</span><span>← → to navigate</span></footer>
      </div>
    ),
  },
  {
    role: 'Part 1A · HIV vs. AIDS & Stages of Infection', speaker: 'Boletic',
    render: () => (
      <Shell
        eyebrow="Part 1 · Theoretical Overview (Boletic)"
        title={<>HIV vs. AIDS &amp; <em>Stages of Infection</em></>}
        speaker="Boletic"
        footL={<>Source: <a href="https://www.who.int/news-room/fact-sheets/detail/hiv-aids" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>WHO HIV/AIDS Fact Sheet</a></>}
        footR="Boletic · Slide 1 of 3"
      >
        <div className="vs">
          <div className="vs-card hiv">
            <div className="vs-top"><span className="tag gold">The virus</span><span className="big">HIV</span></div>
            <h3>Human Immunodeficiency Virus</h3>
            <ul>
              <li><b>Definition:</b> A virus that specifically attacks the human immune system, especially <b>CD4 cells</b> (T-helper lymphocytes).</li>
              <li><b>Mechanics:</b> Uses CD4 cells to multiply, gradually impairing the body's natural defense network.</li>
            </ul>
          </div>
          <div className="vs-mid">VS</div>
          <div className="vs-card aids">
            <div className="vs-top"><span className="tag red">Late-stage syndrome</span><span className="big">AIDS</span></div>
            <h3>Acquired Immunodeficiency Syndrome</h3>
            <ul>
              <li><b>Definition:</b> The most advanced clinical stage of HIV infection.</li>
              <li><b>Impact:</b> Causes severe immune system damage, leading to life-threatening opportunistic infections.</li>
            </ul>
          </div>
        </div>

        <div className="timeline">
          <div>
            <i>1</i>
            <div>
              <b>Acute Stage</b>
              <span>Rapid viral multiplication; flu-like symptoms.</span>
            </div>
          </div>
          <div>
            <i>2</i>
            <div>
              <b>Chronic Stage</b>
              <span>Virus active; may show zero symptoms for years.</span>
            </div>
          </div>
          <div className="end">
            <i>3</i>
            <div>
              <b>AIDS Stage</b>
              <span>Severe immune damage; high infection vulnerability.</span>
            </div>
          </div>
        </div>

        <div style={{ background: '#fef3c7', border: '1px solid #f59e0b', borderRadius: '12px', padding: '10px 16px', fontSize: '13px', color: '#92400e', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <b style={{ color: '#b45309' }}>💡 Key Point:</b>
          <span>HIV does <b>not</b> always progress to AIDS. Modern Antiretroviral Therapy (ART) suppresses the virus and completely prevents progression.</span>
        </div>
      </Shell>
    ),
  },
  {
    role: 'Part 1A · Immune System, Prevention & Treatment', speaker: 'Boletic',
    render: () => (
      <Shell
        eyebrow="Part 1 · Theoretical Overview (Boletic)"
        title={<>Effects on the <em>Immune System</em>, Prevention &amp; Treatment</>}
        speaker="Boletic"
        footL={<>Sources: <a href="https://www.who.int/news-room/fact-sheets/detail/hiv-aids" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>WHO</a> &amp; <a href="https://lawphil.net/statutes/repacts/ra2018/ra_11166_2018.html" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>RA 11166</a></>}
        footR="Boletic · Slide 2 of 3"
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          <div className="tech-card red">
            <span className="tnum">01</span>
            <h3>How HIV Affects the Body</h3>
            <ul style={{ listStyle: 'none', display: 'grid', gap: '8px', fontSize: '13px', color: '#4a3d38', paddingLeft: 0 }}>
              <li style={{ paddingLeft: '16px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--red)' }}>•</span>
                Attacks <b>CD4 T-helper cells</b>, the master regulators of immune defense.
              </li>
              <li style={{ paddingLeft: '16px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--red)' }}>•</span>
                Hijacks these host cells to reproduce and spread.
              </li>
              <li style={{ paddingLeft: '16px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--red)' }}>•</span>
                Progressively weakens the body's ability to fight opportunistic infections.
              </li>
            </ul>
            <span className="tfoot">Pathology &amp; Mechanism</span>
          </div>

          <div className="tech-card gold">
            <span className="tnum">02</span>
            <h3>Monitoring &amp; Treatment</h3>
            <ul style={{ listStyle: 'none', display: 'grid', gap: '8px', fontSize: '13px', color: '#4a3d38', paddingLeft: 0 }}>
              <li style={{ paddingLeft: '16px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, color: '#c58612' }}>•</span>
                <b>CD4 Count:</b> Quantifies active immune system strength and defense reserve.
              </li>
              <li style={{ paddingLeft: '16px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, color: '#c58612' }}>•</span>
                <b>Viral Load:</b> Measures the actual amount of HIV circulating in the blood.
              </li>
              <li style={{ paddingLeft: '16px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, color: '#c58612' }}>•</span>
                <b>Antiretroviral Therapy (ART):</b> Daily regimen that suppresses HIV replication and protects immune health.
              </li>
            </ul>
            <span className="tfoot">Clinical Management</span>
          </div>

          <div className="tech-card sage">
            <span className="tnum">03</span>
            <h3>Prevention Measures</h3>
            <ul style={{ listStyle: 'none', display: 'grid', gap: '8px', fontSize: '13px', color: '#4a3d38', paddingLeft: 0 }}>
              <li style={{ paddingLeft: '16px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--sage)' }}>•</span>
                Use condoms correctly and consistently during every encounter.
              </li>
              <li style={{ paddingLeft: '16px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--sage)' }}>•</span>
                Consider biomedical <b>PrEP</b> (pre-exposure) and <b>PEP</b> (post-exposure).
              </li>
              <li style={{ paddingLeft: '16px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--sage)' }}>•</span>
                Avoid sharing needles, syringes, or injection equipment.
              </li>
              <li style={{ paddingLeft: '16px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--sage)' }}>•</span>
                Get routinely tested and seek early medical counseling.
              </li>
            </ul>
            <span className="tfoot">Risk Reduction</span>
          </div>
        </div>

        <div style={{ background: '#170c0e', color: '#fff', borderRadius: '14px', padding: '12px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
          <div>
            <span style={{ background: '#f2b544', color: '#170c0e', fontSize: '10px', fontWeight: 800, padding: '2px 8px', borderRadius: '4px', textTransform: 'uppercase', marginRight: '8px' }}>
              Philippine Legal Framework
            </span>
            <span style={{ fontSize: '12.5px', color: '#e7ddd0' }}>
              <b>Republic Act No. 11166:</b> Promotes national HIV prevention, testing, free treatment, strict confidentiality, and civil rights against discrimination.
            </span>
          </div>
          <span style={{ fontSize: '11px', color: '#ffd27a', whiteSpace: 'nowrap' }}>Official Gazette 2018</span>
        </div>
      </Shell>
    ),
  },
  {
    role: 'Part 1A · Biology & Clinical Distinction (Deep Dive)', speaker: 'Boletic',
    render: () => (
      <Shell eyebrow={P1} title={<>HIV vs. AIDS: <em>Clinical &amp; Biological Distinction</em></>} speaker="Boletic" footL="Source: WHO & DOH" footR="Boletic · Slide 3 of 3">
        <div className="vs">
          <div className="vs-card hiv">
            <div className="vs-top"><span className="tag gold">The virus</span><span className="big">HIV</span></div>
            <h3>Human Immunodeficiency Virus</h3>
            <ul>
              <li><b>What it is:</b> A retrovirus that specifically targets and depletes <b>CD4 T-cells</b> (the immune system's command center).</li>
              <li><b>Transmission Routes:</b> Only via specific bodily fluids — blood, semen, pre-seminal fluid, vaginal/rectal fluids, and breast milk.</li>
              <li><b>Clinical Reality:</b> Many people living with HIV (PLHIV) look and feel completely healthy for years during the asymptomatic stage.</li>
              <li><b>Key Takeaway:</b> Having HIV does <em>not</em> mean you automatically have AIDS.</li>
            </ul>
          </div>
          <div className="vs-mid">VS</div>
          <div className="vs-card aids">
            <div className="vs-top"><span className="tag red">Late-stage syndrome</span><span className="big">AIDS</span></div>
            <h3>Acquired Immunodeficiency Syndrome</h3>
            <ul>
              <li><b>What it is:</b> The advanced clinical stage (Stage 3) of <em>untreated</em> HIV infection.</li>
              <li><b>Clinical Threshold:</b> Diagnosed when CD4 count drops below <b>200 cells/mm³</b> or when opportunistic infections (e.g., severe TB) appear.</li>
              <li><b>Not Contagious on Its Own:</b> You cannot "catch AIDS" — only the HIV virus is transmissible.</li>
              <li><b>Reversible Progression:</b> With modern free treatment, most PLHIV never progress to AIDS.</li>
            </ul>
          </div>
        </div>
        <div className="timeline">
          <div><i>1</i><b>Acute HIV</b><span>2–4 weeks</span></div>
          <div><i>2</i><b>Chronic / Asymptomatic</b><span>Years</span></div>
          <div className="end"><i>3</i><b>AIDS</b><span>Preventable via ART</span></div>
        </div>
      </Shell>
    ),
  },
  {
    role: 'Part 1B · Health Technology & U=U', speaker: 'De Lima',
    render: () => (
      <Shell eyebrow={P1} title={<>Modern health tech &amp; the <em>U=U</em> consensus</>} speaker="De Lima" footL="HIV went from a fatal 1980s crisis to a manageable condition." footR="WHO Policy Brief · DOH Guidelines">
        <div className="tech">
          {[
            ['01', 'Rapid Diagnostic Tests', 'Finger-prick & self-test kits with results in 15–20 minutes at local hygiene clinics.', 'Fast · point-of-care', 'red'],
            ['02', 'PrEP & PEP', 'PrEP before exposure cuts sexual risk ~99%. PEP: 28-day regimen started within 72 hours.', 'Biomedical prevention', 'gold'],
            ['03', 'Antiretroviral Therapy', 'Daily pill that blocks replication and restores CD4 — 100% FREE at DOH hubs like BMC.', 'Chronic care', 'sage'],
          ].map(([n, h, b, t, c]) => (
            <div className={`tech-card ${c}`} key={n}>
              <span className="tnum">{n}</span><h3>{h}</h3><p>{b}</p><span className="tfoot">{t}</span>
            </div>
          ))}
          <div className="tech-card uu">
            <span className="uu-badge">U = U</span>
            <h3>Undetectable = Untransmittable</h3>
            <p>When ART suppresses viral load to undetectable levels, there is <b>zero risk</b> of sexual transmission.</p>
            <span className="tfoot">Science ends stigma</span>
          </div>
        </div>
      </Shell>
    ),
  },
  {
    role: 'Part 1C · RA 11166 Testing & Consent', speaker: 'Bascuña',
    render: () => (
      <Shell eyebrow={P1} title={<>RA 11166: <em>Testing &amp; Consent</em></>} speaker="Bascuña" footL="Republic Act No. 11166 · Official Gazette, 2018" footR="Human rights & public health approach">
        <div className="split">
          <div className="hero-stat">
            <span className="eyebrow light gold">Section 29 · Key youth provision</span>
            <div className="stat">15<sup>+</sup></div>
            <h3>No parental consent needed for ages 15–17</h3>
            <p>Mature minors can independently consent to voluntary HIV testing &amp; counseling. (Repealed RA 8504.)</p>
          </div>
          <div className="stack">
            {[
              ['Why lower the age from 18 to 15?', 'Infections surged among 15–24 year-olds, yet teens avoided clinics fearing parents would be called.'],
              ['Under 15 is protected too', 'Testing without parental consent if pregnant, married, at high risk, or assisted by a social worker/health provider.'],
              ['Compulsory testing is illegal (Sec. 26)', 'No mandatory HIV tests for admission, scholarships, employment, or medical care.'],
            ].map(([h, b], k) => (
              <div className="s-item" key={h}><span>{k + 1}</span><div><b>{h}</b><p>{b}</p></div></div>
            ))}
          </div>
        </div>
      </Shell>
    ),
  },
  {
    role: 'Part 1D · Privacy & Anti-Discrimination', speaker: 'Bedico',
    render: () => (
      <Shell eyebrow={P1} title={<>RA 11166: <em>Privacy &amp; Anti-Discrimination</em></>} speaker="Bedico" footL={<><b>Bottom line:</b> the law protects your identity before, during and after testing.</>} footR="Sec. 30, 31, 49 & 50">
        <div className="three">
          {[
            ['Sec. 30 & 31', 'Strict medical confidentiality', ['Visits, counseling notes & results are confidential.', 'Clinics use coded identifiers, not names.', 'Results go only to you — never to schools or peers.'], 'red', '🔒'],
            ['Sec. 49', 'School & workplace protection', ['Schools cannot refuse, expel, segregate, or deny scholarships over HIV status.', 'Illegal to reject applicants, fire employees, or evict tenants.'], 'gold', '🎓'],
            ['Sec. 50', 'Criminal penalties', ['Outing someone\'s status (incl. social media): 6 mo–5 yrs prison + ₱50K–₱500K fine.', 'Discrimination: prison + license revocation.'], 'ink', '⚖️'],
          ].map(([s, h, li, c, ic]) => (
            <div className={`law-card ${c}`} key={s as string}>
              <div className="lc-ic">{ic}</div>
              <span className="tag">{s}</span>
              <h3>{h}</h3>
              <ul>{(li as string[]).map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
          ))}
        </div>
      </Shell>
    ),
  },
  {
    role: 'Part 1E · Youth Cases & Social Stigma', speaker: 'Cecilio',
    render: () => (
      <Shell eyebrow={P1} title={<>Rising youth cases &amp; <em>the sociology of stigma</em></>} speaker="Cecilio" footL="Stigma — not the virus — is the #1 barrier to free care in Naga City." footR="DOH HARP · UNAIDS Philippines">
        <div className="split even">
          <div className="epi">
            <span className="tag red">Epidemiological context</span>
            <div className="epi-stat"><b>15–34</b><span>age groups account for the largest share of new diagnoses nationwide &amp; in Bicol</span></div>
            <ul>
              <li><b>Low testing uptake:</b> high connectivity, low sexual health literacy.</li>
              <li><b>Late presentation:</b> many test only when symptoms appear, missing years of free ART.</li>
            </ul>
          </div>
          <div className="pillars">
            <span className="tag gold">The 4 pillars of stigma</span>
            {[
              ['Moral judgment', 'Linking testing with "promiscuity" instead of responsible care.'],
              ['Small-town visibility', 'Fear of being seen entering a clinic.'],
              ['Online misinformation', 'Outdated myths fuel panic in dorms & classrooms.'],
              ['Internalized shame', 'Youth delay free testing, fueling unknowing transmission.'],
            ].map(([h, b], k) => (
              <div className="pillar" key={h}><i>{k + 1}</i><div><b>{h}</b><p>{b}</p></div></div>
            ))}
          </div>
        </div>
      </Shell>
    ),
  },
  {
    role: 'Part 2 · Intro & Workflow', speaker: 'Belarmino', dark: true,
    render: () => (
      <Shell dark eyebrow="Part 2 · Live Group Output" title={<>UNC Youth Health &amp; <em>Anti-Stigma</em> Digital Campaign</>} speaker="Belarmino" footL={<>Prompt: <q>Classify 5 common online myths about HIV transmission and HIV testing.</q></>} footR="Next: the audit matrix →">
        <p className="lede center">Bridging AI fact-checking, RA 11166 legal literacy, and localized Naga City healthcare access.</p>
        <div className="flow">
          {[
            ['🤖', 'AI Myth Classification', 'Prompted an AI tool to generate & classify 5 online myths about HIV transmission and testing.'],
            ['🔍', 'RA 11166 & Language Audit', 'Cross-checked with DOH/WHO & RA 11166; scrubbed fear-mongering and victim-blaming.'],
            ['📱', '3-Slide IG/FB Carousel', 'Designed a ready-to-post UNC carousel with a Naga City / CamSur free testing directory.'],
          ].map(([ic, h, b], k) => (
            <div className="flow-step" key={h}>
              <span className="fs-n">Step {k + 1}</span><div className="fs-ic">{ic}</div><h3>{h}</h3><p>{b}</p>
            </div>
          ))}
        </div>
      </Shell>
    ),
  },
  {
    role: 'Part 2A · AI Audit (Myths 1–3)', speaker: 'Belarmino',
    render: () => (
      <Shell eyebrow="Part 2 · AI vs. DOH/WHO Audit (1 of 2)" title={<>Auditing AI myths &amp; <em>removing stigma language</em></>} speaker="Belarmino" footL="Generic AI repeats moralistic biases from older training data." footR="Cross-checked: WHO & DOH">
        <AuditTable rows={[
          ['Casual contact', 'You can catch HIV from dorm CRs, utensils, sweat or mosquito bites.', 'False. HIV is only spread by high-risk groups engaging in reckless sexual acts or dirty needles.', '"high-risk groups", "reckless" — victim-blaming', <>Never transmitted via casual contact, food, toilets or mosquitoes. It depends on <b>specific unprotected exposures</b> — not labels or groups.</>],
          ['Symptoms', 'If someone looks fit, they are definitely HIV-negative.', 'False. Infected carriers can silently harbor the deadly plague for years.', '"infected carriers", "deadly plague" — fear-mongering', <>PLHIV often have no symptoms for years. Using person-first language, <b>routine testing</b> is a normal health habit for everyone.</>],
          ['Intimacy & future', 'A person with HIV can never safely date, marry or have HIV-negative children.', 'False. Strict lifelong compliance to harsh drugs can reduce transmission risk.', 'Outdated, overly bleak phrasing', <>Under <b>U=U</b>, PLHIV on free ART with undetectable viral load have <b>zero risk</b> of sexual transmission.</>],
        ]} />
      </Shell>
    ),
  },
  {
    role: 'Part 2B · AI Audit (Myths 4–5)', speaker: 'Dagta',
    render: () => (
      <Shell eyebrow="Part 2 · AI vs. RA 11166 & Local Audit (2 of 2)" title={<>Auditing testing myths against <em>PH law &amp; Naga reality</em></>} speaker="Dagta" footL={<><b>Key lesson:</b> AI defaults to Western laws unless localized with RA 11166 &amp; Naga CHO data.</>} footR="Verified via Official Gazette">
        <AuditTable start={4} rows={[
          ['Parental consent', 'At 16 or 17, the clinic will call your parents or need their signature.', 'In most jurisdictions, minors under 18 require parental or guardian consent before medical blood tests.', 'US-centric — legally wrong in the Philippines', <><b>RA 11166 Sec. 29:</b> youth aged <b>15–17</b> can access voluntary testing <b>without parental consent</b>.</>],
          ['Cost & school records', 'Testing costs thousands and gets reported to your university.', 'Public health centers often provide subsidized testing and follow standard privacy rules.', 'Too vague — misses RA 11166 & Naga clinics', <>Testing is <b>100% FREE</b> at the <b>Naga City Hygiene Clinic</b> &amp; <b>BMC</b>. Results are confidential and never shared with UNC (Sec. 30 &amp; 49).</>],
        ]} />
      </Shell>
    ),
  },
  {
    role: 'Part 2C · Full Carousel Overview', speaker: 'Dolor',
    render: () => (
      <Shell eyebrow="Part 2 · Localized Digital Asset" title={<>Ready-to-post <em>3-slide carousel</em> for UNC students</>} speaker="Dolor" footL="4:5 portrait · 1080×1350 px · optimized for mobile feeds" footR="Try it: swipe, double-tap, save →">
        <div className="overview">
          <div className="strip">
            {[0, 1, 2].map((k) => (
              <div className="strip-item" key={k} style={{ transform: `rotate(${(k - 1) * 4}deg) translateY(${k === 1 ? -10 : 8}px)` }}>
                <ScaledCard index={k} width={200} />
              </div>
            ))}
            <div className="strip-labels"><span>1 · Myths vs Facts</span><span>2 · Your Rights</span><span>3 · Where to Test</span></div>
          </div>
          <PostToggle width={250} />
        </div>
      </Shell>
    ),
  },
  {
    role: 'Part 2C · Card 1 (Transmission)', speaker: 'Dolor',
    render: () => (
      <Shell eyebrow="Carousel Zoom-in · Card 1 of 3" title={<>A respectful <em>myth-vs-fact</em> breakdown</>} speaker="Dolor" footL={<>Rubric: "A respectful myth-vs-fact breakdown on HIV transmission." ✔</>} footR="Card 1 / 3">
        <div className="zoom">
          <PostToggle index={0} />
          <Rationale title="Why we designed Card 1 this way" items={[
            ['Dorm & campus anxiety first', 'Debunks casual-contact myths — shared CRs, utensils, mosquitoes — that drive everyday student stigma.'],
            ['Empowerment over fear (U=U)', 'No scary imagery. We spotlight the WHO/DOH U=U breakthrough so students know treatment works and is free.'],
            ['Scrubbed of AI blame language', 'Neutral biological explanations ("specific bodily fluids") instead of stigmatizing labels.'],
          ]} />
        </div>
      </Shell>
    ),
  },
  {
    role: 'Part 2C · Card 2 (RA 11166 Rights)', speaker: 'Dolor',
    render: () => (
      <Shell eyebrow="Carousel Zoom-in · Card 2 of 3" title={<>Testing myths &amp; <em>student rights</em> under RA 11166</>} speaker="Dolor" footL="Rubric: cross-checked against RA 11166 on privacy, testing & consent ✔" footR="Card 2 / 3">
        <div className="zoom">
          <PostToggle index={1} />
          <Rationale title="Translating law into student assurance" items={[
            ['Answers SHS & freshmen fears', 'Many are 16–17. Highlighting Sec. 29 (15+ consent) removes the fear of parental notification.'],
            ['Scholarship & academic anxiety', 'Explicitly cites Sec. 49 so scholars know their standing is legally protected.'],
            ['Cites exact sections', 'Concrete legal authority instead of vague reassurances.'],
          ]} />
        </div>
      </Shell>
    ),
  },
  {
    role: 'Part 2D · Card 3 (Naga & CamSur Guide)', speaker: 'Belches',
    render: () => (
      <Shell eyebrow="Carousel Zoom-in · Card 3 of 3" title={<>A non-stigmatizing guide to <em>free testing</em></>} speaker="Belches" footL="Rubric: clear guide to free, confidential testing in Naga / CamSur ✔" footR="Card 3 / 3">
        <div className="zoom">
          <PostToggle index={2} />
          <Rationale title="Demystifying the clinic visit" items={[
            ['Accessible from UNC', 'Naga City Hygiene Clinic & BMC SAGIP are one short jeepney/tricycle ride from campus.'],
            ['Removes fear of the unknown', '"Private chat → finger-prick → results in ~20 mins" lowers first-timer anxiety.'],
            ['Includes commuter students', 'Points students from nearby CamSur towns to their municipal RHUs.'],
          ]} />
        </div>
      </Shell>
    ),
  },
  {
    role: 'Wrap-up · References & AI Disclosure', speaker: 'Dagta',
    render: () => (
      <Shell eyebrow="Wrap-up & Verification" title={<>Primary sources &amp; <em>AI transparency</em></>} speaker="Dagta" footL="STS Week 15 · Group B" footR="AI transparency rule satisfied ✔">
        <div className="split even">
          <div className="refs">
            <span className="tag">Primary source verification</span>
            {[
              ['RA 11166', 'Philippine HIV and AIDS Policy Act — Official Gazette, 2018.'],
              ['DOH', 'Epidemiology Bureau HARP Registry & DOH Bicol CHD advisories.'],
              ['WHO', 'Consolidated HIV Guidelines & Viral Suppression (U=U) Policy Brief.'],
              ['Naga City', 'City Health Office (Hygiene Clinic) & BMC SAGIP Citizens\' Charter.'],
            ].map(([h, b]) => <div className="ref" key={h}><b>{h}</b><p>{b}</p></div>)}
          </div>
          <div className="disclosure">
            <span className="uu-badge">Mandatory rubric requirement</span>
            <h3>AI Transparency &amp; Disclosure</h3>
            <p>Generative AI (specifically <b>Google Gemini</b>) was utilized during the ideation phase to generate and classify five common online myths regarding HIV transmission and testing.</p>
            <p>All RA 11166 provisions, epidemiological claims, and Naga/CamSur clinic details were manually cross-checked with the Official Gazette, DOH, and WHO. Stigmatizing, fear-inducing, or legally inaccurate AI phrasing was audited and removed by Group B.</p>
            <div className="thanks">Thank you! Group B is now open for questions. 🎗️</div>
          </div>
        </div>
      </Shell>
    ),
  },
];

function AuditTable({ rows, start = 1 }: { rows: [string, string, string, string, ReactNode][]; start?: number }) {
  return (
    <div className="audit">
      <div className="a-row a-head">
        <span>Online myth</span><span className="bad">Raw AI output 🚩</span><span className="good">Our verified rewrite ✓</span>
      </div>
      {rows.map(([t, m, ai, flag, fix], k) => (
        <div className="a-row" key={t}>
          <div className="a-myth"><span className="a-n">Myth {start + k} · {t}</span><p>"{m}"</p></div>
          <div className="a-ai"><p><s>{ai}</s></p><span className="flag">Flagged: {flag}</span></div>
          <div className="a-fix"><p>{fix}</p></div>
        </div>
      ))}
    </div>
  );
}
