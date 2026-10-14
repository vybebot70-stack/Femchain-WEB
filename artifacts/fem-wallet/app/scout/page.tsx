import type { Metadata } from "next";
import { InfoPage } from "@/Pages";
export const metadata: Metadata = {
  title: "FEMScout — Explorer Overview",
  description: "Learn about the role of FEMScout as a chain explorer. No live explorer, chain search or FEM data is presented.",
  openGraph: { title: "FEMScout — Explorer Overview", description: "An introduction to the FEM Chain explorer concept without invented live data.", type: "website" },
};
export default function ScoutPage() { return <InfoPage path="/scout" />; }
