import Link from "next/link";
import { Icons } from "@/components/icons";

interface MdxHeaderProps {
  href: string;
}

export const MdxHeader = ({ href }: MdxHeaderProps) => {
  return (
    <div className="mx-auto max-w-[90rem]">
      <div className="flex px-4 pb-10 pt-8 lg:px-8">
        <Link
          className="group flex text-sm font-semibold leading-6 text-muted-foreground hover:text-foreground"
          href={href}
        >
          <Icons.chevronLeft className="mr-3 h-6 w-auto overflow-visible text-muted-foreground group-hover:text-foreground" />
          Go back
        </Link>
      </div>
    </div>
  );
};
