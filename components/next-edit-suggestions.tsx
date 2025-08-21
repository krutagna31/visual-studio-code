import { CustomLink } from "@/components/ui/custom-link";
import { ThemeImage } from "@/components/ui/theme-image";
import { SectionContainer } from "@/components/layouts";
import { GridContainer } from "@/components/layouts";

function NextEditSuggestions() {
  return (
    <SectionContainer>
      <GridContainer>
          <div className="space-y-4 md:place-self-center">
            <h2 className="text-2xl font-bold">Next edit suggestions</h2>
            <p className="text-muted-foreground">
              VS Code predicts your next move as you code. Use the Tab key to
              accept AI-powered suggestions right in your editor. It
              intelligently recommends what to change — and where — based on the
              edits you&apos;re already making.
            </p>
            <CustomLink variant="secondary" href="#">
              Code with AI-powered suggestions
            </CustomLink>
          </div>
          <ThemeImage
            src={{
              light: "/images/next-edit-suggestions/swimlane-nes-light.webp",
              dark: "/images/next-edit-suggestions/swimlane-nes-dark.webp",
            }}
            alt="vs code window showing a code editor with post.js file"
            width="1440"
            height="1080"
          />
      </GridContainer>
    </SectionContainer>
  );
}

export { NextEditSuggestions };
