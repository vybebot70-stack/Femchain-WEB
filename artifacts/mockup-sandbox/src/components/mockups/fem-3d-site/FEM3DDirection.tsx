import './_group.css';
import './FEM3DDirection.css';
import { useState, type AnchorHTMLAttributes } from 'react';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Blocks,
  Check,
  ChevronDown,
  Compass,
  ExternalLink,
  Fingerprint,
  Globe2,
  Menu,
  ShieldCheck,
  Sparkles,
  Wallet,
  X,
} from 'lucide-react';

const mark = '/__mockup/images/fem-mark.png';

const faqItems = [
  {
    q: 'What is FEM?',
    a: 'FEM brings together a mobile wallet and FEM Chain. The wallet is a familiar starting point for managing digital assets; the chain is the network for applications and activity in the FEM ecosystem.',
  },
  {
    q: 'Is FEM Wallet non-custodial?',
    a: 'The official help center FAQ says the wallet is being built as non-custodial. Confirm the released app’s actual setup and privacy information before using it.',
  },
  {
    q: 'Where can I download the wallet?',
    a: 'Official download destinations have not been announced. Availability is forthcoming; this page will point to official options when they are confirmed.',
  },
  {
    q: 'Where can I find help?',
    a: 'The verified support destination is help.femchain.online. Community channel links have not been confirmed yet.',
  },
];

