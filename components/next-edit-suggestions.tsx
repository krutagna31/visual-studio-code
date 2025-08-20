import Card from "@/components/ui/card";
import { CustomLink } from "@/components/ui/custom-link";
import { ThemeImage } from "@/components/ui/theme-image";

function NextEditSuggestions() {
  return (
    <Card>
      <div className="space-y-4 md:place-self-center">
        <h2 className="text-2xl font-bold">Next edit suggestions</h2>
        <p>
          VS Code predicts your next move as you code. Use the Tab key to accept
          AI-powered suggestions right in your editor. It intelligently
          recommends what to change — and where — based on the edits you&apos;re
          already making.
        </p>
        <CustomLink href="#">Code with AI-powered suggestions</CustomLink>
      </div>
      <ThemeImage
        src={{
          light: "/images/next-edit-suggestions/swimlane-nes-light.webp",
          dark: "/images/next-edit-suggestions/swimlane-nes-dark.webp",
        }}
        alt="vs code window showing a code editor with projects.tsx, alongside copilot chat panel"
        width="1440"
        height="1080"
      />
    </Card>
  );
}

export { NextEditSuggestions };
