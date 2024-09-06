"use client";

import { IconBrandFacebook, IconBrandTwitter } from "@tabler/icons-react";
import { SiteNavigationMenu } from "@/components/nav-menu";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Logo className="mr-6 flex items-center space-x-2 lg:mr-10" />
          <SiteNavigationMenu />
        </div>
        <button
          className="mr-2 inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md px-0 py-2 text-base font-medium transition-colors hover:bg-transparent hover:text-accent-foreground focus-visible:bg-transparent focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50 md:hidden"
          type="button"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="radix-:R15u6ja:"
          data-state="closed"
        >
          <svg
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
          >
            <path
              d="M3 5H11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 12H16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 19H21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
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
