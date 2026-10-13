import { useEffect, useState } from 'react';
import { Link, Route, Switch, useLocation } from 'wouter';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Blocks,
  ChevronRight,
  CircleHelp,
  Compass,
  Fingerprint,
  Globe2,
  Menu,
  Plus,
  Wallet,
  X,
} from 'lucide-react';
import { InfoPage, NotFound, WalletAppPage } from './Pages';
import LearnPage from './LearnPage';

const logo = '/fem-mark.png';

const principles = [
  {
    number: '01',
    title: 'A wallet that feels familiar',
    body: 'A clear place to manage your digital assets and connect with the wider onchain world.',
  },
  {
    number: '02',
    title: 'A chain to explore',
    body: 'FEM Chain is the foundation for applications and experiences built around FEM.',
  },
  {
    number: '03',
    title: 'One connected experience',
    body: 'Move from wallet to ecosystem with a product designed to make the next step feel natural.',
  },
];

const ecosystem = [
  {
    name: 'FEM Chain',
    label: 'THE FOUNDATION',
    description: 'Explore the network layer designed to bring apps and people into the FEM ecosystem.',
    icon: <Globe2 aria-hidden="true" />,
    featured: true,
  },
  {
    name: 'Apps & tools',
    label: 'ECOSYSTEM',
    description: 'A growing landscape of useful onchain experiences, all in one place to discover.',
    icon: <Blocks aria-hidden="true" />,
    featured: false,
  },
  {
    name: 'Community',
    label: 'TOGETHER',
    description: 'Meet the people learning, building and shaping what comes next for FEM.',
    icon: <Compass aria-hidden="true" />,
    featured: false,
  },
];

const faq = [
  {
    question: 'What is FEM?',
    answer:
      'FEM brings together a mobile wallet and FEM Chain. The wallet is a familiar starting point for managing digital assets; the chain is the network for applications and activity in the FEM ecosystem.',
  },
  {
    question: 'Do I need to know how blockchains work?',
    answer:
      'No specialist knowledge is needed to understand the introduction here. The wallet is being designed for people who already know the basic patterns of Ethereum wallets, while the broader ecosystem continues to take shape.',
  },
  {
    question: 'Where can I download the wallet?',
    answer:
      'Download destinations have not been announced yet. When availability is confirmed, this page will point you to the official options. We will not send you to an unofficial download.',
  },
  {
    question: 'How can I join the community?',
    answer:
      'Community destinations are coming soon. Follow the page as it develops, and check back here for verified ways to connect.',
  },
];

