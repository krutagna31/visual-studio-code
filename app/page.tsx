import { Hero } from "@/components/hero";
import { CopilotCustomization } from "@/components/copilot-customization";
import { AiFeatures } from "@/components/ai-features";
import { AgentMode } from "@/components/agent-mode";
import { NextEditSuggestions } from "@/components/next-edit-suggestions";

export default function Home() {
  return (
    <>
      <Hero />
      <CopilotCustomization />
      <AiFeatures />
      <AgentMode />
      <NextEditSuggestions />
    </>
  );
}
