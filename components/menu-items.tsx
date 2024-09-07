"use client";

import { ChevronRightIcon } from "@heroicons/react/24/outline";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface MenuItemProps {
  href: string;
  Icon: React.ElementType;
  title: string;
  description: string;
}

interface SubMenuProps {
  Icon: React.ElementType;
  title: string;
  description: string;
  subItems: SubMenuItemProps[];
}

interface SubMenuItemProps {
  href: string;
  Icon: React.ElementType;
  title: string;
}

export const MenuItem = ({ href, Icon, title, description }: MenuItemProps) => (
  <div className="group relative flex items-center gap-x-4 rounded-lg p-2 text-sm leading-6 hover:bg-gray-50">
    <div className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
      <Icon
        strokeWidth={1.5}
        className="h-6 w-6 text-muted-foreground group-hover:text-emerald-600"
      />
    </div>
    <div className="flex-auto">
      <a href={href} className="block font-semibold text-foreground">
        {title}
        <span className="absolute inset-0" />
      </a>
      <p className="mt-0.5 text-muted-foreground">{description}</p>
    </div>
  </div>
);

export const SubMenu = ({
  Icon,
  title,
  description,
  subItems,
}: SubMenuProps) => (
  <HoverCard openDelay={200}>
    <HoverCardTrigger>
      <div className="group relative flex items-center gap-x-4 rounded-lg p-2 text-sm leading-6 hover:bg-gray-50">
        <div className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
          <Icon
            strokeWidth={1.5}
            className="h-6 w-6 text-muted-foreground group-hover:text-emerald-600"
          />
        </div>
        <div className="flex-auto">
          <a href="#" className="block font-semibold text-foreground">
            {title}
            <span className="absolute inset-0" />
          </a>
          <p className="mt-0.5 text-muted-foreground">{description}</p>
        </div>
        <ChevronRightIcon className="h-4 w-4 text-muted-foreground group-hover:text-emerald-600" />
      </div>
    </HoverCardTrigger>
    <HoverCardContent side="right" className="w-fit max-w-md overflow-hidden">
      {subItems.map((item, index) => (
        <SubMenuItem key={index} {...item} />
      ))}
    </HoverCardContent>
  </HoverCard>
);

export const SubMenuItem = ({ href, Icon, title }: SubMenuItemProps) => (
  <div className="group relative flex items-center gap-x-3 rounded-lg p-2 text-sm leading-6 hover:bg-gray-50">
    <Icon
      strokeWidth={1.5}
      className="h-6 w-6 text-muted-foreground group-hover:text-emerald-600"
    />
    <div className="flex-auto">
      <a href={href} className="block font-medium text-foreground">
        {title}
        <span className="absolute inset-0" />
      </a>
    </div>
  </div>
);
