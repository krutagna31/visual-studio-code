import Link from "next/link";
import Image from "next/image";
import { ViewContainer } from "@/components/layouts";
import {
  Button,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui";
import { ModeToggle } from "@/components/mode-toggle";
import { Menu } from "lucide-react";
import { headerLinks } from "@/content";

function Header() {
  return (
    <header className="py-6">
      <ViewContainer className="flex flex-wrap justify-between">
        <div className="flex items-center gap-4">
          <Link className="flex items-center gap-2" href="#">
            <Image
              src="/images/header/vscode.svg"
              alt="Visual Studio Code"
              width="32"
              height="32"
            />
            <span className="text-sm lg:text-xl font-bold">Visual Studio Code</span>
          </Link>
          <nav className="hidden lg:block">
            <ul className="flex gap-4">
              {headerLinks.map((link, index) => (
                <li key={index}>
                  <a
                    className="text-muted-foreground hover:text-foreground"
                    href={link.href}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex gap-4 items-center">
          <ModeToggle />
          <Button className="hidden cursor-pointer bg-sky-500 text-white hover:bg-sky-600 active:bg-sky-700 lg:block">
            Download
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button className="lg:hidden" variant="outline" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Select a page to navigate
                </SheetDescription>
              </SheetHeader>
              <div className="flex min-h-screen flex-col justify-center gap-6 pl-8">
                <nav className="">
                  <ul className="space-y-6">
                    {headerLinks.map((link, index) => (
                      <li key={index}>
                        <a href={link.href}>{link.title}</a>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="flex gap-2">
                  <Button className="cursor-pointer bg-sky-500 text-white hover:bg-sky-600 active:bg-sky-700">
                    Download
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </ViewContainer>
    </header>
  );
}

export { Header };
