import type { Metadata } from "next";

import DevelopersPage from "@/DevelopersPage";

export const metadata: Metadata = {
  title: "Wallet Integration on FEM — Builder Guide",
  description:
    "Explore general EVM wallet-provider patterns. FEM chain configuration is not provided in this guide.",
};

export default function WalletIntegrationRoute() {
  return <DevelopersPage path="/developers/wallets" />;
}
