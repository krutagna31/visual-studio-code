import clsx from "clsx";

function SectionContainer({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <section className={clsx(className, "py-12")} {...props}>
      {children}
    </section>
  );
}

export { SectionContainer };
