import type { Metadata } from "next";

import DevelopersPage from "@/DevelopersPage";

export const metadata: Metadata = {
  title: "Build on FEM — EVM Developer Hub",
  description:
    "Explore general EVM concepts and builder guidance for FEM Chain without assuming unpublished network settings.",
};

export default function DevelopersHubRoute() {
  return <DevelopersPage path="/developers" />;
}
