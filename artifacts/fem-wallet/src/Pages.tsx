import { useState, type FormEvent, type ReactNode } from 'react';
import { Link } from 'wouter';
import {
  Activity,
  ArrowDownLeft,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Blocks,
  ExternalLink,
  Info,
  Send,
  Settings,
  ShieldAlert,
  Wallet,
} from 'lucide-react';

const logo = '/fem-mark.png';
const helpUrl = 'https://help.femchain.online';

const siteLinks = [
  { href: '/wallet', label: 'Wallet' },
  { href: '/chain', label: 'FEM Chain' },
  { href: '/ecosystem', label: 'Ecosystem' },
  { href: '/community', label: 'Community' },
  { href: '/help', label: 'Help' },
];

function RouteHeader() {
  return (
    <header className="route-header">
      <div className="wrap route-header-inner">
        <Link href="/" className="brand" aria-label="FEM home">
          <img src={logo} alt="" width="35" height="35" />
          <span>FEM<small>WALLET + CHAIN</small></span>
        </Link>
        <nav className="route-nav" aria-label="Main navigation">
          {siteLinks.map((item) => (
            <Link href={item.href} key={item.href}>{item.label}</Link>
          ))}
          <Link href="/app" className="button button-primary">Wallet preview <ArrowRight aria-hidden="true" /></Link>
        </nav>
      </div>
    </header>
  );
}

function RouteFooter() {
  return (
    <footer className="route-footer">
      <div className="wrap route-footer-row">
        <span>FEM / WALLET + CHAIN · An introduction, not an investment offer.</span>
        <nav className="route-footer-links" aria-label="Footer navigation">
          <Link href="/">Home</Link>
          {siteLinks.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
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
    lede: 'FEM Chain is the network layer associated with the FEM ecosystem. It is intended as a foundation for applications and activity, while technical network details remain unconfirmed here.',
    noteTitle: 'Technical information',
    note: 'No chain ID, RPC endpoint, explorer, token standard, or network configuration is provided on this site.',
    details: [
      { number: '01', title: 'A place for applications', body: 'FEM Chain is described at a high level as a foundation for applications and experiences within the FEM ecosystem.' },
      { number: '02', title: 'Details will be published carefully', body: 'Only verified technical information should be used to configure a wallet. No connection settings are included in this preview.' },
      { number: '03', title: 'Still taking shape', body: 'The public information available here is intentionally limited; there are no performance or security claims.' },
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
          {config.empty && (
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
