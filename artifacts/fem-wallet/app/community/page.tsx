import type { Metadata } from "next";

import { InfoPage } from "@/Pages";

export const metadata: Metadata = {
  title: "FEM Community — Official Updates and Help",
  description:
    "Find verified support information for FEM Wallet and FEM Chain. Community destinations are not announced yet.",
};

export default function CommunityPage() {
  return <InfoPage path="/community" />;
}
