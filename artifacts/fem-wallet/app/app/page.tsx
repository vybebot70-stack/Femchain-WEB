import type { Metadata } from "next";

import { WalletAppPage } from "@/Pages";

export const metadata: Metadata = {
  title: "FEM Wallet Preview — Overview",
  description:
    "Explore a UI-only FEM Wallet prototype. It does not connect to a wallet or blockchain.",
};

export default function WalletPreview() {
  return <WalletAppPage path="/app" />;
}
