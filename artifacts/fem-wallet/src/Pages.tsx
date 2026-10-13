"use client";

import { useState, type FormEvent, type ReactNode } from 'react';
import Link from 'next/link';
import {
  Activity,
  ArrowDownLeft,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Blocks,
  BookOpen,
  Check,
  CircleHelp,
  Compass,
  ExternalLink,
  Fingerprint,
  FolderSearch,
  Info,
  KeyRound,
  Layers3,
  Menu,
  Network,
  ShieldCheck,
  Send,
  Settings,
  ShieldAlert,
  Wallet,
  X,
} from 'lucide-react';

const logo = '/fem-mark.png';
const helpUrl = 'https://help.femchain.online';

const siteLinks = [
  { href: '/wallet', label: 'Wallet' },
  { href: '/chain', label: 'FEM Chain' },
  { href: '/ecosystem', label: 'Ecosystem' },
  { href: '/learn', label: 'Learn' },
  { href: '/developers', label: 'Developers' },
  { href: '/community', label: 'Community' },
  { href: '/help', label: 'Help' },
];

export function RouteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="route-header">
      <div className="wrap route-header-inner">
        <Link href="/" className="brand" aria-label="FEM home">
          <img src={logo} alt="" width="35" height="35" />
          <span>FEM<small>WALLET + CHAIN</small></span>
        </Link>
        <button
          className="route-menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="route-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav id="route-navigation" className={`route-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
          {siteLinks.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              onClick={() => setMenuOpen(false)}
              data-testid={`link-route-nav-${item.href.slice(1).replace(/\//g, '-')}`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/app" className="button button-primary" onClick={() => setMenuOpen(false)} data-testid="link-route-nav-wallet-preview">
            Wallet preview <ArrowRight aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function RouteFooter() {
  return (
    <footer className="route-footer">
      <div className="wrap route-footer-row">
        <span>FEM / WALLET + CHAIN · An introduction, not an investment offer.</span>
        <nav className="route-footer-links" aria-label="Footer navigation">
          <Link href="/">Home</Link>
          {siteLinks.map((item) => (
            <Link key={item.href} href={item.href} data-testid={`link-route-footer-${item.href.slice(1).replace(/\//g, '-')}`}>
              {item.label}
            </Link>
          ))}
          <Link href="/app" data-testid="link-route-footer-wallet-preview">Wallet preview</Link>
          <a href={helpUrl} target="_blank" rel="noopener noreferrer">Help center <ExternalLink size={12} /></a>
        </nav>
      </div>
    </footer>
  );
}

type Detail = { number: string; title: string; body: string };
type Resource = { id: string; label: string; body: string; href: string };
type InfoConfig = {
  eyebrow: string;
  title: string;
  emphasis?: string;
  lede: string;
  noteTitle: string;
  note: string;
  details: Detail[];
  resources?: Resource[];
  cta?: { label: string; href: string };
  empty?: { title: string; body: string };
};

const pages: Record<string, InfoConfig> = {
  '/wallet': {
    eyebrow: 'FEM / WALLET',
    title: 'A familiar place to',
    emphasis: 'Begin.',
    lede: 'FEM Wallet is being shaped as a mobile-first way to keep onchain essentials close. Its patterns will feel familiar to people who have used Ethereum wallets, without assuming details that are not yet confirmed.',
    noteTitle: 'Availability',
    note: 'Official wallet download destinations have not been announced. This site does not link to unofficial downloads.',
    details: [
      { number: '01', title: 'A familiar wallet pattern', body: 'A clear home for the basic actions people expect from a digital wallet, designed with a mobile-first point of view.' },
      { number: '02', title: 'A preview, not a live wallet', body: 'The interactive prototype is only a UI demonstration. It does not connect to a wallet, network, or blockchain.' },
      { number: '03', title: 'Verified details as they arrive', body: 'Network configuration, supported assets, and availability will be shared when they are officially confirmed.' },
    ],
    cta: { label: 'Open the wallet UI preview', href: '/app' },
  },
  '/chain': {
    eyebrow: 'FEM / CHAIN',
    title: 'The network behind the',
    emphasis: 'experience.',
    lede: 'FEM Chain is EVM-compatible and forms the network layer associated with the FEM ecosystem. Its exact compatibility scope and technical network details are not published here.',
    noteTitle: 'Technical information',
    note: 'No chain ID, RPC endpoint, explorer, token standard, or network configuration is provided on this site.',
    details: [
      { number: '01', title: 'An EVM-compatible foundation', body: 'EVM compatibility gives builders a familiar execution model to explore. The specific FEM implementation details still need official documentation.' },
      { number: '02', title: 'Tool support needs verification', body: 'Compatibility with EVM does not identify the supported hard fork, JSON-RPC endpoints, standards, or developer tools.' },
      { number: '03', title: 'Network settings remain unpublished', body: 'Only verified FEM values should be used to configure a wallet. No connection settings are included in this preview.' },
    ],
    cta: { label: 'Explore the ecosystem', href: '/ecosystem' },
  },
  '/ecosystem': {
    eyebrow: 'FEM / ECOSYSTEM',
    title: 'Room for what comes',
    emphasis: 'next.',
    lede: 'The FEM ecosystem is a place for applications, ideas, and people to take shape around FEM Chain. Public project listings are not available yet.',
    noteTitle: 'No project directory yet',
    note: 'We have not listed projects or tools because there are no verified destinations to share at this time.',
    details: [
      { number: '01', title: 'Applications', body: 'There are no verified application links to feature yet.' },
      { number: '02', title: 'Tools', body: 'Network tools and ecosystem resources will be added when official destinations are confirmed.' },
      { number: '03', title: 'A useful directory', body: 'This page will become a place to find real FEM ecosystem destinations, not speculative listings.' },
    ],
    empty: { title: 'The directory is not open yet.', body: 'There are no projects to browse today. Check back as official FEM ecosystem information becomes available.' },
    cta: { label: 'Read about FEM Chain', href: '/chain' },
  },
  '/community': {
    eyebrow: 'FEM / COMMUNITY',
    title: 'A work in progress,',
    emphasis: 'together.',
    lede: 'People learning and building around FEM matter. Official community destinations are not listed here yet, so we will not point you to unverified social accounts.',
    noteTitle: 'Verified support',
    note: 'For now, the official help center is the verified destination for support information.',
    details: [
      { number: '01', title: 'Official links only', body: 'Community channels will be shared here once their destinations can be verified.' },
      { number: '02', title: 'Ask for support', body: 'The FEM help center is available for support information and common questions.' },
      { number: '03', title: 'Stay alert', body: 'Treat unsolicited messages and unofficial download links with care.' },
    ],
    cta: { label: 'Visit the FEM help center', href: helpUrl },
  },
  '/help': {
    eyebrow: 'FEM / SUPPORT',
    title: 'A clear place to get',
    emphasis: 'help.',
    lede: 'The official FEM Wallet Help Center publishes support contact details, safety guidance, FAQs, privacy information, and terms for its help website.',
    noteTitle: 'Scope of the help site',
    note: 'The help site says it does not access wallets, hold assets, or process blockchain transactions. Its privacy notice covers the help website only.',
    details: [
      { number: '01', title: 'Contact support', body: 'The official support page lists femwallet@gmail.com. For app issues it recommends including non-sensitive app and device details.' },
      { number: '02', title: 'Protect wallet secrets', body: 'The official safety guidance says never to send a recovery phrase, private key, wallet password, one-time code, or remote-access credentials.' },
      { number: '03', title: 'Wallet direction', body: 'The official FAQ describes FEM Wallet as being built as non-custodial. Confirm the released app’s actual setup and privacy notice before using it.' },
    ],
    resources: [
      { id: 'support', label: 'Contact support', body: 'Email FEM Wallet support directly.', href: 'mailto:femwallet@gmail.com' },
      { id: 'faq', label: 'Frequently asked questions', body: 'Answers about the help site, support, and wallet safety.', href: `${helpUrl}/faq.html` },
      { id: 'security', label: 'Security guidance', body: 'Practical guidance for protecting wallet information.', href: `${helpUrl}/security.html` },
      { id: 'privacy', label: 'Privacy policy', body: 'The policy covers the FEM help website, not the wallet app.', href: `${helpUrl}/privacy-policy.html` },
      { id: 'terms', label: 'Terms of service', body: 'Terms for using the FEM Wallet help website.', href: `${helpUrl}/terms-of-service.html` },
    ],
    cta: { label: 'Open the official help center', href: helpUrl },
  },
};

const walletConcepts = [
  {
    number: '01',
    title: 'Wallet',
    body: 'Wallet software helps you use and manage the keys associated with blockchain accounts. It is an interface, not a container holding coins.',
    icon: Wallet,
  },
  {
    number: '02',
    title: 'Account',
    body: 'An account is an identity on a blockchain network. Its address can be shared to receive assets; its secret credentials should not be.',
    icon: Fingerprint,
  },
  {
    number: '03',
    title: 'Keys & recovery',
    body: 'Keys authorize account activity. A recovery phrase or private key can give control of a wallet—keep it private and offline.',
    icon: KeyRound,
  },
  {
    number: '04',
    title: 'Review before approval',
    body: 'Transactions may be difficult to reverse. Check the action, destination, amount, and network before approving it in a real wallet.',
    icon: ShieldCheck,
  },
];

function WalletExplainer() {
  return (
    <div className="route-feature route-wallet-feature">
      <section className="route-concept-intro">
        <div>
          <span className="eyebrow">A few useful building blocks</span>
          <h2 className="route-heading">Know what a wallet<br />is asking you to do.</h2>
        </div>
        <p>These are general blockchain-wallet concepts. They explain familiar wallet patterns and do not describe FEM-specific account, key, or network implementation.</p>
      </section>
      <div className="wallet-concept-grid">
        {walletConcepts.map((concept) => {
          const Icon = concept.icon;
          return (
            <article className="wallet-concept" key={concept.number} data-testid={`wallet-concept-${concept.number}`}>
              <div className="wallet-concept-top"><span>{concept.number} / CONCEPT</span><Icon aria-hidden="true" /></div>
              <h3>{concept.title}</h3>
              <p>{concept.body}</p>
            </article>
          );
        })}
      </div>
      <div className="route-safety-band">
        <div className="route-safety-icon"><ShieldCheck aria-hidden="true" /></div>
        <div>
          <span className="eyebrow">Wallet safety, always</span>
          <h3>Never share your recovery phrase or private key.</h3>
          <p>FEM support will not need these secrets. Treat unsolicited messages, unexpected connection requests, and unofficial download links with care.</p>
        </div>
        <Link className="route-text-link" href="/help" data-testid="link-wallet-safety">
          Read verified safety guidance <ArrowRight aria-hidden="true" />
        </Link>
      </div>
      <div className="route-next-steps">
        <div><BookOpen aria-hidden="true" /><span><strong>New to onchain?</strong><small>Follow the short, general learning path.</small></span></div>
        <Link className="button button-primary" href="/learn" data-testid="link-wallet-learn">
          Start with FEM Learn <ArrowRight aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

function ChainExplainer() {
  return (
    <div className="route-feature route-chain-feature">
      <section className="chain-role-intro">
        <div>
          <span className="eyebrow">The confirmed high-level role</span>
          <h2 className="route-heading">A foundation for<br />FEM ecosystem activity.</h2>
        </div>
          <p>FEM Chain is EVM-compatible. This is a high-level introduction to the EVM model, not a technical specification for FEM’s implementation.</p>
      </section>
      <div className="chain-role-model" aria-label="Conceptual relationship between FEM Chain and ecosystem experiences">
        <div className="chain-model-top">
          <div className="chain-model-node"><span>01 / FOUNDATION</span><Network aria-hidden="true" /><strong>FEM Chain</strong><small>Network layer</small></div>
          <div className="chain-model-connector" aria-hidden="true"><i /><i /><i /></div>
          <div className="chain-model-node chain-model-outcome"><span>02 / AROUND IT</span><Layers3 aria-hidden="true" /><strong>Applications &amp; activity</strong><small>High-level ecosystem direction</small></div>
        </div>
          <div className="chain-model-foot"><Info aria-hidden="true" />Illustrative relationship only. EVM compatibility does not confirm FEM network settings, supported forks, performance, or security properties.</div>
      </div>
      <section className="chain-unknowns" aria-labelledby="chain-unknowns-title">
        <div className="chain-unknowns-heading">
          <span className="eyebrow">Not provided here</span>
          <h2 id="chain-unknowns-title" className="route-heading">Useful details, once verified.</h2>
          <p>Do not configure a wallet or rely on network claims from unofficial sources.</p>
        </div>
        <div className="chain-unknown-list">
            {['Chain ID and RPC endpoint', 'Explorer and network tools', 'Supported EVM fork and features', 'Gas asset and technical specifications'].map((item, index) => (
            <div className="chain-unknown" key={item}><span>0{index + 1}</span><strong>{item}</strong><small>Not confirmed</small></div>
          ))}
        </div>
      </section>
      <div className="route-next-steps">
        <div><Compass aria-hidden="true" /><span><strong>Build with context</strong><small>Read general EVM guidance for builders.</small></span></div>
        <Link className="button button-primary" href="/developers/evm" data-testid="link-chain-evm">
          Explore EVM basics <ArrowRight aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

function EcosystemDirectory() {
  const categories = ['Applications', 'Tools & network resources', 'Community destinations'];
  return (
    <div className="route-feature route-directory-feature">
      <section className="directory-header">
        <div>
          <span className="eyebrow">FEM / DIRECTORY STATUS</span>
          <h2 className="route-heading">A directory worth<br />trusting takes time.</h2>
        </div>
        <p>We will only list FEM ecosystem destinations when they can be verified. No projects, tools, or community channels are confirmed for this directory today.</p>
      </section>
      <section className="directory-empty" aria-labelledby="directory-empty-title">
        <div className="directory-empty-art"><FolderSearch aria-hidden="true" /><span>0 VERIFIED LISTINGS</span></div>
        <div className="directory-empty-copy">
          <span className="eyebrow">Nothing listed yet</span>
          <h3 id="directory-empty-title">The directory is being kept clear until there is something confirmed to share.</h3>
          <p>This is an intentional empty state—not a list of recommendations. Check back for official destinations rather than relying on lookalike listings.</p>
        </div>
      </section>
      <div className="directory-categories" aria-label="Directory sections awaiting verified listings">
        {categories.map((category, index) => (
          <div className="directory-category" key={category}>
            <span>0{index + 1}</span><strong>{category}</strong><small><i />Awaiting verified destination</small>
          </div>
        ))}
      </div>
      <div className="route-next-steps">
        <div><Check aria-hidden="true" /><span><strong>Trust the destination, not just the name.</strong><small>Official links will appear here after verification.</small></span></div>
        <Link className="button button-primary" href="/chain" data-testid="link-ecosystem-chain">
          Read about FEM Chain <ArrowRight aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

function CommunityGuide() {
  return (
    <div className="route-feature route-community-feature">
      <section className="community-support-panel">
        <div className="community-support-main">
          <span className="eyebrow">The verified way to reach support</span>
          <h2 className="route-heading">One official help<br />destination. No guesswork.</h2>
          <p>For FEM support information, use the verified FEM Wallet Help Center. Community channel destinations have not been confirmed, so this site does not link to social accounts or group chats.</p>
          <div className="community-support-actions">
            <Link className="button button-primary" href="/help" data-testid="link-community-help">
              Support details on FEM <ArrowRight aria-hidden="true" />
            </Link>
            <a className="route-text-link" href={helpUrl} target="_blank" rel="noopener noreferrer" data-testid="link-community-help-center">
              Open verified help center <ExternalLink aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="community-support-stamp"><CircleHelp aria-hidden="true" /><span>VERIFIED<br />SUPPORT</span></div>
      </section>
      <section className="community-safety">
        <div className="community-safety-heading">
          <span className="eyebrow">Protect yourself</span>
          <h2 className="route-heading">A real support contact<br />will not ask for your secrets.</h2>
        </div>
        <div className="community-safety-list">
          <article><span>01</span><div><h3>Keep wallet credentials private</h3><p>Never send a recovery phrase, private key, wallet password, one-time code, or remote-access credentials.</p></div><ShieldCheck aria-hidden="true" /></article>
          <article><span>02</span><div><h3>Be cautious with unsolicited messages</h3><p>Do not trust a social profile or direct message just because it uses FEM’s name or mark.</p></div><Fingerprint aria-hidden="true" /></article>
          <article><span>03</span><div><h3>Check links before you act</h3><p>Use the verified help destination for support information. Wallet download options and community links are not announced here.</p></div><ExternalLink aria-hidden="true" /></article>
        </div>
      </section>
      <div className="route-community-footnote"><Info aria-hidden="true" /><p>The Help Center describes the wallet as being built as non-custodial; this is not confirmation of a released app or its setup. Review the actual app and its privacy information before use.</p></div>
    </div>
  );
}

function RouteFeature({ path }: { path: string }) {
  if (path === '/wallet') return <WalletExplainer />;
  if (path === '/chain') return <ChainExplainer />;
  if (path === '/ecosystem') return <EcosystemDirectory />;
  if (path === '/community') return <CommunityGuide />;
  return null;
}

export function InfoPage({ path }: { path: string }) {
  const config = pages[path] ?? pages['/wallet'];
  const external = config.cta?.href.startsWith('http');
  return (
    <div className="site-shell">
      <RouteHeader />
      <main className="route-page">
        <div className="wrap">
          <div className="route-hero">
            <div>
              <span className="eyebrow">{config.eyebrow}</span>
              <h1>{config.title}{config.emphasis && <><br /><em>{config.emphasis}</em></>}</h1>
              <p className="route-lede">{config.lede}</p>
            </div>
            <aside className="route-side-note">
              <strong>{config.noteTitle}</strong>
              {config.note}
            </aside>
          </div>
          {path === '/help' && (
            <div className="route-content route-split">
              <div>
                <span className="eyebrow">What is confirmed</span>
                <h2 className="route-heading">The useful details, without the guesswork.</h2>
              </div>
              <div className="route-list">
                {config.details.map((item) => (
                  <article className="route-list-item" key={item.number}>
                    <span>{item.number}</span>
                    <div><h3>{item.title}</h3><p>{item.body}</p></div>
                  </article>
                ))}
              </div>
            </div>
          )}
          <RouteFeature path={path} />
          {config.empty && path !== '/ecosystem' && (
            <section className="empty-panel" aria-label="Coming soon">
              <div className="empty-panel-mark"><Blocks size={20} aria-hidden="true" /></div>
              <h2>{config.empty.title}</h2>
              <p>{config.empty.body}</p>
            </section>
          )}
          {config.resources && (
            <section className="route-resources" aria-labelledby="route-resources-title">
              <div className="route-resource-heading">
                <span className="eyebrow">Official FEM Wallet Help</span>
                <h2 className="route-heading" id="route-resources-title">Support and safety resources.</h2>
              </div>
              <div className="route-resource-grid">
                {config.resources.map((resource) => {
                  const isExternal = resource.href.startsWith('http');
                  return (
                    <a
                      className="route-resource"
                      href={resource.href}
                      key={resource.id}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                      data-testid={`help-resource-${resource.id}`}
                    >
                      <span><strong>{resource.label}</strong><ArrowUpRight aria-hidden="true" /></span>
                      <small>{resource.body}</small>
                    </a>
                  );
                })}
              </div>
            </section>
          )}
          {config.cta && (
            <div className="route-callout">
              <p>Find more context about FEM, or visit the official destination for help.</p>
              {external
                ? <a className="button button-primary" href={config.cta.href} target="_blank" rel="noopener noreferrer">{config.cta.label}<ArrowUpRight aria-hidden="true" /></a>
                : <Link className="button button-primary" href={config.cta.href}>{config.cta.label}<ArrowRight aria-hidden="true" /></Link>}
            </div>
          )}
        </div>
      </main>
      <RouteFooter />
    </div>
  );
}

type WalletTab = 'overview' | 'send' | 'receive' | 'activity' | 'settings';
const walletNav: { id: WalletTab; label: string; href: string; icon: typeof Wallet }[] = [
  { id: 'overview', label: 'Overview', href: '/app', icon: Wallet },
  { id: 'send', label: 'Send', href: '/app/send', icon: Send },
  { id: 'receive', label: 'Receive', href: '/app/receive', icon: ArrowDownLeft },
  { id: 'activity', label: 'Activity', href: '/app/activity', icon: Activity },
  { id: 'settings', label: 'Settings', href: '/app/settings', icon: Settings },
];

function PreviewHeader() {
  return (
    <header className="preview-topbar">
      <Link href="/" className="preview-brand" aria-label="FEM home">
        <img src={logo} alt="" width="31" height="31" /> FEM Wallet
      </Link>
      <span className="preview-label">UI PREVIEW · NOT CONNECTED</span>
    </header>
  );
}

function PreviewSidebar({ active }: { active: WalletTab }) {
  return (
    <aside className="preview-sidebar">
      <div className="preview-sidebar-label">WALLET</div>
      <nav aria-label="Wallet preview navigation">
        {walletNav.map(({ id, label, href, icon: Icon }) => (
          <Link href={href} key={id} aria-current={active === id ? 'page' : undefined} data-testid={`link-wallet-${id}`}>
            <Icon aria-hidden="true" />{label}
          </Link>
        ))}
      </nav>
      <Link href="/" className="back-link"><ArrowLeft aria-hidden="true" /> Back to FEM website</Link>
    </aside>
  );
}

function PreviewFrame({ active, title, subtitle, children }: { active: WalletTab; title: string; subtitle: string; children: ReactNode }) {
  return (
    <div className="wallet-preview">
      <PreviewHeader />
      <div className="preview-layout">
        <PreviewSidebar active={active} />
        <main className="preview-main">
          <span className="preview-kicker">FEM WALLET / PROTOTYPE</span>
          <h1 className="preview-title">{title}</h1>
          <p className="preview-subtitle">{subtitle}</p>
          <div className="preview-warning" role="note"><Info aria-hidden="true" />This is a UI-only preview. It is not connected to a wallet or blockchain. No assets can be sent or received.</div>
          {children}
          <p className="preview-bottom">PREVIEW ONLY · NO WALLET CONNECTION · NO TRANSACTION SIGNING OR BROADCASTING</p>
        </main>
      </div>
    </div>
  );
}

function WalletOverview() {
  return (
    <PreviewFrame active="overview" title="Your wallet" subtitle="A familiar layout for onchain essentials, shown here as a non-functional preview.">
      <div className="preview-balance">
        <small>PORTFOLIO VALUE</small>
        <strong>Not connected</strong>
        <p>Asset balances are not available in this prototype.</p>
      </div>
      <div className="preview-action-row" aria-label="Wallet actions">
        <Link className="preview-action" href="/app/send"><Send aria-hidden="true" />Send</Link>
        <Link className="preview-action" href="/app/receive"><ArrowDownLeft aria-hidden="true" />Receive</Link>
        <Link className="preview-action" href="/app/activity"><Activity aria-hidden="true" />Activity</Link>
      </div>
      <section className="preview-card">
        <h2>Assets</h2>
        <div className="preview-empty">
          <Wallet aria-hidden="true" />
          <strong>No wallet connected</strong>
          <p>This preview does not connect to a wallet or show token balances.</p>
        </div>
      </section>
    </PreviewFrame>
  );
}

function SendPreview() {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [reviewed, setReviewed] = useState(false);
  const [attempted, setAttempted] = useState(false);
  const valid = recipient.trim().length > 0 && amount.trim().length > 0 && Number(amount) > 0;
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAttempted(true);
    setReviewed(valid);
  };
  return (
    <PreviewFrame active="send" title="Send" subtitle="A form review preview only. Nothing is transmitted, signed, or broadcast.">
      <section className="preview-card">
        <h2>Transfer details</h2>
        <form className="preview-form" onSubmit={submit} noValidate>
          <label className="preview-field">
            Recipient
            <input value={recipient} onChange={(event) => { setRecipient(event.target.value); setReviewed(false); }} placeholder="Enter a recipient address" autoComplete="off" aria-describedby="recipient-note" data-testid="input-recipient" />
            <small id="recipient-note">Use a placeholder for this UI review. No address is checked or submitted.</small>
          </label>
          <label className="preview-field">
            Amount
            <input inputMode="decimal" value={amount} onChange={(event) => { setAmount(event.target.value); setReviewed(false); }} placeholder="0.00" aria-describedby="amount-note" data-testid="input-amount" />
            <small id="amount-note">No token or network is selected in this prototype.</small>
          </label>
          {attempted && !valid && <p className="review-result" role="alert">Enter a recipient and a positive amount to preview the review step. Nothing will be sent.</p>}
          <button className="preview-button" type="submit" data-testid="button-review-send">Review details <ArrowRight size={15} aria-hidden="true" /></button>
        </form>
        {reviewed && (
          <div className="review-result" role="status">
            <strong>Review preview only.</strong> Recipient: {recipient.trim()} · Amount: {amount}. This is not a transaction and nothing has been sent.
          </div>
        )}
      </section>
    </PreviewFrame>
  );
}

function ReceivePreview() {
  return (
    <PreviewFrame active="receive" title="Receive" subtitle="Receiving details are not available in this prototype.">
      <section className="preview-card">
        <h2>Your receiving details</h2>
        <div className="preview-empty">
          <ArrowDownLeft aria-hidden="true" />
          <strong>No address or QR code available</strong>
          <p>This preview has no connected wallet, so it cannot generate or display a receiving address or QR code.</p>
        </div>
      </section>
    </PreviewFrame>
  );
}

function ActivityPreview() {
  return (
    <PreviewFrame active="activity" title="Activity" subtitle="A quiet start. There is no connected account or transaction history here.">
      <section className="preview-card">
        <h2>Recent activity</h2>
        <div className="preview-empty">
          <Activity aria-hidden="true" />
          <strong>No activity to show</strong>
          <p>Transactions are not loaded or invented for this UI-only preview.</p>
        </div>
      </section>
    </PreviewFrame>
  );
}

function SettingsPreview() {
  const [compact, setCompact] = useState(false);
  return (
    <PreviewFrame active="settings" title="Settings" subtitle="A small settings preview. Unknown network details are intentionally left unconfigured.">
      <section className="preview-card">
        <h2>Network configuration</h2>
        <div className="preview-detail"><span>Network</span><strong>Not configured</strong></div>
        <div className="preview-detail"><span>Chain ID</span><strong>Not provided</strong></div>
        <div className="preview-detail"><span>RPC endpoint</span><strong>Not provided</strong></div>
        <div className="preview-detail"><span>Wallet connection</span><strong>Unavailable in preview</strong></div>
      </section>
      <section className="preview-card">
        <h2>Interface</h2>
        <label className="preview-detail" style={{ cursor: 'pointer' }}>
          <span>Compact display</span>
          <input type="checkbox" checked={compact} onChange={(event) => setCompact(event.target.checked)} aria-label="Compact display preview" data-testid="toggle-compact-display" />
        </label>
        <p className="preview-subtitle" aria-live="polite">{compact ? 'Compact display preview is on.' : 'Compact display preview is off.'}</p>
      </section>
      <div className="preview-warning"><ShieldAlert aria-hidden="true" />Do not add network settings based on assumptions. Official configuration has not been supplied.</div>
    </PreviewFrame>
  );
}

export function WalletAppPage({ path }: { path: string }) {
  if (path === '/app/send') return <SendPreview />;
  if (path === '/app/receive') return <ReceivePreview />;
  if (path === '/app/activity') return <ActivityPreview />;
  if (path === '/app/settings') return <SettingsPreview />;
  return <WalletOverview />;
}

export function NotFound() {
  return (
    <div className="site-shell">
      <RouteHeader />
      <main className="route-page">
        <div className="wrap">
          <span className="eyebrow">404 / NOT FOUND</span>
          <h1 className="section-title">This page is<br /><em>not here.</em></h1>
          <p className="route-lede">The address may have changed, or the page may not exist.</p>
          <Link className="button button-primary" href="/">Return to FEM home <ArrowRight aria-hidden="true" /></Link>
        </div>
      </main>
      <RouteFooter />
    </div>
  );
}
