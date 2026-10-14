# FEM Ecosystem Website

The FEM website presents product overviews for FEM Wallet, FEM Chain, FEMSwap and FEMScout, along with general learning guides, EVM developer resources and verified support links. It is an informational site, not a wallet or trading interface: it does not connect accounts, send or receive assets, sign transactions, or display live explorer data.

FEM Chain is described here as EVM-compatible. FEM-specific network values and wallet download destinations are not included unless confirmed by an official FEM source.

## Pages

- `/` — FEM overview
- `/wallet` — wallet product information and availability
- `/chain` — FEM Chain overview
- `/swap` — FEMSwap product overview and verified support references
- `/scout` — FEMScout explorer overview; no live explorer link or chain data
- `/ecosystem` — ecosystem information
- `/community` — community information
- `/learn` — blockchain learning resources
- `/learn/wallet-basics` — general wallet, key and safety lesson
- `/learn/evm-basics` — general EVM execution lesson
- `/learn/swaps` — general token-swap and liquidity lesson
- `/learn/explorers` — general block-explorer lesson
- `/developers` — developer overview
- `/developers/evm` — EVM concepts
- `/developers/contracts` — smart contract basics
- `/developers/wallets` — wallet integration concepts
- `/help` — verified help-center information

## Development

This app is a Next.js package inside a pnpm workspace. Run commands from the repository root:

```bash
pnpm install
PORT=3000 pnpm --filter @workspace/fem-wallet run dev
```

Typecheck the app:

```bash
pnpm --filter @workspace/fem-wallet run typecheck
```

Build the static site:

```bash
pnpm --filter @workspace/fem-wallet run build
```

The build uses Next.js static export and writes the site to `artifacts/fem-wallet/out/`.

## Deploying on Vercel

The repository root contains a Vercel Services configuration in `vercel.json`. Import the repository with the Vercel project root set to the repository root so that it can read the service definitions and pnpm workspace.

The configured routing:

- `fem-wallet` is public at `/` and handles the site's pages.
- `api-server` is included as an internal service. The FEM site does not currently call it; its only application endpoint is `/api/healthz`.
- `mockup-sandbox` is excluded because it is Replit component-preview tooling, not a production FEM service.
- No service bindings are configured because no service currently calls another service.

The site uses Next.js static export (`output: "export"`) and writes static files to `out/`. The Vercel Next.js service uses `.next` as its framework output directory so Vercel can read `routes-manifest.json`; do not override it to `out/`. No environment variables are currently required for the site.

To make the API public on the same domain, add a `/api/(.*)` rewrite to `api-server` before the catch-all rewrite to `fem-wallet`. Confirm that exposure before publishing.
