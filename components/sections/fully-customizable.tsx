import { SectionGrid } from "@/components/sections/shared";
import { CustomLink, ThemeImage } from "@/components/ui";

function FullyCustomizable() {
  return (
    <SectionGrid>
      <div className="space-y-4 md:place-self-center">
        <h2 className="text-2xl font-bold">Fully customizable</h2>
        <p className="text-muted-foreground">
          Customize your VS Code UI and layout so that it fits your coding
          style.
        </p>
        <p className="text-muted-foreground">
          <CustomLink href="#">Color themes</CustomLink> let you modify the
          colors in VS Code&apos;s user interface to suit your preferences and
          work environment.
        </p>
        <p className="text-muted-foreground">
          <CustomLink href="#">Settings Sync</CustomLink> enables you to share
          your user settings across your VS Code instances with the Settings
          Sync feature.
        </p>
        <p className="text-muted-foreground">
          <CustomLink href="#">Profiles</CustomLink> let you create sets of
          customizations and quickly switch between them or share them with
          others.
        </p>
      </div>
      <ThemeImage
        src={{
          light: "/images/fully-customizable/swimlane-customized-light.png",
          dark: "/images/fully-customizable/swimlane-customized-dark.png",
        }}
        alt="vs code window showing various themes"
        width="1440"
        height="1080"
      />
    </SectionGrid>
  );
}

export { FullyCustomizable };
