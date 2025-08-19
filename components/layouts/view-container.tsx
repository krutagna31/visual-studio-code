import clsx from "clsx";

function ViewContainer({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={clsx(className, "mx-auto max-w-7xl px-4")} {...props}>
      {children}
    </div>
  );
}

export { ViewContainer };