function FEM3DLink({ href, children, className = '', ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return <a href={href} className={className} {...props}>{children}</a>;
}

export default function FEM3DDirection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="fem3d">
      <header className="f3-header">
        <div className="f3-header-inner">
          <FEM3DLink href="/" className="f3-brand" aria-label="FEM home" onClick={closeMenu}>
            <img src={mark} alt="" />
            <span>FEM<small>WALLET + CHAIN</small></span>
          </FEM3DLink>
          <button
            className="f3-menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="f3-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
          <nav id="f3-navigation" className={`f3-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
            <FEM3DLink href="/wallet" onClick={closeMenu}>Wallet</FEM3DLink>
            <FEM3DLink href="/chain" onClick={closeMenu}>FEM Chain</FEM3DLink>
            <FEM3DLink href="/ecosystem" onClick={closeMenu}>Explore</FEM3DLink>
            <FEM3DLink href="/community" onClick={closeMenu}>Community</FEM3DLink>
            <FEM3DLink href="/app" className="f3-nav-cta" onClick={closeMenu}>Wallet preview <ArrowUpRight /></FEM3DLink>
          </nav>
        </div>
      </header>

      <main>
        <section className="f3-hero" aria-labelledby="f3-hero-title">
          <div className="f3-hero-grid">
            <div className="f3-hero-copy">
              <div className="f3-kicker"><span className="f3-kicker-dot" /> A clearer starting point for onchain</div>
              <h1 id="f3-hero-title">Meet FEM.<br /><em>Move forward.</em></h1>
              <p>A mobile wallet and blockchain ecosystem with familiar foundations and room to explore what comes next.</p>
              <div className="f3-hero-actions">
                <FEM3DLink href="/wallet" className="f3-button f3-button-blue">Get to know FEM <ArrowRight /></FEM3DLink>
                <FEM3DLink href="/chain" className="f3-text-link">Discover FEM Chain <ArrowUpRight /></FEM3DLink>
              </div>
              <div className="f3-statusline"><span className="f3-status-dot" /> Wallet availability is forthcoming</div>
            </div>

            <div className="f3-stage" aria-label="Dimensional FEM mark in a cobalt light field">
              <div className="f3-stage-grid" />
              <div className="f3-stage-ring f3-ring-one" />
              <div className="f3-stage-ring f3-ring-two" />
              <div className="f3-lightbeam" />
              <div className="f3-platform">
                <div className="f3-platform-top" />
                <div className="f3-platform-front" />
                <div className="f3-platform-side" />
              </div>
              <div className="f3-mark-object">
                <div className="f3-mark-edge" />
                <img src={mark} alt="Silver FEM F mark on a cobalt-blue tile" />
                <span className="f3-mark-glint" />
              </div>
              <div className="f3-float-label f3-label-wallet"><Wallet /> FEM WALLET</div>
              <div className="f3-float-label f3-label-chain"><Globe2 /> FEM CHAIN</div>
              <div className="f3-stage-caption"><span>FEM / 001</span><span>WALLET + NETWORK</span></div>
              <div className="f3-stage-index">01—04</div>
            </div>
            <div className="f3-scroll-cue"><span /> SCROLL TO EXPLORE</div>
          </div>
        </section>

        <div className="f3-rail" aria-label="FEM introduction">
          <div className="f3-rail-inner">
            <span>ONE WALLET</span><i />
            <p>A familiar way in. A whole chain to discover.</p><i />
            <span>FEM / WALLET + CHAIN</span>
          </div>
        </div>

        <section className="f3-intro f3-container" aria-labelledby="f3-idea-title">
          <div className="f3-section-top">
            <div>
              <div className="f3-overline">01 / The idea</div>
              <h2 id="f3-idea-title">Onchain, made<br />more <em>approachable.</em></h2>
            </div>
            <p>FEM brings the wallet and the network closer together, so getting started feels clear and exploring can come naturally.</p>
          </div>
          <div className="f3-principles">
            <div className="f3-principle-lead">
              <div className="f3-mini-mark"><img src={mark} alt="" /></div>
              <span className="f3-mono">A DIFFERENT KIND OF ENTRY POINT</span>
              <h3>Familiar enough to begin. Open enough to grow.</h3>
              <p>We’re building with the everyday wallet experience in mind: understandable tools, connected to a place for new ideas.</p>
            </div>
            <div className="f3-principle-list">
              <article><span>01</span><div><h3>A wallet that feels familiar</h3><p>A clear place to manage digital assets and connect with the wider onchain world.</p></div><Wallet /></article>
              <article><span>02</span><div><h3>A chain to explore</h3><p>FEM Chain is the foundation for applications and experiences built around FEM.</p></div><Globe2 /></article>
              <article><span>03</span><div><h3>One connected experience</h3><p>Move from wallet to ecosystem with a product designed to make the next step feel natural.</p></div><ArrowRight /></article>
            </div>
          </div>
        </section>

        <section className="f3-wallet" aria-labelledby="f3-wallet-title">
          <div className="f3-wallet-inner f3-container">
            <div className="f3-wallet-copy">
              <div className="f3-overline f3-overline-light">02 / FEM Wallet</div>
              <h2 id="f3-wallet-title">Your next move,<br /><em>in hand.</em></h2>
              <p>A mobile-first wallet experience for keeping your onchain essentials close and exploring the FEM ecosystem from one familiar place.</p>
              <FEM3DLink href="/wallet" className="f3-button f3-button-white">Wallet availability <ArrowUpRight /></FEM3DLink>
              <div className="f3-coming">OFFICIAL DOWNLOAD DESTINATIONS · COMING SOON</div>
            </div>
            <div className="f3-phone-scene" aria-label="Illustrative, non-functional FEM Wallet interface preview">
              <div className="f3-phone-orbit" />
              <div className="f3-phone-shadow" />
              <div className="f3-phone">
                <div className="f3-phone-side" />
                <div className="f3-phone-screen">
                  <div className="f3-phone-top"><span>Good to see you</span><img src={mark} alt="" /></div>
                  <div className="f3-phone-label">YOUR WALLET</div>
                  <div className="f3-phone-heading">Your assets</div>
                  <div className="f3-phone-sub">A clear view of what you hold</div>
                  <div className="f3-phone-actions"><span><b>↑</b>Send</span><span><b>↓</b>Receive</span><span><b>＋</b>Explore</span></div>
                  <div className="f3-phone-assets">In your wallet</div>
                  <div className="f3-asset-row"><i>F</i><span>FEM<small>FEM Chain</small></span><b>—</b></div>
                  <div className="f3-asset-row"><i className="f3-eth">E</i><span>Ethereum<small>Connected assets</small></span><b>—</b></div>
                  <div className="f3-phone-disclaimer">ILLUSTRATIVE UI · NOT CONNECTED</div>
                </div>
              </div>
              <div className="f3-preview-stamp"><ShieldCheck /> UI PREVIEW<br /><small>NO WALLET CONNECTION</small></div>
            </div>
          </div>
        </section>

        <section className="f3-chain f3-container" aria-labelledby="f3-chain-title">
          <div className="f3-section-top">
            <div>
              <div className="f3-overline">03 / The ecosystem</div>
              <h2 id="f3-chain-title">A chain is a<br /><em>place to build.</em></h2>
            </div>
            <p>FEM Chain is the foundation. Around it, a broader ecosystem can take shape—one application, idea and community at a time.</p>
          </div>
          <div className="f3-ecosystem">
            <FEM3DLink href="/chain" className="f3-eco-card f3-eco-featured">
              <span className="f3-eco-icon"><Globe2 /></span><span className="f3-eco-overline">THE FOUNDATION</span>
              <h3>FEM Chain</h3><p>Explore the network layer designed to bring apps and people into the FEM ecosystem.</p>
              <span className="f3-eco-link">Explore FEM Chain <ArrowRight /></span>
              <span className="f3-eco-ghost">F</span>
            </FEM3DLink>
            <FEM3DLink href="/ecosystem" className="f3-eco-card">
              <span className="f3-eco-icon"><Blocks /></span><span className="f3-eco-overline">ECOSYSTEM</span>
              <h3>Apps &amp; tools</h3><p>A place to discover onchain experiences as verified destinations become available.</p>
              <span className="f3-eco-link">Explore ecosystem <ArrowRight /></span>
            </FEM3DLink>
            <FEM3DLink href="/community" className="f3-eco-card">
              <span className="f3-eco-icon"><Compass /></span><span className="f3-eco-overline">TOGETHER</span>
              <h3>Community</h3><p>Meet the people learning and building. Official community links are forthcoming.</p>
              <span className="f3-eco-link">Community info <ArrowRight /></span>
            </FEM3DLink>
          </div>
          <div className="f3-confirmed-note"><Check /> No network specifications, project listings, or live tools are represented here.</div>
        </section>

        <section className="f3-community" aria-labelledby="f3-community-title">
          <div className="f3-community-inner f3-container">
            <div className="f3-community-art" aria-hidden="true">
              <div className="f3-community-disc f3-disc-back" />
              <div className="f3-community-disc f3-disc-front"><img src={mark} alt="" /></div>
              <Sparkles className="f3-sparkle" />
            </div>
            <div className="f3-community-copy">
              <div className="f3-overline f3-overline-light">04 / Find your people</div>
              <h2 id="f3-community-title">Good things<br />happen <em>together.</em></h2>
              <p>FEM is a work in progress, and the people around it matter. Community spaces are on the way—official links will live here when they’re ready.</p>
              <div className="f3-community-actions">
                <FEM3DLink href="/community" className="f3-button f3-button-white">Community information <ArrowUpRight /></FEM3DLink>
                <FEM3DLink href="/help" className="f3-community-help">Visit verified support <ArrowRight /></FEM3DLink>
              </div>
              <div className="f3-community-foot">COMMUNITY LINKS · COMING SOON</div>
            </div>
          </div>
        </section>

        <section className="f3-faq f3-container" aria-labelledby="f3-faq-title">
          <div className="f3-faq-intro">
            <div className="f3-overline">A few first questions</div>
            <h2 id="f3-faq-title">Start with<br /><em>the basics.</em></h2>
            <p>Helpful context as FEM takes shape. Details will be updated as official information becomes available.</p>
            <FEM3DLink href="https://help.femchain.online" target="_blank" rel="noopener noreferrer" className="f3-help-link">Official help center <ExternalLink /></FEM3DLink>
          </div>
          <div className="f3-faq-list">
            {faqItems.map((item) => (
              <details key={item.q} className="f3-faq-item">
                <summary>{item.q}<ChevronDown /></summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="f3-final-cta">
          <div className="f3-final-inner f3-container">
            <div><span className="f3-overline f3-overline-light">A new beginning, taking shape</span><h2>Make room for<br /><em>what’s next.</em></h2></div>
            <div className="f3-final-action">
              <p>Explore what’s known about FEM Wallet and FEM Chain. Official availability and destinations will be shared when confirmed.</p>
              <FEM3DLink href="/wallet" className="f3-button f3-button-white">Explore FEM <ArrowRight /></FEM3DLink>
            </div>
            <div className="f3-final-orb" aria-hidden="true"><img src={mark} alt="" /></div>
          </div>
        </section>
      </main>

      <footer className="f3-footer">
        <div className="f3-footer-main f3-container">
          <FEM3DLink href="/" className="f3-brand" aria-label="FEM home">
            <img src={mark} alt="" /><span>FEM<small>WALLET + CHAIN</small></span>
          </FEM3DLink>
          <nav aria-label="Footer navigation">
            <FEM3DLink href="/wallet">Wallet</FEM3DLink><FEM3DLink href="/chain">FEM Chain</FEM3DLink>
            <FEM3DLink href="/ecosystem">Ecosystem</FEM3DLink><FEM3DLink href="/community">Community</FEM3DLink>
            <FEM3DLink href="/help">Help</FEM3DLink><FEM3DLink href="/app">Wallet preview</FEM3DLink>
            <FEM3DLink href="https://help.femchain.online" target="_blank" rel="noopener noreferrer">Help center <ExternalLink /></FEM3DLink>
          </nav>
        </div>
        <div className="f3-footer-bottom f3-container">
          <span>© {new Date().getFullYear()} FEM. An introduction, not an investment offer.</span>
          <span>OFFICIAL DESTINATIONS ONLY · DETAILS SUBJECT TO CONFIRMATION</span>
        </div>
      </footer>
      <div className="f3-bottom-scroll"><a href="#f3-hero-title" aria-label="Back to top"><ArrowDown /></a></div>
    </div>
  );
}
