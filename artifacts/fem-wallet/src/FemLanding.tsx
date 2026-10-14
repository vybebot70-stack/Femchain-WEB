"use client";

import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowLeftRight,
  ArrowRight,
  ArrowUpRight,
  Blocks,
  ChevronRight,
  CircleHelp,
  Compass,
  Fingerprint,
  Globe2,
  Menu,
  ScanSearch,
  Plus,
  Wallet,
  X,
} from "lucide-react";

const principles = [
  {
    number: "01",
    title: "A wallet that feels familiar",
    body: "A clear place to manage your digital assets and connect with the wider onchain world.",
  },
  {
    number: "02",
    title: "A chain to explore",
    body: "FEM Chain is the foundation for applications and experiences built around FEM.",
  },
  {
    number: "03",
    title: "One connected experience",
    body: "Move from wallet to ecosystem with a product designed to make the next step feel natural.",
  },
];

const ecosystem = [
  {
    name: "FEM Chain",
    label: "THE FOUNDATION",
    description: "Explore the network layer designed to bring apps and people into the FEM ecosystem.",
    icon: <Globe2 aria-hidden="true" />,
    href: "/chain",
    featured: true,
  },
  {
    name: "Apps & tools",
    label: "ECOSYSTEM",
    description: "A place to discover onchain experiences as verified destinations become available.",
    icon: <Blocks aria-hidden="true" />,
    href: "/ecosystem",
  },
  {
    name: "FEMSwap",
    label: "SWAP PRODUCT",
    description: "Understand the product direction and learn the general mechanics behind token swaps.",
    icon: <ArrowLeftRight aria-hidden="true" />,
    href: "/swap",
  },
  {
    name: "FEMScout",
    label: "EXPLORER",
    description: "Learn how an explorer can make public blockchain records easier to inspect.",
    icon: <ScanSearch aria-hidden="true" />,
    href: "/scout",
  },
  {
    name: "Community",
    label: "TOGETHER",
    description: "Community spaces are on the way—official links will live here when they’re ready.",
    icon: <Compass aria-hidden="true" />,
    href: "/community",
  },
  {
    name: "Developers",
    label: "EVM BUILDING",
    description: "Explore the EVM concepts and builder resources that can inform work on FEM Chain.",
    icon: <Blocks aria-hidden="true" />,
    href: "/developers",
  },
];

const faq = [
  {
    question: "What is FEM?",
    answer:
      "FEM is a family of onchain products: FEM Wallet, the EVM-compatible FEM Chain, FEMSwap and FEMScout. This website explains what they are for; official downloads, network settings and live service links are shared only when verified.",
  },
  {
    question: "Do I need to know how blockchains work?",
    answer:
      "The site introduces familiar wallet and EVM concepts. FEM-specific settings and product behavior will be added when officially confirmed.",
  },
  {
    question: "Where can I download the wallet?",
    answer:
      "Download destinations have not been announced yet. When availability is confirmed, this page will point you to the official options. We will not send you to an unofficial download.",
  },
  {
    question: "Can I use FEMSwap from this website?",
    answer:
      "No. This is an informational website, not a swap interface. Do not assume an app, pool, supported token, network, fee or quote is available. See the verified FEMSwap FAQ and support pages for current information.",
  },
  {
    question: "Where is FEMScout?",
    answer:
      "FEMScout is described as the FEM Chain explorer, but an official destination and live data endpoint have not been confirmed. This site does not provide explorer search or chain data.",
  },
  {
    question: "What product links are official?",
    answer:
      "This site links to product overviews and the verified FEM Help Center. Wallet downloads, network configuration and a live FEMScout destination are not published here.",
  },
  {
    question: "How can I join the community?",
    answer:
      "Community destinations are coming soon. Follow the page as it develops, and check back here for verified ways to connect.",
  },
];

