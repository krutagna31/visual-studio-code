import { SectionContainer } from "@/components/layouts/section-container";
import { ViewContainer } from "@/components/layouts/view-container";
import { Button } from "./ui/button";

export default function AiFeatures() {
  return (
    <SectionContainer>
      <ViewContainer>
        <div className="grid items-center gap-4 rounded-md border-1 border-black/15 bg-zinc-900 bg-[url(/images/ai-features/banner-light.webp)] bg-cover p-6 md:grid-cols-2 dark:bg-[url(/images/ai-features/banner-dark.webp)]">
          <h2 className="text-3xl font-bold">
            Use AI features in VS Code for free
          </h2>
          <div className="space-y-2">
            <p>No trial. No credit card required. Just your GitHub account.</p>
            <Button variant="secondary">Try Free</Button>
          </div>
        </div>
      </ViewContainer>
    </SectionContainer>
  );
}
