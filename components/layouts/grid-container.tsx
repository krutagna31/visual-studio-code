import { ViewContainer } from "@/components/layouts/view-container";
import clsx from "clsx";

function GridContainer({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <ViewContainer
      className={clsx(className, "grid md:grid-cols-[35fr_75fr] gap-4 lg:gap-8")}
      {...props}
    >
      {children}
    </ViewContainer>
  );
}

export { GridContainer };
