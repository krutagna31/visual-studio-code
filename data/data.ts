import { Customization } from "@/types/types";
import { NavLink } from "@/types/types";

export const customizations: Customization[] = [
  {
    title: "Choose the model that works for you",
    description:
      "Pick the model that works best for your project and team, including GPT 4o and Claude Sonnet.",
    image: {
      light: "/assets/copilot-customization/choose-model-light.webp",
      dark: "/assets/copilot-customization/choose-model-dark.webp",
    },
  },
  {
    title: "An expert on your codebase",
    description:
      "Copilot locally indexes your codebase to understand what’s relevant and supplements that context to interactions with Copilot.",
    image: {
      light: "/assets/copilot-customization/multi-file-light.webp",
      dark: "/assets/copilot-customization/multi-file-dark.webp",
    },
  },
  {
    title: "Personalized to your needs",
    description:
      "Copilot works the way you do. Customize Copilot's prompts with details about your team's workflows, tools, and projects.",
    image: {
      light: "/assets/copilot-customization/instructions-light.webp",
      dark: "/assets/copilot-customization/instructions-dark.webp",
    },
  },
];

export const navLinks: NavLink[] = [
  { name: "Docs", href: "#" },
  { name: "Updates", href: "#" },
  { name: "Blog", href: "#" },
  { name: "API", href: "#" },
  { name: "Extensions", href: "#" },
  { name: "FAQ", href: "#" },
  { name: "GitHub Copilot", href: "#" },
];
