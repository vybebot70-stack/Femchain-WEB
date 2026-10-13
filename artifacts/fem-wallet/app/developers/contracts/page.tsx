import type { Metadata } from "next";

import DevelopersPage from "@/DevelopersPage";

export const metadata: Metadata = {
  title: "Smart Contracts on FEM — Builder Guide",
  description:
    "Learn general smart-contract development practices for EVM-compatible networks. Verify FEM support and network settings before deploying.",
};

export default function ContractsGuideRoute() {
  return <DevelopersPage path="/developers/contracts" />;
}
