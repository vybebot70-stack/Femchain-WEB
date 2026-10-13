import type { Metadata } from "next";

import LearnPage from "@/LearnPage";

export const metadata: Metadata = {
  title: "Learn Onchain — FEM Field Notes",
  description:
    "A practical introduction to wallets, blockchain networks, transactions, and safer onchain habits.",
};

export default function LearnRoute() {
  return <LearnPage />;
}
