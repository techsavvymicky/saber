"use client";

import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconMenu3,
} from "@tabler/icons-react";
import { SiteNavigationMenu } from "@/components/nav-menu";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden lg:flex">
          <Logo className="mr-6 flex items-center space-x-2 lg:mr-10" />
          <SiteNavigationMenu />
        </div>
        <button className="mr-2 inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md px-0 py-2 text-base font-medium transition-colors hover:bg-transparent hover:text-accent-foreground focus-visible:bg-transparent focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50 lg:hidden">
          <IconMenu3
            strokeWidth={1.5}
            className="h-6 w-6 text-muted-foreground"
          />
          <span className="sr-only">Toggle Menu</span>
        </button>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center gap-x-3">
            <Button className="rounded-full" variant={"outline"}>
              Online Payment
            </Button>
            <Button className="rounded-full">Help & Contact</Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
