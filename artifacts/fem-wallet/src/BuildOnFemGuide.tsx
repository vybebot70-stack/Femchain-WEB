import Link from "next/link";
import {
  ArrowRight,
  Blocks,
  Braces,
  Code2,
  Layers3,
  Network,
  ShieldCheck,
} from "lucide-react";

const compatibility = [
  {
    eyebrow: "FEM-DESCRIBED",
    title: "EVM-compatible execution",
    copy: "FEM Chain is described as EVM-compatible. That is the foundation for this guide—not a complete FEM runtime specification.",
    icon: Layers3,
  },
  {
    eyebrow: "COMMON EVM STARTING POINT",
    title: "Solidity and familiar tools",
    copy: "Solidity, EVM bytecode, Foundry, Hardhat, viem, and ethers are common EVM patterns. Check exact versions and behavior against FEM's official specifications.",
    icon: Braces,
  },
  {
    eyebrow: "VERIFY FOR FEM",
    title: "Network and runtime details",
    copy: "RPC methods, chain ID, gas asset, supported EVM revision, opcodes, precompiles, test networks, and explorer services need FEM-specific confirmation.",
    icon: Network,
  },
];

const patterns = [
  ["Token contracts", "ERC-20-style interfaces"],
  ["NFT projects", "ERC-721 / ERC-1155 patterns"],
  ["DeFi components", "Swaps, lending, and vault logic"],
  ["Governance", "Voting and onchain permissions"],
  ["Games", "Onchain rules and game assets"],
  ["Web3 applications", "Apps that read and write contract state"],
];

const steps = [
  {
    number: "01",
    title: "Build locally",
    copy: "Start a Solidity project with an EVM toolchain such as Foundry or Hardhat. Pin compiler and dependency versions.",
  },
  {
    number: "02",
    title: "Compile and test",
    copy: "Run unit and integration tests in a local EVM environment. Cover reverts, permissions, edge cases, and expected gas use.",
  },
  {
    number: "03",
    title: "Verify FEM settings",
    copy: "Confirm the official RPC, chain ID, gas rules, supported runtime features, and whether a FEM test network is available.",
  },
  {
    number: "04",
    title: "Deploy with care",
    copy: "Use only a verified FEM environment. Test there first when an official test network is provided, then connect a frontend with a chain check.",
  },
];

const femChecks = [
  "RPC endpoint and supported JSON-RPC methods",
  "Chain ID and network status",
  "Native gas asset, fee rules, and limits",
  "EVM revision, opcodes, and precompiles",
  "Official test network, faucet, and explorer",
];

export default function BuildOnFemGuide() {
  return (
    <main className="route-page dev-page build-fem-page">
      <div className="wrap">
        <section className="dev-guide-hero build-fem-hero">
          <div className="route-brand-art" aria-hidden="true"><span>F</span><i /><i /></div>
          <span className="eyebrow">FEM / BUILDERS / START HERE</span>
          <h1>Build on FEM.<br /><em>Start with EVM.</em></h1>
          <p className="route-lede">
            FEM Chain is EVM-compatible, giving builders familiar contract and application patterns to start from.
            Confirm FEM&apos;s exact network settings and runtime support before connecting tools or deploying.
          </p>
          <div className="build-fem-hero-actions">
            <Link className="button button-primary" href="/developers/contracts">Smart contract guide <ArrowRight aria-hidden="true" /></Link>
            <Link className="button button-light" href="/developers/evm">Understand the EVM <ArrowRight aria-hidden="true" /></Link>
          </div>
        </section>

        <section className="build-fem-section" aria-labelledby="build-fem-compatibility-title">
          <div className="build-fem-section-head">
            <div>
              <span className="eyebrow">WHAT IT SUPPORTS</span>
              <h2 id="build-fem-compatibility-title">A familiar EVM foundation.</h2>
            </div>
            <p>
              EVM compatibility gives you a useful starting point. It does not by itself confirm every Ethereum feature,
              tool version, or service on FEM.
            </p>
          </div>
          <div className="build-fem-compatibility-grid">
            {compatibility.map(({ eyebrow, title, copy, icon: Icon }) => (
              <article className="build-fem-compatibility-card" key={title}>
                <div className="build-fem-card-icon"><Icon aria-hidden="true" /></div>
                <span>{eyebrow}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="build-fem-section" aria-labelledby="build-fem-patterns-title">
          <div className="build-fem-section-head">
            <div>
              <span className="eyebrow">COMMON EVM PROJECT PATTERNS</span>
              <h2 id="build-fem-patterns-title">What you can build.</h2>
            </div>
            <p>
              These are examples developers can create with EVM contracts. They are not claims about live FEM
              deployments, listed assets, or integrations.
            </p>
          </div>
          <div className="build-fem-pattern-grid">
            {patterns.map(([title, detail], index) => (
              <article className="build-fem-pattern-card" key={title}>
                <span>0{index + 1} / PATTERN</span>
                <h3>{title}</h3>
                <p>{detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="build-fem-section" aria-labelledby="build-fem-steps-title">
          <div className="build-fem-section-head">
            <div>
              <span className="eyebrow">A PRACTICAL BUILD PATH</span>
              <h2 id="build-fem-steps-title">From local test to FEM.</h2>
            </div>
            <p>Keep the chain-specific step explicit: configure FEM only with verified FEM values.</p>
          </div>
          <ol className="build-fem-step-grid">
            {steps.map((step) => (
              <li className="build-fem-step-card" key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="build-fem-workbench" aria-labelledby="build-fem-workbench-title">
          <div className="build-fem-starter">
            <div className="build-fem-section-head">
              <div>
                <span className="eyebrow">LOCAL FIRST</span>
                <h2 id="build-fem-workbench-title">Compile before you connect.</h2>
              </div>
            </div>
            <p>General Foundry commands to create, compile, and test a local EVM project:</p>
            <pre><code>{`forge init fem-starter
cd fem-starter
forge build
forge test`}</code></pre>
            <p className="build-fem-sample-label">A small contract to compile and test locally:</p>
            <pre><code>{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Counter {
    uint256 public count;

    function increment() external {
        count += 1;
    }
}`}</code></pre>
            <div className="build-fem-code-note"><Code2 aria-hidden="true" /> This local workflow does not configure or deploy to FEM.</div>
          </div>
          <aside className="build-fem-verify">
            <div className="build-fem-card-icon"><ShieldCheck aria-hidden="true" /></div>
            <span className="eyebrow">BEFORE A FEM DEPLOYMENT</span>
            <h2>Verify the chain settings.</h2>
            <p>This guide does not supply FEM network values. Do not guess or copy settings from another network.</p>
            <ul>
              {femChecks.map((item) => <li key={item}><Blocks aria-hidden="true" />{item}</li>)}
            </ul>
            <Link className="route-text-link" href="/help">Open FEM help and safety <ArrowRight aria-hidden="true" /></Link>
          </aside>
        </section>

        <nav className="dev-guide-nav" aria-label="More developer guides">
          <Link href="/developers"><ArrowRight aria-hidden="true" /> All developer guides</Link>
          <Link href="/developers/evm">EVM guide <ArrowRight aria-hidden="true" /></Link>
          <Link href="/developers/contracts">Smart contracts <ArrowRight aria-hidden="true" /></Link>
          <Link href="/developers/wallets">Wallet integration patterns <ArrowRight aria-hidden="true" /></Link>
        </nav>
      </div>
    </main>
  );
}
