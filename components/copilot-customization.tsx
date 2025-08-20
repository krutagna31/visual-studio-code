import { SectionContainer } from "@/components/layouts/section-container";
import { ViewContainer } from "@/components/layouts/view-container";
import { customizations } from "@/content";
import { ThemeImage } from "@/components/ui/theme-image";

function CopilotCustomization() {
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
              <p className="text-muted-foreground">
                {customization.description}
              </p>
            </div>
            <ThemeImage
              src={customization.image.src}
              alt={customization.image.alt}
              width="1000"
              height="600"
            />
          </div>
        ))}
      </ViewContainer>
    </SectionContainer>
  );
}

export { CopilotCustomization };
