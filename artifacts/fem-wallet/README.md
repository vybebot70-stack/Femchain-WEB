# FEM Wallet & Chain

The FEM website introduces FEM Wallet and FEM Chain, with informational pages for the ecosystem, learning resources, EVM development concepts, and verified support links. It is a product website, not a functional wallet: it does not connect accounts or send, receive, or sign transactions.

FEM Chain is described here as EVM-compatible. FEM-specific network values and wallet download destinations are not included unless confirmed by an official FEM source.

## Pages

- `/` — FEM overview
- `/wallet` — wallet product information and availability
- `/chain` — FEM Chain overview
- `/ecosystem` — ecosystem information
- `/community` — community information
- `/learn` — blockchain learning resources
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

1. Import the repository into Vercel.
2. Set **Root Directory** to `artifacts/fem-wallet` and use the Next.js framework preset.
3. Keep the pnpm workspace files and shared workspace packages available to the project when prompted; this app depends on workspace packages outside its artifact directory.
4. Use the build command `pnpm --filter @workspace/fem-wallet run build`. The static export is written to `out/`.
5. No environment variables are currently required for the website.

The app is configured with `output: "export"` and `trailingSlash: true`. It uses static pages and does not require a runtime API server for the site itself.
