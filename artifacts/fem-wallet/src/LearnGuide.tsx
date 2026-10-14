import Link from "next/link";
import { ArrowRight, ArrowUpRight, Info, ShieldCheck } from "lucide-react";
import { RouteFooter, RouteHeader } from "./Pages";

const guides = {
  "/learn/wallet-basics": {
    eyebrow: "FEM LEARN / WALLET BASICS",
    title: "Keys are the point. Keep them yours.",
    lede: "A practical introduction to blockchain wallet accounts, keys, transaction approval and the habits that keep sensitive credentials private.",
    sections: [
      ["An account is a network identity", "A wallet interface helps you interact with blockchain accounts. An address is often shareable; the credentials that authorize activity are not."],
      ["Keys authorize activity", "A private key can authorize actions for an account. A recovery phrase may restore access in some wallet designs. Anyone who obtains these secrets may be able to act as you."],
      ["Signing is an approval", "Wallet software can ask you to review and approve a transaction. Read the requested action, destination, amount and selected network before you approve."],
      ["Safer habits", "Never share a recovery phrase, private key, wallet password or one-time code. Treat unsolicited support messages and unofficial downloads with caution."],
    ],
    next: [{ href: "/wallet", label: "FEM Wallet overview" }, { href: "/help", label: "FEM verified safety information" }],
    reading: [{ label: "Ethereum.org: Wallets", href: "https://ethereum.org/wallets/" }],
    note: "General educational information, not instructions for a specific FEM Wallet release. Official wallet downloads have not been announced.",
  },
  "/learn/evm-basics": {
    eyebrow: "FEM LEARN / EVM BASICS",
    title: "A shared machine for onchain applications.",
    lede: "The Ethereum Virtual Machine is an execution environment used by EVM-compatible networks. Learn the broad ideas without assuming FEM-specific technical settings.",
    sections: [
      ["Programs become bytecode", "Smart-contract source code is compiled into instructions a compatible execution environment can process. Exact toolchain support depends on the network."],
      ["Transactions change state", "Execution applies network rules to a transaction and the current shared state, producing an accepted result or a failure."],
      ["Gas represents work", "Gas is a unit associated with computational work. Fee assets, pricing rules and limits are network-defined; EVM compatibility does not specify those values."],
      ["Compatibility is not configuration", "FEM Chain is EVM-compatible. Its chain ID, RPC endpoint, supported protocol upgrades, gas asset and development network settings are not published here."],
    ],
    next: [{ href: "/chain", label: "FEM Chain overview" }, { href: "/developers", label: "Builder guides" }],
    reading: [{ label: "Ethereum.org: EVM overview", href: "https://ethereum.org/developers/docs/evm/" }],
    note: "This general introduction is not a FEM deployment guide. Do not configure tools with guessed network values.",
  },
  "/learn/swaps": {
    eyebrow: "FEM LEARN / TOKEN SWAPS",
    title: "A swap is more than two amounts.",
    lede: "Understand the general mechanics behind token swaps, liquidity pools and slippage before encountering a swap interface.",
    sections: [
      ["Liquidity makes exchange possible", "Some decentralized exchanges use pools where participants provide token pairs. A trade changes the pool’s composition and can affect the implied price."],
      ["Price impact and slippage", "Price impact describes how a trade can move a pool’s price. Slippage is the difference between an expected and final execution, which may change while a transaction is pending."],
      ["Review every detail", "In a real product, check the assets, network, estimated output, price impact, slippage settings, fees and any approval request. Transactions may be difficult to reverse."],
      ["FEMSwap details need verification", "FEMSwap has official FAQ and support pages. Current deployments, networks, features and fees should be confirmed there; this site provides no quote, pool or trading controls."],
    ],
    next: [{ href: "/swap", label: "FEMSwap overview" }, { href: "https://help.femchain.online/femswap-faq.html", label: "Official FEMSwap FAQ" }],
    reading: [{ label: "Ethereum.org: DeFi concepts", href: "https://ethereum.org/defi/" }],
    note: "This is generic educational content, not a claim that any FEMSwap pool, token, network, contract or fee is available.",
  },
  "/learn/explorers": {
    eyebrow: "FEM LEARN / BLOCK EXPLORERS",
    title: "Read the public record, carefully.",
    lede: "Block explorers organize public blockchain data into pages that can help people follow transactions, blocks and addresses.",
    sections: [
      ["Transaction pages", "A transaction page may show its status, sender and recipient addresses, included block and other network-defined details."],
      ["Blocks and addresses", "Block pages group transactions and metadata. Address pages can summarize public activity associated with an address; they do not establish who controls it."],
      ["Useful, not infallible", "An explorer presents data from a particular network and index. Confirm the network and interpret results carefully; an explorer cannot prove that a request is safe."],
      ["FEMScout destination", "FEMScout is described as the FEM Chain explorer, but an official destination and live data endpoint have not been confirmed. No search or FEM data is available on this site."],
    ],
    next: [{ href: "/scout", label: "FEMScout overview" }, { href: "/chain", label: "FEM Chain overview" }],
    reading: [{ label: "Ethereum.org: block explorer basics", href: "https://ethereum.org/developers/docs/data-and-analytics/block-explorers/" }],
    note: "Explorer concepts are general. This site does not present live FEM blocks, balances or transaction lookups.",
  },
} as const;

