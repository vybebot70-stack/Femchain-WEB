import type { Metadata } from "next";

import { WalletAppPage } from "@/Pages";

export const metadata: Metadata = {
  title: "FEM Wallet Preview — Activity",
  description:
    "Preview an empty activity state with no fabricated transaction history.",
};

export default function ActivityPreviewPage() {
  return <WalletAppPage path="/app/activity" />;
}
