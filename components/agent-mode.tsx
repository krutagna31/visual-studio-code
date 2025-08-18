import Card from "@/components/ui/card";
import Image from "next/image";

export default function AgentMode() {
  return (
    <Card>
      <div>
        <h2>Agent Mode</h2>
        <p>
          Tackle complex, multi-step tasks. Agent mode reads your codebase,
          suggests edits across files, runs terminal commands, and responds to
          compile or test failures — all in a loop until the job is done.
          Further refine agent mode to fit your team&apos;s workflows with VS
          Code extensions and Model Context Protocol (MCP) servers.
        </p>
      </div>
      <Image
        src="/assets/agent-mode/swimlane-chat-dark.webp"
        alt="VS Code window showing a code editor with projects.tsx, alongside copilot chat panel"
        width="1440"
        height="1024"
      />
    </Card>
  );
}
