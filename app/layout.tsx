import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

import "./globals.css";

export const metadata: Metadata = {
  title: "Saber",
  description: "Taraba State Government Website | Saber",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full" lang="en">
      <body className="h-full w-full overflow-x-hidden font-brico">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
