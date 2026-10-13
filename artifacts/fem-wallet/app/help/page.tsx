import type { Metadata } from "next";

import { InfoPage } from "@/Pages";

export const metadata: Metadata = {
  title: "FEM Help — Official Support Information",
  description:
    "Find support, safety, privacy, and terms information through the FEM Help Center.",
};

export default function HelpPage() {
  return <InfoPage path="/help" />;
}
