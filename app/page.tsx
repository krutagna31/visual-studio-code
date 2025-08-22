import {
  AgentMode,
  AiFeatures,
  CodeAnyLanguage,
  CodeAnywhere,
  CodeWithExtensions,
  CopilotCustomization,
  FullyCustomizable,
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
      <CodeAnyLanguage />
      <FullyCustomizable />
      <CodeAnywhere />
    </>
  );
}
