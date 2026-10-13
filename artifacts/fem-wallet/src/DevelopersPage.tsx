import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Blocks,
  Braces,
  Code2,
  ExternalLink,
  Info,
  Layers3,
  Network,
  ShieldCheck,
  Wallet,
} from "lucide-react";

import { RouteFooter, RouteHeader } from "./Pages";

const topics = [
  {
    href: "/developers/evm",
    number: "01",
    title: "EVM, explained",
    copy: "A shared execution model for smart-contract bytecode, state changes, and transaction processing.",
    icon: Layers3,
  },
  {
    href: "/developers/contracts",
    number: "02",
    title: "Smart contracts",
    copy: "Explore Solidity, contract testing, and the checks to make before using any EVM network.",
    icon: Braces,
  },
  {
    href: "/developers/wallets",
    number: "03",
    title: "Wallet integrations",
    copy: "Understand common EVM wallet-provider patterns without guessing FEM network values.",
    icon: Wallet,
  },
];

const guides = {
  "/developers/evm": {
    eyebrow: "FEM / DEVELOPER NOTES / EVM",
    title: "A familiar execution model.",
    lede:
      "The Ethereum Virtual Machine (EVM) is a deterministic execution environment used by EVM-compatible networks to run smart-contract bytecode. FEM Chain is EVM-compatible; its exact implementation and supported features need FEM-specific documentation.",
    blocks: [
      {
        title: "State changes",
        copy: "A transaction supplies an input to the network. Valid execution applies the network's rules to its current state and produces a new state.",
      },
      {
        title: "Contracts and bytecode",
        copy: "Developer tools can compile contract code into bytecode for EVM execution. Compiler version, supported opcodes, and network rules still matter.",
      },
      {
        title: "Gas is chain-specific",
        copy: "Gas measures computational work. Fee assets, fee markets, pricing, and limits are defined by each network; this page does not specify FEM values.",
      },
    ],
    caution:
      "EVM-compatible does not by itself identify FEM's supported hard fork, opcodes, precompiles, JSON-RPC behavior, or fee rules. Use an official FEM specification before configuring tools.",
    external: {
      label: "Ethereum.org: EVM overview",
      href: "https://ethereum.org/developers/docs/evm/",
    },
  },
  "/developers/contracts": {
    eyebrow: "FEM / DEVELOPER NOTES / CONTRACTS",
    title: "Build carefully. Test first.",
    lede:
      "Solidity and familiar EVM development tools can provide a starting point for EVM-compatible networks. Test the exact compiler, runtime features, and standards against FEM's published specification before deployment.",
    blocks: [
      {
        title: "Start with a supported toolchain",
        copy: "Pin compiler and library versions, review their release notes, and confirm that the FEM environment supports the instructions and precompiles your contracts use.",
      },
      {
        title: "Test the behavior, not the label",
        copy: "Write unit and integration tests for success paths, reverts, access control, and edge cases. Compatibility claims do not replace testing on a verified FEM development network.",
      },
      {
        title: "Review security separately",
        copy: "Use established secure-development practices and independent review where appropriate. A successful compile is not a security audit.",
      },
    ],
    caution:
      "No FEM RPC endpoint, chain ID, deployment network, explorer, or test-token source is published here. Do not deploy contracts to a guessed network.",
    external: {
      label: "Ethereum.org: smart contracts",
      href: "https://ethereum.org/developers/docs/smart-contracts/",
    },
  },
  "/developers/wallets": {
    eyebrow: "FEM / DEVELOPER NOTES / WALLETS",
    title: "Wallets should make the network clear.",
    lede:
      "EVM applications commonly communicate with injected wallets through a provider interface. Ask for a connection only after a clear user action, and show the selected network before presenting a transaction for approval.",
    blocks: [
      {
        title: "Request access deliberately",
        copy: "A provider request such as eth_requestAccounts can prompt a user to share account access. Never trigger it on page load or imply that a connection is required just to read this guide.",
      },
      {
        title: "Check the active chain",
        copy: "The eth_chainId method reports the connected provider's chain ID. Compare it with a verified network specification; this guide intentionally supplies no FEM value.",
      },
      {
        title: "Keep signing in the wallet",
        copy: "A web app should present the requested action clearly and let the wallet handle signing. Never ask users to paste recovery phrases or private keys into a website.",
      },
    ],
    caution:
      "This is general EVM guidance, not a live wallet connection. FEM Wallet is still shown as a UI preview, and no chain-add request can be safely prepared without official network values.",
    external: {
      label: "Ethereum.org: wallet connection",
      href: "https://ethereum.org/developers/docs/apis/javascript/",
    },
  },
} as const;

