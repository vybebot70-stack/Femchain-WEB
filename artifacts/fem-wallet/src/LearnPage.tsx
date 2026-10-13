import { ArrowRight, ArrowUpRight, Blocks, BookOpen, Compass, Fingerprint, Info, Layers3, ShieldCheck, Wallet } from 'lucide-react';
import { Link } from 'wouter';
import { RouteFooter, RouteHeader } from './Pages';

const lessons = [
  {
    number: '01',
    title: 'A wallet is a way to use keys',
    body: 'A wallet helps you manage the cryptographic keys used to access blockchain accounts. It does not store coins like a physical purse; activity and balances are recorded by a network.',
    icon: Fingerprint,
  },
  {
    number: '02',
    title: 'Networks keep shared records',
    body: 'A blockchain is a shared record maintained by a network of computers. Applications can use a network to coordinate activity without relying on one central record keeper.',
    icon: Layers3,
  },
  {
    number: '03',
    title: 'Transactions need careful review',
    body: 'A transaction can make a lasting change. Check the recipient, amount, network, and any requested permissions before approving anything in a real wallet.',
    icon: ShieldCheck,
  },
  {
    number: '04',
    title: 'Apps connect through wallets',
    body: 'Some onchain applications request a wallet connection so they can propose actions for you to review. A connection is not the same as approving a transaction.',
    icon: Blocks,
  },
];

const paths = [
  {
    number: 'START HERE',
    title: 'The wallet basics',
    description: 'Get oriented with accounts, keys, signing, and the choices a wallet helps you make.',
    icon: Wallet,
    href: '#wallet-basics',
    label: 'Begin with the basics',
  },
  {
    number: 'NEXT',
    title: 'How networks fit in',
    description: 'Understand blockchains, transactions, and why network details matter.',
    icon: Layers3,
    href: '#networks',
    label: 'Explore networks',
  },
  {
    number: 'ALWAYS',
    title: 'Stay safe onchain',
    description: 'Learn the habits that help protect your wallet and your decisions.',
    icon: ShieldCheck,
    href: '#safety',
    label: 'Read the safety guide',
  },
];

export default function LearnPage() {
  return (
    <div className="site-shell learn-page">
      <RouteHeader />
      <main>
        <section className="learn-hero" aria-labelledby="learn-title">
          <div className="wrap learn-hero-grid">
            <div className="learn-hero-copy">
              <span className="eyebrow">FEM / FIELD NOTES FOR ONCHAIN</span>
              <h1 id="learn-title">Start with<br /><em>what matters.</em></h1>
              <p>A clear, practical introduction to wallets, blockchain networks, and the decisions you may meet along the way. No prior experience needed.</p>
              <div className="learn-hero-actions">
                <a className="button button-primary" href="#start-here" data-testid="link-learn-start">
                  Start learning <ArrowRight aria-hidden="true" />
                </a>
                <Link href="/wallet" className="button button-light" data-testid="link-learn-wallet">
                  Meet FEM Wallet <ArrowUpRight aria-hidden="true" />
                </Link>
              </div>
              <div className="learn-progress">A SHORT GUIDE · BUILT FOR THE CURIOUS</div>
            </div>
            <div className="learn-hero-art" aria-label="Dimensional FEM mark at the center of a learning path">
              <div className="learn-orbital" />
              <div className="learn-cube"><img src="/fem-mark.png" alt="FEM mark" /></div>
              <div className="learn-chip top"><BookOpen aria-hidden="true" /> LEARN AT YOUR PACE</div>
              <div className="learn-chip bottom"><Compass aria-hidden="true" /> WALLET · NETWORK · SAFETY</div>
            </div>
          </div>
        </section>

        <section className="learn-paths" id="start-here" aria-labelledby="paths-title">
          <div className="wrap">
            <div className="learn-section-head">
              <div>
                <span className="eyebrow">A useful place to begin</span>
                <h2 id="paths-title">Three paths.<br /><em>One clear start.</em></h2>
              </div>
              <p>Choose the question on your mind. Each guide stands on its own, and the order is here to make the unfamiliar feel easier.</p>
            </div>
            <div className="learn-path-grid">
              {paths.map((path) => {
                const Icon = path.icon;
                return (
                  <a className="learn-path-card" href={path.href} key={path.title} data-testid={`link-learn-${path.href.slice(1)}`}>
                    <div className="learn-path-index"><span>{path.number}</span><ArrowUpRight aria-hidden="true" /></div>
                    <div className="learn-path-icon"><Icon aria-hidden="true" /></div>
                    <h3>{path.title}</h3>
                    <p>{path.description}</p>
                    <span className="learn-path-link">{path.label}<ArrowRight aria-hidden="true" /></span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <section className="learn-reading" aria-label="Onchain concepts">
          <div className="wrap learn-reading-grid">
            <div className="learn-reading-intro">
              <span className="eyebrow">The essentials</span>
              <h2>Learn the shape<br />of <em>onchain.</em></h2>
              <p>These are general concepts used across blockchain systems. They explain the wider landscape, not FEM-specific network configuration.</p>
            </div>
            <div className="learn-list">
              {lessons.map((lesson) => {
                const Icon = lesson.icon;
                const sectionId = lesson.number === '01' ? 'wallet-basics' : lesson.number === '02' ? 'networks' : lesson.number === '03' ? 'safety' : undefined;
                return (
                  <article className="learn-lesson" id={sectionId} key={lesson.number}>
                    <span>{lesson.number}</span>
                    <div><h3>{lesson.title}</h3><p>{lesson.body}</p></div>
                    <Icon aria-hidden="true" />
                  </article>
                );
              })}
              <div className="learn-note"><Info aria-hidden="true" /><span>Learning content is educational, not financial or security advice. Never share a recovery phrase or private key with anyone.</span></div>
            </div>
          </div>
        </section>

        <section className="learn-next">
          <div className="wrap learn-next-panel">
            <span className="eyebrow eyebrow-light">Keep exploring FEM</span>
            <h2>Curiosity first.<br /><em>Connections later.</em></h2>
            <p>FEM Wallet availability, network configuration, and ecosystem destinations have not been confirmed. Learn about the direction without adding unverified settings or links.</p>
            <Link href="/wallet" className="button button-light" data-testid="link-learn-wallet-details">
              What we know about FEM Wallet <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <RouteFooter />
    </div>
  );
}
