import type { Metadata } from "next";

import { InfoPage } from "@/Pages";

export const metadata: Metadata = {
  title: "FEM Wallet — A Familiar Place to Begin",
  description:
    "Learn about FEM Wallet and its mobile-first direction. Official download destinations are not announced yet.",
};

export default function WalletPage() {
  return <InfoPage path="/wallet" />;
}
