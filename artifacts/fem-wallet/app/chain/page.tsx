import type { Metadata } from "next";

import { InfoPage } from "@/Pages";

export const metadata: Metadata = {
  title: "FEM Chain — An EVM-Compatible Network",
  description:
    "Learn about FEM Chain's EVM compatibility while FEM-specific network settings and technical specifications are being prepared.",
};

export default function ChainPage() {
  return <InfoPage path="/chain" />;
}
