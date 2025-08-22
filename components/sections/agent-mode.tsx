import { SectionGrid } from "@/components/sections/shared";
import { CustomLink, ThemeImage } from "@/components/ui";

function AgentMode() {
  return (
    <SectionGrid>
      <div className="space-y-4 md:place-self-center">
        <h2 className="text-2xl font-bold">Agent Mode</h2>
        <p className="text-muted-foreground">
          Tackle complex, multi-step tasks. Agent mode reads your codebase,
          suggests edits across files, runs terminal commands, and responds to
          compile or test failures — all in a loop until the job is done.
          Further refine agent mode to fit your team&apos;s workflows with VS
          Code extensions and Model Context Protocol (MCP) servers.
        </p>
        <CustomLink href="#">
          Build with agent mode
        </CustomLink>
      </div>
      <ThemeImage
        src={{
          light: "/images/agent-mode/swimlane-chat-light.webp",
          dark: "/images/agent-mode/swimlane-chat-dark.webp",
        }}
        alt="vs code window showing a code editor with projects.tsx, alongside copilot chat panel"
        width="1440"
        height="1080"
      />
    </SectionGrid>
  );
}

export { AgentMode };
