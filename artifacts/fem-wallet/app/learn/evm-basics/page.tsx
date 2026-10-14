import type { Metadata } from "next";
import LearnGuide from "@/LearnGuide";
export const metadata: Metadata = {
  title: "EVM Basics — How Execution Works | FEM Learn",
  description: "A general introduction to EVM execution, bytecode, state changes and gas, with clear boundaries around FEM-specific details.",
  openGraph: { title: "EVM Basics | FEM Learn", description: "Explore the general concepts behind EVM-compatible applications.", type: "article" },
};
export default function EvmBasicsPage() { return <LearnGuide path="/learn/evm-basics" />; }
