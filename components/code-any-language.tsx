import { GridContainer } from "@/components/layouts";
import Image from "next/image";
import { languages } from "@/content";

function CodeAnyLanguage() {
  return (
    <GridContainer>
      <div className="space-y-4 md:place-self-center">
        <h2 className="text-2xl font-bold">Code in any language</h2>
        <p className="text-muted-foreground">
          VS Code supports almost every major programming language. Several ship
          in the box, like JavaScript, TypeScript, CSS, and HTML, but extensions
          for others can be found in the VS Code Marketplace.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {languages.map(({ title, image }) => (
          <div key={title} className="flex items-center gap-2">
            <Image src={image.src} alt={image.alt} width="64" height="64" />
            <h3>{title}</h3>
          </div>
        ))}
      </div>
    </GridContainer>
  );
}

export { CodeAnyLanguage };
