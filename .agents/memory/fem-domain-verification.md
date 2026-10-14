---
name: FEM domain verification
description: Public-site scope and domain status checked during FEM website work.
---

`help.femchain.online` provided support, FAQ, security, privacy, and terms information, but no chain specifications or official wallet-download/community destinations. Its FAQ described the wallet as being built as non-custodial; do not treat that as a guarantee about a released app.

`femchain.online` was parked on 2026-10-13.

The user states FEM Chain is EVM-compatible. Use Ethereum.org's code and educational material for general EVM patterns, while treating FEM-specific network settings and product behavior as unverified until supported by official FEM sources.

The FEM deliverable is an informational product website, not an in-browser wallet. Wallet content may explain the product, but must not provide account, send, receive, transaction, or settings screens unless the user explicitly asks.

**Why:** The user clarified that the goal is a website, not a wallet application.

**How to apply:** Keep FEM pages focused on product information, chain education, ecosystem discovery, and verified support links; do not add interactive wallet operations by default.

**Why:** The user's EVM clarification guides relevant education and implementation patterns, but does not establish FEM's chain ID, RPC, explorer, wallet release, or other operational details.

**How to apply:** Distinguish general EVM behavior from FEM-specific facts. Re-check both domains and use current official sources before adding chain specifications, app-download links, community links, network metrics, partnership claims, or claims about released wallet behavior.

For Vercel, the user confirmed that `fem-wallet` should be public at `/` and `api-server` should remain internal. The Replit `mockup-sandbox` is not a production FEM service, and there are no service bindings because the website does not call the API.

**Why:** The API currently only provides a health check and is not used by the static FEM website; publishing it without a product API surface would expose unnecessary routes.

**How to apply:** Keep the API internal unless the user requests public API routes or the website gains server-side calls that need a Vercel service binding.

For Vercel's Next.js framework service, keep the service output directory at `.next` even when `next.config.mjs` uses `output: "export"` and also generates static files under `out/`.

**Why:** Vercel's Next.js builder looks for `routes-manifest.json` in the framework output directory; pointing it at `out/` causes a missing manifest deployment error.

**How to apply:** Use `.next` as the configured Vercel output directory for this service; leave `out/` as the generated static export, not the framework output.

Keep public FEM copy centered on FEM's products and verified capabilities; do not discuss upstream implementation relationships.

**Why:** The user requested a professional FEM brand voice and explicitly asked that public copy not describe products by their implementation origins.

**How to apply:** Keep FEM marketing, help pages, metadata, and route labels focused on FEM. Upstream materials may inform general education but should not be presented as FEM product lineage.

The user wants animated, non-clickable crypto and wallet/provider logos; they explicitly approved copy saying the crypto marks represent assets FEM supports, lists, integrates, or endorses.

**Why:** The user chose this claim after its meaning was clarified; it is a copy decision, not independent technical verification.

**How to apply:** Keep the support claim scoped to the crypto-mark row. Keep wallet/provider logos non-clickable and do not infer wallet compatibility, provider partnerships, or network settings from it.
