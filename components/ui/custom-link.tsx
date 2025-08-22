import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const customLinkVariants = cva("underline", {
  variants: {
    variant: {
      default: "text-sky-500",
      secondary: "text-black dark:text-white",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function CustomLink({
  children,
  className,
  variant,
  ...props
}: React.ComponentProps<typeof Link> &
  VariantProps<typeof customLinkVariants>) {
  return (
    <Link className={cn(customLinkVariants({ variant, className }))} {...props}>
      {children}
    </Link>
  );
}

export { CustomLink, customLinkVariants };
