import { GridContainer, SectionContainer } from "@/components/layouts";
import { CustomLink } from "@/components/ui/custom-link";
import { extensions } from "@/content";
import Image from "next/image";

function CodeWithExtensions() {
  return (
    <SectionContainer>
      <GridContainer>
        <div className="space-y-4 md:place-self-center">
          <h2 className="text-2xl font-bold">Code with extensions</h2>
          <p className="text-muted-foreground">
            Customize VS Code with AI-powered functionality from extensions and
            Model Context Protocol servers to use in Chat. Or,{" "}
            <CustomLink href="#">build your own extension</CustomLink> to power
            your team&apos;s unique scenarios.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {extensions.map(({ title, description, image }) => (
            <div className="bg-card" key={title}>
              <Image src={image.src} alt={image.alt} width="64" height="64" />
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </GridContainer>
    </SectionContainer>
  );
}

export { CodeWithExtensions };
