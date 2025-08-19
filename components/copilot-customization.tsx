"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { SectionContainer } from "@/components/layouts/section-container";
import { ViewContainer } from "@/components/layouts/view-container";
import { customizations } from "@/data";

export default function CopilotCustomization() {
  const { theme } = useTheme();

  return (
    <SectionContainer className="py-12">
      <ViewContainer className="grid gap-4 md:grid-cols-3">
        {customizations.map((customization, index) => (
          <div
            key={index}
            className="space-y-2 rounded-md border-1 border-gray-200 bg-white/5 p-4 dark:border-gray-700"
          >
            <div className="space-y-2">
              <h2 className="text-xl">{customization.title}</h2>
              <p className="text-gray-500 dark:text-gray-300">
                {customization.description}
              </p>
            </div>
            <Image
              key={theme}
              src={
                theme === "light"
                  ? customization.image.light
                  : customization.image.dark
              }
              alt={customization.title}
              width="1000"
              height="600"
            />
          </div>
        ))}
      </ViewContainer>
    </SectionContainer>
  );
}
