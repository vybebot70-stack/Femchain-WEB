import type { Metadata } from "next";

import { InfoPage } from "@/Pages";

export const metadata: Metadata = {
  title: "FEM Ecosystem — Projects and Tools",
  description:
    "Explore the FEM ecosystem directory. Project and network-tool listings will be added when official destinations are verified.",
};

export default function EcosystemPage() {
  return <InfoPage path="/ecosystem" />;
}
