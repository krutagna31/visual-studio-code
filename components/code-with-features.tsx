import { SectionContainer, ViewContainer } from "@/components/layouts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import Image from "next/image";
import { features } from "@/content";

function CodeWithFeatures() {
  return (
    <SectionContainer>
      <ViewContainer className="space-y-4 lg:space-y-8">
        <div className="space-y-4 text-center">
          <h2 className="text-2xl font-bold">Code with rich features</h2>
          <p className="text-muted-foreground">
            There&apos;s a lot more to an editor. Whether it&apos;s using
            built-in features or rich extensions, there&apos;s something for
            everyone.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, description, image }) => (
            <Card key={title}>
              <CardContent>
                <Image src={image.src} alt={image.alt} width="32" height="32" />
              </CardContent>
              <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </ViewContainer>
    </SectionContainer>
  );
}

export { CodeWithFeatures };
