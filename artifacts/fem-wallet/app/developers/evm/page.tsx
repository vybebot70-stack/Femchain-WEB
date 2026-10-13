import type { Metadata } from "next";

import DevelopersPage from "@/DevelopersPage";

export const metadata: Metadata = {
  title: "EVM on FEM — Developer Guide",
  description:
    "Understand EVM execution, state transitions, transactions, and gas. FEM-specific implementation details remain subject to official documentation.",
};

export default function EvmGuideRoute() {
  return <DevelopersPage path="/developers/evm" />;
}
