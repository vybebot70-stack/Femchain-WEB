import type { Metadata } from "next";
import LearnGuide from "@/LearnGuide";
export const metadata: Metadata = {
  title: "Token Swaps — Pools and Slippage | FEM Learn",
  description: "Learn general token-swap, liquidity-pool, price-impact and slippage concepts before using any trading interface.",
  openGraph: { title: "Token Swaps | FEM Learn", description: "A clear general guide to liquidity and token-swap mechanics.", type: "article" },
};
export default function SwapsPage() { return <LearnGuide path="/learn/swaps" />; }
