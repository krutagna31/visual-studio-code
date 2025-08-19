import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ViewContainer } from "@/components/layouts/view-container";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./mode-toggle";
import { Menu } from "lucide-react";
import { Search } from "lucide-react";
import { links } from "@/data";

export default function Header() {
  return (
    <header className="py-4">
      <ViewContainer className="flex flex-wrap items-center justify-between">
        <a className="flex items-center gap-2" href="#">
          <Image
            className="size-7"
            src="./assets/header/vscode.svg"
            alt="vs code"
            width="100"
            height="100"
          />
          <span className="text-xl font-bold text-gray-700 dark:text-gray-300">
            Visual Studio Code
          </span>
        </a>
        <nav className="hidden md:block">
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
        <div className="hidden gap-2 xl:flex">
          <ModeToggle />
          <label className="flex items-center gap-2 px-2 outline-1 outline-gray-300 outline-solid has-focus:outline-sky-700 dark:outline-gray-700">
            <Search size="18" />
            <input
              type="search"
              placeholder="Search docs"
              className="focus:outline-0"
            />
          </label>
          <Button className="cursor-pointer bg-sky-500 text-white hover:bg-sky-600 active:bg-sky-700">
            Download
          </Button>
        </div>
        <div className="md:hidden">
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
              <nav>
                <ul className="flex min-h-screen flex-col justify-center gap-6 pl-6">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </ViewContainer>
    </header>
  );
}
