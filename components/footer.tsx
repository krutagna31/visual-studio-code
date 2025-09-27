import { ViewContainer } from "@/components/layouts";
import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/content";

function Footer() {
  return (
    <footer className="py-12">
      <ViewContainer>
        <ul className="flex justify-between">
          <div className="flex items-center gap-4">
            <Link href="#">
              <Image
                src="/images/footer/x-icon.svg"
                alt="x"
                width="16"
                height="16"
              />
            </Link>
            <Link href="#">
              <Image
                src="/images/footer/github-icon.svg"
                alt="github"
                width="24"
                height="24"
              />
            </Link>
            <Link href="#">
              <Image
                src="/images/footer/youtube-icon.svg"
                alt="youtube"
                width="24"
                height="24"
              />
            </Link>
          </div>
          <div>
            <Link href="#">
              <Image
                src="/images/footer/microsoft.svg"
                alt="microsoft"
                width="24"
                height="24"
              />
            </Link>
          </div>
        </ul>
        <ul className="flex gap-4">
          {footerLinks.map(({ title, href }) => (
            <li key={title}>
              <Link className="text-muted-foreground text-sm" href={href}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </ViewContainer>
    </footer>
  );
}

export { Footer };
