import type { Metadata } from "next";
import LearnGuide from "@/LearnGuide";
export const metadata: Metadata = {
  title: "Wallet Basics — Keys, Accounts and Safety | FEM Learn",
  description: "Understand wallet accounts, private keys, transaction approval and general safety habits. Never share recovery phrases or private keys.",
  openGraph: { title: "Wallet Basics | FEM Learn", description: "A practical guide to wallet accounts, keys and safer onchain habits.", type: "article" },
};
export default function WalletBasicsPage() { return <LearnGuide path="/learn/wallet-basics" />; }
