import {
  AgentMode,
  AiFeatures,
  CodeWithExtensions,
  CopilotCustomization,
  Hero,
  NextEditSuggestions,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <CopilotCustomization />
      <AiFeatures />
      <AgentMode />
      <NextEditSuggestions />
      <CodeWithExtensions />
    </>
  );
}
