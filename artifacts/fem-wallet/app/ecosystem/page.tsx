import type { Metadata } from "next";

import { InfoPage } from "@/Pages";

export const metadata: Metadata = {
  title: "FEM Ecosystem — Core Product Directory",
  description:
    "Explore FEM Wallet, FEM Chain, FEMSwap and FEMScout product overviews, with clear availability boundaries and verified links only.",
};

export default function EcosystemPage() {
  return <InfoPage path="/ecosystem" />;
}
