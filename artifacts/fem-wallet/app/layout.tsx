import type { Metadata } from "next";

import "../src/index.css";
import "../src/fem-home-motion.css";

export const metadata: Metadata = {
  title: "FEM Wallet & Chain — A Clearer Way Onchain",
  description:
    "Meet FEM: a mobile wallet and EVM-compatible chain with familiar foundations and room to explore.",
  icons: {
    icon: "/fem-mark.png",
  },
  openGraph: {
    title: "FEM Wallet & Chain",
    description:
      "A mobile wallet and EVM-compatible chain, brought together in one FEM experience.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FEM Wallet & Chain",
    description:
      "A mobile wallet and EVM-compatible chain, brought together in one FEM experience.",
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
