import { GridContainer } from "@/components/layouts";
import { CustomLink, ThemeImage } from "@/components/ui";

function CodeAnywhere() {
  return (
    <GridContainer>
      <div className="space-y-4 md:place-self-center">
        <h2 className="text-2xl font-bold">Code anywhere</h2>
        <p className="text-muted-foreground">
          Code wherever you&apos;re most productive, whether you&apos;re
          connected to the cloud, a remote repository, or in the browser with VS
          Code for the Web (vscode.dev).
        </p>
        <p className="text-muted-foreground">
          <CustomLink href="#">Built-in Source Control</CustomLink> empowers you
          with Git support out-of-the-box. Many other source control providers
          are available through extensions.
        </p>
        <p className="text-muted-foreground">
          <CustomLink href="#">Github Codespaces</CustomLink> provides
          cloud-powered development environments for any activity - whether
          it&apos;s a long-term project, or a short-term task like reviewing a
          pull request.
        </p>
      </div>
      <ThemeImage
        src={{
          light: "/images/code-anywhere/swimlane-anywhere-light.png",
          dark: "/images/code-anywhere/swimlane-anywhere-dark.png",
        }}
        alt="vs-code window showing a button.ts file"
        width="1440"
        height="1080"
      />
    </GridContainer>
  );
}

export { CodeAnywhere };
