import type { Metadata } from "next";
import { InfoPage } from "@/Pages";
export const metadata: Metadata = {
  title: "FEMSwap — Product Overview",
  description: "Learn what FEMSwap is intended to do and find official FAQ and support references. No live trading or quotes are offered here.",
  openGraph: { title: "FEMSwap — Product Overview", description: "A careful introduction to FEMSwap, with verified support resources.", type: "website" },
};
export default function SwapPage() { return <InfoPage path="/swap" />; }