function EvmModel() {
  return (
    <div className="dev-model" aria-label="Illustration of smart-contract code being executed by an EVM to update network state">
      <div className="dev-model-orbit dev-model-orbit-a" />
      <div className="dev-model-orbit dev-model-orbit-b" />
      <div className="dev-model-core">
        <span>FEM</span>
        <strong>EVM</strong>
      </div>
      <div className="dev-model-chip dev-model-chip-code"><Code2 aria-hidden="true" /> BYTECODE</div>
      <div className="dev-model-chip dev-model-chip-state"><Network aria-hidden="true" /> STATE</div>
      <div className="dev-model-chip dev-model-chip-gas"><Blocks aria-hidden="true" /> GAS</div>
      <div className="dev-model-caption">EXECUTION / CONCEPTUAL MODEL</div>
    </div>
  );
}

function DevelopersHub() {
  return (
    <>
      <section className="dev-hero">
        <div className="wrap dev-hero-grid">
          <div className="dev-hero-copy">
            <span className="eyebrow">FEM / BUILDERS / 01</span>
            <h1>Build on a<br /><em>familiar EVM.</em></h1>
            <p>FEM Chain is EVM-compatible. Start with the shared concepts, then verify FEM's network details and supported features before connecting tools or deploying code.</p>
            <div className="dev-hero-actions">
              <Link className="button button-primary" href="/developers/evm">Explore EVM basics <ArrowRight aria-hidden="true" /></Link>
              <Link className="button button-light" href="/chain">FEM Chain overview <ArrowUpRight aria-hidden="true" /></Link>
            </div>
          </div>
          <EvmModel />
        </div>
      </section>
      <main className="route-page dev-page">
        <div className="wrap">
          <section className="dev-topic-grid" aria-label="Developer guides">
            {topics.map(({ href, number, title, copy, icon: Icon }) => (
              <Link className="dev-topic-card" href={href} key={href}>
                <div className="dev-topic-top"><span>{number} / GUIDE</span><Icon aria-hidden="true" /></div>
                <h2>{title}</h2>
                <p>{copy}</p>
                <span className="dev-topic-link">Read guide <ArrowRight aria-hidden="true" /></span>
              </Link>
            ))}
          </section>
          <section className="dev-caution">
            <div className="dev-caution-icon"><Info aria-hidden="true" /></div>
            <div>
              <span className="eyebrow">Before you configure anything</span>
              <h2>Compatibility is a starting point, not a network specification.</h2>
              <p>FEM-specific chain ID, RPC, explorer, gas details, and supported EVM features are not listed here. Use verified FEM documentation when those values are published.</p>
            </div>
            <Link className="route-text-link" href="/help">FEM help and safety <ArrowRight aria-hidden="true" /></Link>
          </section>
        </div>
      </main>
    </>
  );
}

function DeveloperGuide({ path }: { path: keyof typeof guides }) {
  const guide = guides[path];
  return (
    <main className="route-page dev-page">
      <div className="wrap">
        <div className="dev-guide-hero">
          <span className="eyebrow">{guide.eyebrow}</span>
          <h1>{guide.title}</h1>
          <p className="route-lede">{guide.lede}</p>
        </div>
        <div className="dev-guide-layout">
          <section className="dev-guide-list" aria-label="Guide sections">
            {guide.blocks.map((block, index) => (
              <article className="dev-guide-block" key={block.title}>
                <span>0{index + 1} / FIELD NOTE</span>
                <div>
                  <h2>{block.title}</h2>
                  <p>{block.copy}</p>
                </div>
              </article>
            ))}
          </section>
          <aside className="dev-guide-aside">
            <div className="dev-guide-aside-mark"><ShieldCheck aria-hidden="true" /></div>
            <span className="eyebrow">FEM-specific details</span>
            <p>{guide.caution}</p>
            <a href={guide.external.href} target="_blank" rel="noopener noreferrer">
              {guide.external.label} <ExternalLink aria-hidden="true" />
            </a>
          </aside>
        </div>
        <nav className="dev-guide-nav" aria-label="More developer guides">
          <Link href="/developers"><ArrowRight aria-hidden="true" /> All developer guides</Link>
          {topics.filter((topic) => topic.href !== path).map((topic) => (
            <Link key={topic.href} href={topic.href}>{topic.title} <ArrowUpRight aria-hidden="true" /></Link>
          ))}
        </nav>
      </div>
    </main>
  );
}

export default function DevelopersPage({ path }: { path: string }) {
  const isHub = path === "/developers";
  const isKnownGuide = path in guides;
  return (
    <div className="site-shell">
      <RouteHeader />
      {isHub ? <DevelopersHub /> : isKnownGuide ? <DeveloperGuide path={path as keyof typeof guides} /> : null}
      <RouteFooter />
    </div>
  );
}
