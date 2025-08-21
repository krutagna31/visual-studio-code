import { SectionContainer } from "@/components/layouts/section-container";
import { ViewContainer } from "@/components/layouts/view-container";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ThemeImage } from "@/components/ui/theme-image";
import { customizations } from "@/content";

function CopilotCustomization() {
  return (
    <SectionContainer className="py-12">
      <ViewContainer className="grid gap-4 md:grid-cols-3">
        {customizations.map((customization) => (
          <Card key={customization.title}>
            <CardHeader>
              <CardTitle className="text-xl">{customization.title}</CardTitle>
              <CardDescription>{customization.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ThemeImage
                src={customization.image.src}
                alt={customization.image.alt}
                width="1000"
                height="600"
              />
            </CardContent>
          </Card>
        ))}
      </ViewContainer>
    </SectionContainer>
  );
}

export { CopilotCustomization };
