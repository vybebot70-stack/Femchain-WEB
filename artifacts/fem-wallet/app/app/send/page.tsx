import type { Metadata } from "next";

import { WalletAppPage } from "@/Pages";

export const metadata: Metadata = {
  title: "FEM Wallet Preview — Send Review",
  description:
    "Review a simulated send form. No transaction is signed, sent, or broadcast.",
};

export default function SendPreviewPage() {
  return <WalletAppPage path="/app/send" />;
}