export default function LearnGuide({ path }: { path: keyof typeof guides }) {
  const guide = guides[path];
  return <div className="site-shell"><RouteHeader />
    <main className="learn-guide-page">
      <div className="wrap">
        <nav className="learn-breadcrumb" aria-label="Breadcrumb"><Link href="/learn">FEM Learn</Link><span>/</span><span>{guide.eyebrow.split("/").at(-1)?.trim()}</span></nav>
        <header className="learn-guide-hero">
          <div className="route-brand-art" aria-hidden="true"><span>F</span><i /><i /></div>
          <span className="eyebrow">{guide.eyebrow}</span><h1>{guide.title}</h1><p className="route-lede">{guide.lede}</p>
        </header>
        <div className="learn-guide-layout">
          <section className="learn-guide-sections" aria-label="Lesson sections">
            {guide.sections.map(([title, body], index) => <article className="learn-guide-section" key={title}><span>0{index + 1} / FIELD NOTE</span><div><h2>{title}</h2><p>{body}</p></div></article>)}
          </section>
          <aside className="learn-guide-aside"><ShieldCheck aria-hidden="true" /><span className="eyebrow">Keep the context</span><p>{guide.note}</p><Link href="/help">Official FEM safety guidance <ArrowRight aria-hidden="true" /></Link></aside>
        </div>
        <nav className="learn-guide-next" aria-label="Related pages">{guide.next.map((item) => item.href.startsWith("http") ? <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer">{item.label}<ArrowUpRight aria-hidden="true" /></a> : <Link key={item.href} href={item.href}>{item.label}<ArrowRight aria-hidden="true" /></Link>)}</nav>
        <section className="learn-further-reading" aria-labelledby="learn-reading-title">
          <div><span className="eyebrow">Further reading</span><h2 id="learn-reading-title">General background sources</h2><p>These public references offer broader educational context. They are not evidence of FEM products, integrations or functionality.</p></div>
          <div className="learn-reading-links">{guide.reading.map((item) => <a href={item.href} key={item.href} target="_blank" rel="noopener noreferrer">{item.label}<ArrowUpRight aria-hidden="true" /></a>)}</div>
        </section>
        <div className="learn-guide-disclaimer"><Info aria-hidden="true" /><p>Educational material only. It is not financial advice, security advice or a description of unverified FEM functionality.</p></div>
      </div>
    </main>
    <RouteFooter /></div>;
}
