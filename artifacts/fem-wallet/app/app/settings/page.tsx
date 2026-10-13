import type { Metadata } from "next";

import { WalletAppPage } from "@/Pages";

export const metadata: Metadata = {
  title: "FEM Wallet Preview — Settings",
  description:
    "Preview FEM Wallet settings. No FEM chain ID or RPC configuration has been supplied.",
};

export default function SettingsPreviewPage() {
  return <WalletAppPage path="/app/settings" />;
}
