import type { Metadata } from "next";

import DevelopersPage from "@/DevelopersPage";

export const metadata: Metadata = {
  title: "Build on FEM Chain — FEM Developers",
  description:
    "A practical guide to Solidity, common EVM tooling, local testing, and the FEM network details to verify before deployment.",
};

export default function BuildOnFemRoute() {
  return <DevelopersPage path="/developers/build" />;
}
