import { SectionContainer } from "@/components/layouts/section-container";
import { ViewContainer } from "@/components/layouts/view-container";
import clsx from "clsx";

function GridContainer({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <SectionContainer>
      <ViewContainer
        className={clsx(className, "grid grid-cols-[35fr_75fr] gap-4")}
        {...props}
      >
        {children}
      </ViewContainer>
    </SectionContainer>
  );
}

export { GridContainer };
