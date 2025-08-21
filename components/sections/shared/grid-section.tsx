import { ViewContainer, SectionContainer } from "@/components/layouts";

function SectionGrid({ children, ...props }: React.ComponentProps<"section">) {
  return (
    <SectionContainer {...props}>
      <ViewContainer className="grid gap-4 md:grid-cols-[35fr_75fr] lg:gap-8">
        {children}
      </ViewContainer>
    </SectionContainer>
  );
}

export { SectionGrid };
