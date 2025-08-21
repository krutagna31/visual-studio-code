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
import { links } from "@/content";

export default function Header() {
  return (
    <header className="py-4">
      <ViewContainer className="flex flex-wrap justify-between">
        <div className="flex items-center gap-4">
          <Link className="flex items-center gap-2" href="#">
            <Image
              className="size-7"
              src="/images/header/vscode.svg"
              alt="Visual Studio Code"
              width="100"
              height="100"
            />
            <span className="text-xl font-bold text-gray-700 dark:text-gray-300">
              Visual Studio Code
            </span>
          </Link>
          <nav className="hidden lg:block">
            <ul className="flex gap-4">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                    href={link.href}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="hidden gap-2 lg:flex">
          <ModeToggle />
          <Button className="cursor-pointer bg-sky-500 text-white hover:bg-sky-600 active:bg-sky-700">
            Download
          </Button>
        </div>
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu />
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
                    {links.map((link, index) => (
                      <li key={index}>
                        <a href={link.href}>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="flex gap-2">
                  <ModeToggle />
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
