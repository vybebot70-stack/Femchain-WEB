import type { Metadata } from "next";
import LearnGuide from "@/LearnGuide";
export const metadata: Metadata = {
  title: "Block Explorers — Reading Onchain Records | FEM Learn",
  description: "Learn how block explorers present transaction, block and address information, without implying live FEM data.",
  openGraph: { title: "Block Explorers | FEM Learn", description: "Understand the general role of a block explorer and how to read public records.", type: "article" },
};
export default function ExplorersPage() { return <LearnGuide path="/learn/explorers" />; }
