import { Customization } from "@/types";

export const customizations: Customization[] = [
  {
    title: "Choose the model that works for you",
    description:
      "Pick the model that works best for your project and team, including GPT 4o and Claude Sonnet.",
    image: {
      src: {
        light: "/images/copilot-customization/choose-model-light.webp",
        dark: "/images/copilot-customization/choose-model-dark.webp",
      },
      alt: "dropdown menu in github copilot chat displayin ai models",
    },
  },
  {
    title: "An expert on your codebase",
    description:
      "Copilot locally indexes your codebase to understand what’s relevant and supplements that context to interactions with Copilot.",
    image: {
      src: {
        light: "/images/copilot-customization/multi-file-light.webp",
        dark: "/images/copilot-customization/multi-file-dark.webp",
      },
      alt: "a vs code chat prompt to add context",
    },
  },
  {
    title: "Personalized to your needs",
    description:
      "Copilot works the way you do. Customize Copilot's prompts with details about your team's workflows, tools, and projects.",
    image: {
      src: {
        light: "/images/copilot-customization/instructions-light.webp",
        dark: "/images/copilot-customization/instructions-dark.webp",
      },
      alt: "a vs code window showing json for copilot instructions",
    },
  },
];