function LandingContent() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="wrap header-inner">
          <Link className="brand" href="/" aria-label="FEM home" onClick={closeMenu}>
            <img src={logo} alt="" width="35" height="35" />
            <span>FEM<small>WALLET + CHAIN</small></span>
          </Link>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          <nav id="main-navigation" className={`nav-links${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
            <Link href="/wallet" onClick={closeMenu}>Wallet</Link>
            <Link href="/chain" onClick={closeMenu}>FEM Chain</Link>
            <Link href="/ecosystem" onClick={closeMenu}>Explore</Link>
            <Link href="/learn" onClick={closeMenu} data-testid="link-home-nav-learn">Learn</Link>
            <Link href="/community" onClick={closeMenu}>Community</Link>
            <Link href="/help" onClick={closeMenu} data-testid="link-home-nav-help">Help</Link>
            <Link href="/app" className="button button-primary" onClick={closeMenu}>Wallet preview <ArrowUpRight aria-hidden="true" /></Link>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">A new way into onchain</span>
              <h1 id="hero-title"><span>Meet</span><span><em>FEM.</em> Move</span><span>forward.</span></h1>
              <p>A mobile wallet and blockchain ecosystem with familiar foundations and room to explore what comes next.</p>
              <div className="hero-actions">
                <Link href="/app" className="button button-primary">
                  Explore the wallet <ArrowRight aria-hidden="true" />
                </Link>
                <Link className="button button-light" href="/chain">
                  Discover FEM Chain <ArrowDown aria-hidden="true" />
                </Link>
                <Link className="button button-light" href="/learn" data-testid="link-hero-learn">
                  Start learning <ArrowRight aria-hidden="true" />
                </Link>
              </div>
              <div className="hero-note">WALLET + NETWORK, DESIGNED TO WORK TOGETHER</div>
            </div>
            <div className="hero-visual" aria-label="FEM mark surrounded by wallet and chain signals">
              <div className="orbit">
                <div className="orbit-core">
                  <img src={logo} alt="FEM silver mark on a blue field" width="260" height="260" />
                </div>
                <div className="orbit-tag wallet"><Wallet aria-hidden="true" /> FEM WALLET</div>
                <div className="orbit-tag chain"><Globe2 aria-hidden="true" /> FEM CHAIN</div>
                <div className="orbit-tag network"><Fingerprint aria-hidden="true" /> YOUR ONCHAIN HOME</div>
              </div>
              <div className="hero-index">FEM / <span>01—04</span></div>
            </div>
            <div className="scroll-cue"><span /> Scroll to explore</div>
          </div>
        </section>

        <div className="intro-strip" aria-label="FEM introduction">
          <div className="wrap strip-inner">
            <span className="strip-label">A clearer starting point</span>
            <p>One wallet. A whole chain to discover.</p>
            <span className="strip-mark">FEM / 001</span>
          </div>
        </div>

        <section id="about" className="section" aria-labelledby="about-title">
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="eyebrow">01 / The idea</span>
                <h2 className="section-title" id="about-title">Onchain, made<br />more <em>approachable.</em></h2>
              </div>
              <p>FEM brings the wallet and the network closer together, so getting started feels clear and exploring can come naturally.</p>
            </div>
            <div className="intro-grid">
              <div className="intro-aside">
                <span className="aside-number">A DIFFERENT KIND OF ENTRY POINT</span>
                <h3 className="aside-title">Familiar enough to begin. Open enough to grow.</h3>
                <p>We’re building with the everyday wallet experience in mind: understandable tools, connected to a place for new ideas.</p>
              </div>
              <div className="principles">
                {principles.map((item) => (
                  <article className="principle" key={item.number}>
                    <span className="principle-no">{item.number}</span>
                    <div><h3>{item.title}</h3><p>{item.body}</p></div>
                    <ChevronRight aria-hidden="true" />
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="wallet" className="wallet-section" aria-labelledby="wallet-title">
          <div className="wrap">
            <div className="wallet-panel">
              <div className="wallet-copy">
                <span className="eyebrow">02 / FEM Wallet</span>
                <h2 id="wallet-title">Your next<br />move, <em>in hand.</em></h2>
                <p>A mobile-first wallet experience for keeping your onchain essentials close and exploring the FEM ecosystem from one familiar place.</p>
                <Link href="/wallet" className="button button-light">Wallet availability <ArrowUpRight aria-hidden="true" /></Link>
                <div className="availability">OFFICIAL DOWNLOAD DESTINATIONS · COMING SOON</div>
              </div>
              <div className="phone-stage" aria-label="Illustration of a FEM wallet mobile interface">
                <div className="phone-halo" />
                <div className="phone">
                  <div className="phone-screen">
                    <div className="phone-top"><span>Good to see you</span><img src={logo} alt="" /></div>
                    <div className="phone-greeting">YOUR WALLET</div>
                    <div className="phone-balance">Your assets</div>
                    <div className="phone-sub">A clear view of what you hold</div>
                    <div className="phone-actions">
                      <div className="phone-action"><strong>↑</strong>Send</div>
                      <div className="phone-action"><strong>↓</strong>Receive</div>
                      <div className="phone-action"><strong>＋</strong>Explore</div>
                    </div>
                    <div className="phone-label">In your wallet</div>
                    <div className="phone-row"><div className="coin-dot">F</div><div>FEM<small>FEM Chain</small></div><b>—</b></div>
                    <div className="phone-row"><div className="coin-dot" style={{ background: '#667b9f' }}>E</div><div>Ethereum<small>Connected assets</small></div><b>—</b></div>
                    <div className="phone-foot">A PREVIEW OF THE FEM WALLET EXPERIENCE</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="ecosystem" className="chain-section" aria-labelledby="ecosystem-title">
          <div className="wrap">
            <div className="chain-top">
              <div>
                <span className="eyebrow">03 / The ecosystem</span>
                <h2 className="section-title" id="ecosystem-title">A chain is a<br /><em>place to build.</em></h2>
              </div>
              <p>FEM Chain is the foundation. Around it, a broader ecosystem can take shape—one application, idea and community at a time.</p>
            </div>
            <div className="ecosystem-grid">
              {ecosystem.map((item) => (
                <article className={`eco-card${item.featured ? ' featured' : ''}`} key={item.name}>
                  <div className="eco-top">
                    <div className="eco-icon">{item.icon}</div>
                    <span className="eco-count">{item.label}</span>
                  </div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <Link className="eco-link" href={item.name === 'FEM Chain' ? '/chain' : item.name === 'Community' ? '/community' : '/ecosystem'}>
                    Explore <ArrowRight aria-hidden="true" />
                  </Link>
                </article>
              ))}
            </div>
            <div className="chain-note"><span /> Ecosystem destinations and network tools will be announced here.</div>
          </div>
        </section>

        <section id="community" className="community" aria-labelledby="community-title">
          <div className="wrap">
            <div className="community-box">
              <div className="community-content">
                <span className="eyebrow">04 / Find your people</span>
                <h2 id="community-title">Good things<br />happen <em>together.</em></h2>
                <p>FEM is a work in progress, and the people around it matter. Community spaces are on the way—official links will live here when they’re ready.</p>
                <div className="community-actions">
                  <Link className="button button-light" href="/community">Find the community <ArrowUpRight aria-hidden="true" /></Link>
                  <a className="button button-outline" href="#faq">What is FEM? <CircleHelp aria-hidden="true" /></a>
                </div>
              </div>
              <div className="community-foot">COMMUNITY LINKS · COMING SOON</div>
            </div>
          </div>
        </section>

        <section id="faq" className="faq-section" aria-labelledby="faq-title">
          <div className="wrap faq-grid">
            <div className="faq-intro">
              <span className="eyebrow">A few first questions</span>
              <h2 className="section-title" id="faq-title">Start with<br /><em>the basics.</em></h2>
              <p>Helpful context as FEM takes shape. Details will be updated as official information becomes available.</p>
            </div>
            <div className="faq-list">
              {faq.map((item) => (
                <details className="faq-item" key={item.question}>
                  <summary>{item.question}<Plus aria-hidden="true" /></summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap">
          <div className="footer-main">
            <Link className="footer-brand" href="/">
              <img src={logo} alt="" width="30" height="30" />
              FEM <span>WALLET + CHAIN</span>
            </Link>
            <nav className="footer-links" aria-label="Footer navigation">
              <Link href="/wallet">Wallet</Link>
              <Link href="/chain">FEM Chain</Link>
              <Link href="/ecosystem">Ecosystem</Link>
              <Link href="/learn" data-testid="link-home-footer-learn">Learn</Link>
              <Link href="/community">Community</Link>
              <Link href="/help">Help</Link>
              <Link href="/app">Wallet preview</Link>
              <a
                href="https://help.femchain.online"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-help-center"
              >
                Help center <ArrowUpRight aria-hidden="true" />
              </a>
            </nav>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} FEM. An introduction, not an investment offer.</span>
            <span>EXTERNAL LINKS WILL BE VERIFIED BEFORE THEY APPEAR HERE.</span>
          </div>
        </div>
      </footer>

    </div>
  );
}

const routeMeta: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'FEM Wallet & Chain — A Clearer Way Onchain',
    description: 'Meet FEM: a mobile wallet and blockchain ecosystem with familiar foundations and room to explore what comes next.',
  },
  '/wallet': {
    title: 'FEM Wallet — A Familiar Place to Begin',
    description: 'Learn about FEM Wallet, its mobile-first direction, and what is known about availability. Official download destinations are not announced yet.',
  },
  '/chain': {
    title: 'FEM Chain — The Network Behind FEM',
    description: 'An introduction to FEM Chain and its high-level role in the FEM ecosystem, without unconfirmed network configuration or technical claims.',
  },
  '/ecosystem': {
    title: 'FEM Ecosystem — Projects and Tools',
    description: 'The FEM ecosystem directory is coming soon. No projects or tools are listed until official destinations can be verified.',
  },
  '/community': {
    title: 'FEM Community — Official Updates and Help',
    description: 'Community destinations are not announced yet. Find verified support through the official FEM help center.',
  },
  '/learn': {
    title: 'Learn Onchain — FEM Field Notes',
    description: 'A practical, generic introduction to wallets, blockchain networks, transactions, and safer onchain habits.',
  },
  '/help': {
    title: 'FEM Help — Official Support Information',
    description: 'Find support information for FEM Wallet and FEM Chain through the official FEM help center at help.femchain.online.',
  },
  '/app': {
    title: 'FEM Wallet Preview — Overview',
    description: 'Explore a UI-only FEM Wallet prototype. It does not connect to a wallet or blockchain and cannot send or receive assets.',
  },
  '/app/send': {
    title: 'FEM Wallet Preview — Send Review',
    description: 'Review a simulated send form in the FEM Wallet UI prototype. No transaction is signed, sent, or broadcast.',
  },
  '/app/receive': {
    title: 'FEM Wallet Preview — Receive',
    description: 'FEM Wallet receiving screen prototype. No wallet address or QR code is generated or displayed.',
  },
  '/app/activity': {
    title: 'FEM Wallet Preview — Activity',
    description: 'An empty activity state in the FEM Wallet prototype, with no fabricated transaction history.',
  },
  '/app/settings': {
    title: 'FEM Wallet Preview — Settings',
    description: 'Preview FEM Wallet settings. Network configuration is unknown and no chain or RPC settings are configured.',
  },
};

function RouteMetadata() {
  const [location] = useLocation();
  useEffect(() => {
    const meta = routeMeta[location] ?? {
      title: 'Page not found — FEM Wallet & Chain',
      description: 'This FEM page could not be found. Return to the FEM Wallet and Chain introduction.',
    };
    document.title = meta.title;
    const setMeta = (selector: string, attribute: string, value: string) => {
      let element = document.head.querySelector<HTMLMetaElement>(selector);
      if (!element) {
        element = document.createElement('meta');
        const [key, selectorValue] = selector.match(/\[(name|property)="([^"]+)"\]/)?.slice(1) ?? [];
        if (key && selectorValue) element.setAttribute(key, selectorValue);
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    };
    setMeta('meta[name="description"]', 'content', meta.description);
    setMeta('meta[property="og:title"]', 'content', meta.title);
    setMeta('meta[property="og:description"]', 'content', meta.description);
    setMeta('meta[property="og:type"]', 'content', 'website');
    setMeta('meta[property="og:image"]', 'content', '/fem-mark.png');
    setMeta('meta[name="twitter:title"]', 'content', meta.title);
    setMeta('meta[name="twitter:description"]', 'content', meta.description);
    setMeta('meta[name="twitter:card"]', 'content', 'summary_large_image');
    setMeta('meta[name="twitter:image"]', 'content', '/fem-mark.png');
  }, [location]);
  return null;
}

function App() {
  return (
    <>
      <RouteMetadata />
      <Switch>
        <Route path="/" component={LandingContent} />
        <Route path="/wallet" component={() => <InfoPage path="/wallet" />} />
        <Route path="/chain" component={() => <InfoPage path="/chain" />} />
        <Route path="/ecosystem" component={() => <InfoPage path="/ecosystem" />} />
        <Route path="/community" component={() => <InfoPage path="/community" />} />
        <Route path="/learn" component={LearnPage} />
        <Route path="/help" component={() => <InfoPage path="/help" />} />
        <Route path="/app" component={() => <WalletAppPage path="/app" />} />
        <Route path="/app/send" component={() => <WalletAppPage path="/app/send" />} />
        <Route path="/app/receive" component={() => <WalletAppPage path="/app/receive" />} />
        <Route path="/app/activity" component={() => <WalletAppPage path="/app/activity" />} />
        <Route path="/app/settings" component={() => <WalletAppPage path="/app/settings" />} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
