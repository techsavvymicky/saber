import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Link
      className={cn("flex-none w-8 overflow-hidden md:w-auto", className)}
      href="/"
    >
      <span className="sr-only">Saber Home Page</span>
      <Image
        src={"/logo.png"}
        width={500}
        height={500}
        alt="logo"
        className="w-auto h-10"
      />
    </Link>
  );
};
