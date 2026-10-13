import type { Metadata } from "next";

import { WalletAppPage } from "@/Pages";

export const metadata: Metadata = {
  title: "FEM Wallet Preview — Receive",
  description:
    "Preview the FEM Wallet receive screen. No wallet address or QR code is generated.",
};

export default function ReceivePreviewPage() {
  return <WalletAppPage path="/app/receive" />;
}