const navigation = [
  ["Wallet", "/wallet"],
  ["FEM Chain", "/chain"],
  ["FEMSwap", "/swap"],
  ["FEMScout", "/scout"],
  ["Explore", "/ecosystem"],
  ["Learn", "/learn"],
  ["Developers", "/developers"],
  ["Community", "/community"],
  ["Help", "/help"],
];

function useReveal() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".fem-motion");
    if (!root) return;
    const targets = root.querySelectorAll<HTMLElement>("[data-reveal]");
    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }
    root.classList.add("fm-motion-ready");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -35px 0px" },
    );
    targets.forEach((target) => observer.observe(target));
    return () => {
      observer.disconnect();
      root.classList.remove("fm-motion-ready");
    };
  }, []);
}

export function BannerMotion() {
  const [menuOpen, setMenuOpen] = useState(false);
  useReveal();
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="fem-motion">
      <header className="fm-header">
        <div className="fm-wrap fm-header-inner">
          <a className="fm-brand" href="/" aria-label="FEM home" onClick={closeMenu}>
            <span className="fm-brand-mark" aria-hidden="true">F</span>
            <span>FEM<small>ONCHAIN ECOSYSTEM</small></span>
          </a>
          <button
            className="fm-menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="fm-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <nav id="fm-navigation" className={`fm-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
            {navigation.map(([label, href]) => (
              <a
                href={href}
                key={href}
                onClick={closeMenu}
                data-testid={href === "/learn" ? "link-home-nav-learn" : href === "/help" ? "link-home-nav-help" : undefined}
              >
                {label}
              </a>
            ))}
            <a className="fm-button fm-button-blue fm-nav-cta" href="/ecosystem" onClick={closeMenu}>
              Explore FEM products <ArrowUpRight aria-hidden="true" />
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="fm-hero" aria-labelledby="fm-hero-title">
          <div className="fm-hero-art" aria-hidden="true">
            <div className="fm-banner-crop">
              <img src="/fem-banner.jpeg" alt="" />
            </div>
            <div className="fm-art-vignette" />
            <div className="fm-art-grid" />
            <div className="fm-globe-halo" />
            <div className="fm-scanline" />
          </div>
          <div className="fm-wrap fm-hero-layout">
            <div className="fm-hero-copy">
              <span className="fm-eyebrow"><i /> An EVM-compatible chain, made approachable</span>
              <h1 id="fm-hero-title"><span>Meet</span><span><em>FEM.</em> Move</span><span>forward.</span></h1>
              <p>FEM brings a mobile-first wallet, an EVM-compatible chain, a token-swap product and an explorer under one brand, with clear starting points for users and builders.</p>
              <div className="fm-hero-actions">
                <a className="fm-button fm-button-blue" href="/ecosystem">Explore FEM products <ArrowRight aria-hidden="true" /></a>
                <a className="fm-button fm-button-ghost" href="/chain">Discover FEM Chain <ArrowDown aria-hidden="true" /></a>
                <a className="fm-text-link" href="/learn" data-testid="link-hero-learn">Start learning <ArrowRight aria-hidden="true" /></a>
              </div>
              <div className="fm-hero-note"><span className="fm-note-rule" />WALLET + NETWORK, DESIGNED TO WORK TOGETHER</div>
            </div>

            <div className="fm-stage" aria-label="FEM mark surrounded by wallet and chain signals">
              <div className="fm-stage-glow" />
              <div className="fm-orbit fm-orbit-a" />
              <div className="fm-orbit fm-orbit-b" />
              <div className="fm-orbit fm-orbit-c" />
              <div className="fm-stage-core" aria-label="FEM">
                <span>FEM</span>
                <small>ONCHAIN ECOSYSTEM</small>
              </div>
              <div className="fm-float-panel fm-panel-wallet">
                <span className="fm-panel-icon"><Wallet aria-hidden="true" /></span>
                <span><b>FEM WALLET</b><small>A familiar starting point</small></span>
                <ArrowUpRight aria-hidden="true" className="fm-panel-arrow" />
              </div>
              <div className="fm-float-panel fm-panel-chain">
                <span className="fm-panel-icon"><Globe2 aria-hidden="true" /></span>
                <span><b>FEM CHAIN</b><small>EVM-compatible network</small></span>
                <ArrowUpRight aria-hidden="true" className="fm-panel-arrow" />
              </div>
              <div className="fm-float-chip"><Fingerprint aria-hidden="true" /> YOUR ONCHAIN HOME</div>
              <div className="fm-stage-index">FEM / <span>01—04</span></div>
            </div>
            <a className="fm-scroll-cue" href="#about"><span /> Scroll to explore</a>
          </div>
        </section>

        <div className="fm-intro-strip" aria-label="FEM introduction">
          <div className="fm-wrap fm-strip-inner">
            <span className="fm-mono">A CLEARER STARTING POINT</span>
            <p>Wallet, chain, swap and explorer—one FEM product family.</p>
            <span className="fm-strip-mark">FEM / 001</span>
          </div>
        </div>

        <section id="about" className="fm-section fm-about" aria-labelledby="fm-about-title">
          <div className="fm-wrap">
            <div className="fm-section-head" data-reveal>
              <div>
                <span className="fm-eyebrow"><i /> 01 / The idea</span>
                <h2 className="fm-section-title" id="fm-about-title">Onchain, made<br />more <em>approachable.</em></h2>
              </div>
              <p>FEM brings a wallet, an EVM-compatible network, swap tools and a chain explorer into one product family—with room for people to learn and builders to explore.</p>
            </div>
            <div className="fm-intro-grid">
              <div className="fm-intro-aside" data-reveal>
                <span className="fm-mono fm-blue-text">A DIFFERENT KIND OF ENTRY POINT</span>
                <h3>Familiar enough to begin. Open enough to grow.</h3>
                <p>We’re building with the everyday wallet experience in mind: understandable tools, connected to a place for new ideas.</p>
                <div className="fm-aside-orbit" aria-hidden="true"><span>F</span></div>
              </div>
              <div className="fm-principles">
                {principles.map((item) => (
                  <article className="fm-principle" key={item.number} data-reveal>
                    <span className="fm-principle-no">{item.number}</span>
                    <div><h3>{item.title}</h3><p>{item.body}</p></div>
                    <ChevronRight aria-hidden="true" />
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="wallet" className="fm-wallet-section" aria-labelledby="fm-wallet-title">
          <div className="fm-wrap">
            <div className="fm-wallet-panel">
              <div className="fm-wallet-copy" data-reveal>
                <span className="fm-eyebrow"><i /> 02 / FEM Wallet</span>
                <h2 id="fm-wallet-title">Your next<br />move, <em>in hand.</em></h2>
                <p>A mobile-first wallet experience for keeping your onchain essentials close and exploring the FEM ecosystem from one familiar place.</p>
                <a className="fm-button fm-button-light" href="/wallet">Wallet availability <ArrowUpRight aria-hidden="true" /></a>
                <div className="fm-availability">OFFICIAL DOWNLOADS · NOT ANNOUNCED</div>
              </div>
              <div className="fm-wallet-visual" aria-hidden="true">
                <div className="fm-wallet-orbit" />
                <div className="fm-product-card">
                  <div className="fm-product-card-top"><span className="fm-product-mark">F</span><span>FEM / INFORMATION</span><span>01—03</span></div>
                  <div className="fm-product-card-main">
                    <span>THE WALLET + THE CHAIN</span>
                    <strong>Everything<br /><em>starts here.</em></strong>
                    <p>Explore FEM, learn about the EVM-compatible chain, and follow verified product updates.</p>
                  </div>
                  <div className="fm-product-card-bottom"><span>01 / PRODUCT</span><span>02 / ECOSYSTEM</span><span>03 / BUILDERS</span></div>
                </div>
                <div className="fm-product-tag fm-product-tag-chain">FEM / CHAIN</div>
                <div className="fm-product-tag fm-product-tag-site">FEM / WEBSITE</div>
              </div>
            </div>
          </div>
        </section>

        <section id="ecosystem" className="fm-chain-section" aria-labelledby="fm-ecosystem-title">
          <div className="fm-wrap">
            <div className="fm-chain-top" data-reveal>
              <div>
                <span className="fm-eyebrow"><i /> 03 / The ecosystem</span>
                <h2 className="fm-section-title" id="fm-ecosystem-title">A chain is a<br /><em>place to build.</em></h2>
              </div>
              <p>FEM Chain is EVM-compatible. Explore the role of Wallet, Chain, Swap and FEMScout—without mistaking a product overview for a live app.</p>
            </div>
            <div className="fm-ecosystem-grid">
              {ecosystem.map((item) => (
                <article className={`fm-eco-card${item.featured ? " is-featured" : ""}`} key={item.name} data-reveal>
                  <div className="fm-eco-top"><div className="fm-eco-icon">{item.icon}</div><span className="fm-mono">{item.label}</span></div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <a className="fm-eco-link" href={item.href}>Explore <ArrowRight aria-hidden="true" /></a>
                </article>
              ))}
            </div>
            <div className="fm-chain-note"><span /> Product information only. Live apps, chain settings and explorer data are not provided here.</div>
          </div>
        </section>

        <section id="community" className="fm-community">
          <div className="fm-wrap">
            <div className="fm-community-box" data-reveal>
              <div className="fm-community-content">
                <span className="fm-eyebrow"><i /> 04 / Find your people</span>
                <h2>Good things<br />happen <em>together.</em></h2>
                <p>FEM is a work in progress, and the people around it matter. Community spaces are on the way—official links will live here when they’re ready.</p>
                <div className="fm-community-actions">
                  <a className="fm-button fm-button-light" href="/learn">Explore FEM Learn <ArrowUpRight aria-hidden="true" /></a>
                  <a className="fm-button fm-button-outline" href="#faq">What is FEM? <CircleHelp aria-hidden="true" /></a>
                </div>
              </div>
              <div className="fm-community-foot">COMMUNITY LINKS · COMING SOON</div>
              <div className="fm-community-sphere" aria-hidden="true" />
            </div>
          </div>
        </section>

        <section id="faq" className="fm-faq-section" aria-labelledby="fm-faq-title">
          <div className="fm-wrap fm-faq-grid">
            <div className="fm-faq-intro" data-reveal>
              <span className="fm-eyebrow"><i /> A few first questions</span>
              <h2 className="fm-section-title" id="fm-faq-title">Start with<br /><em>the basics.</em></h2>
              <p>Helpful context as FEM takes shape. Details will be updated as official information becomes available.</p>
            </div>
            <div className="fm-faq-list">
              {faq.map((item) => (
                <details className="fm-faq-item" key={item.question}>
                  <summary>{item.question}<Plus aria-hidden="true" /></summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="fm-footer">
        <div className="fm-wrap">
          <div className="fm-footer-main">
            <a className="fm-footer-brand" href="/" aria-label="FEM home"><span>F</span> FEM <small>ONCHAIN ECOSYSTEM</small></a>
            <nav className="fm-footer-links" aria-label="Footer navigation">
              <a href="/wallet">Wallet</a><a href="/chain">FEM Chain</a><a href="/swap">FEMSwap</a><a href="/scout">FEMScout</a><a href="/ecosystem">Ecosystem</a>
              <a href="/learn" data-testid="link-home-footer-learn">Learn</a><a href="/developers">Developers</a><a href="/community">Community</a><a href="/help">Help</a>
              <a href="https://help.femchain.online" target="_blank" rel="noopener noreferrer" data-testid="link-help-center">Help center <ArrowUpRight aria-hidden="true" /></a>
            </nav>
          </div>
          <div className="fm-footer-bottom">
            <span>© {new Date().getFullYear()} FEM. An introduction, not an investment offer.</span>
            <span>PRODUCT ACCESS LINKS ARE SHARED ONLY WHEN VERIFIED.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
