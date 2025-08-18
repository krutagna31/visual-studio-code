import { Container } from "@/components/ui/container";
import { Button } from "./ui/button";

export default function AiFeatures() {
  return (
    <section className="py-12">
      <Container>
        <div className="grid items-center gap-4 rounded-md border-1 border-black/15 bg-zinc-900 bg-[url(/assets/ai-features/banner-light.webp)] bg-cover p-6 md:grid-cols-2 dark:bg-[url(/assets/ai-features/banner-dark.webp)]">
          <h2 className="text-3xl font-bold">
            Use AI features in VS Code for free
          </h2>
          <div className="space-y-2">
            <p>No trial. No credit card required. Just your GitHub account.</p>
            <Button variant="secondary">Try Free</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
