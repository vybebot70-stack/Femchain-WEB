import type { Metadata } from "next";

import "../src/index.css";
import "../src/fem-home-motion.css";

export const metadata: Metadata = {
  title: "FEM — Wallet, Chain, Swap & FEMScout",
  description:
    "Explore the FEM mobile-wallet direction, EVM-compatible chain, FEMSwap and FEMScout through product overviews and practical onchain learning.",
  icons: {
    icon: "/fem-mark.png",
  },
  openGraph: {
    title: "FEM — Wallet, Chain, Swap & FEMScout",
    description:
      "Product information and practical learning for the FEM ecosystem. This site does not provide wallet, trading or live explorer functions.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FEM — Wallet, Chain, Swap & FEMScout",
    description:
      "Product information and practical learning for the FEM ecosystem. This site does not provide wallet, trading or live explorer functions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
