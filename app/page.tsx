import { AgentMode } from "@/components/agent-mode";
import { AiFeatures } from "@/components/ai-features";
import { CodeAnyLanguage } from "@/components/code-any-language";
import { CodeAnywhere } from "@/components/code-anywhere";
import { CodeWithExtensions } from "@/components/code-with-extensions";
import { CodeWithFeatures } from "@/components/code-with-features";
import { CopilotCustomization } from "@/components/copilot-customization";
import { FullyCustomizable } from "@/components/fully-customizable";
import { Hero } from "@/components/hero";
import { NextEditSuggestions } from "@/components/next-edit-suggestions";

export default function Home() {
  return (
    <>
      <Hero />
      <CopilotCustomization />
      <AiFeatures />
      <AgentMode />
      <NextEditSuggestions />
      <CodeWithExtensions />
      <CodeAnyLanguage />
      <FullyCustomizable />
      <CodeAnywhere />
      <CodeWithFeatures />
    </>
  );
}
