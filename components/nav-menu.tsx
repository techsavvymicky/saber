"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowDownTrayIcon,
  EyeIcon,
  InformationCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import {
  IconBuildingAirport,
  IconBuildingSkyscraper,
  IconCarSuv,
  IconCashRegister,
  IconChecklist,
  IconClover,
  IconCurrencyNaira,
  IconEaseInOutControlPoints,
  IconFileAnalytics,
  IconFileInvoice,
  IconFileLike,
  IconFrame,
  IconGavel,
  IconHazeMoon,
  IconHomeDollar,
  IconHomeEdit,
  IconListDetails,
  IconListTree,
  IconPresentationAnalytics,
  IconProgress,
  IconReportMoney,
  IconWritingSign,
} from "@tabler/icons-react";
import { MenuItem, SubMenu } from "@/components/menu-items";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function SiteNavigationMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="text-sm font-semibold leading-6">
        <NavigationMenuItem>
          <Link href="/financial-statements" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Financial Statements
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Budget</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-screen max-w-md overflow-hidden">
              <div className="p-2">
                <MenuItem
                  href="#"
                  Icon={InformationCircleIcon}
                  title="Budget Information"
                  description="View detailed state budget information"
                />
                <MenuItem
                  href="#"
                  Icon={ArrowDownTrayIcon}
                  title="Download Budget"
                  description="Download verified state budget data"
                />
                <MenuItem
                  href="#"
                  Icon={EyeIcon}
                  title="Stakeholders Meetings"
                  description="View evidence of stakeholders meeting process"
                />
                <MenuItem
                  href="#"
                  Icon={UserGroupIcon}
                  title="Citizens Feedback"
                  description="Citizens feedback on budget information"
                />
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/business-reforms">
            <NavigationMenuTrigger>Business Reform</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-screen max-w-[30rem] overflow-hidden">
                <div className="p-2">
                  <MenuItem
                    href="/business-reforms/saber"
                    Icon={IconClover}
                    title="Saber Program"
                    description="Details About The Saber Program"
                  />
                  <SubMenu
                    Icon={IconHomeEdit}
                    title="Property Registration"
                    description={"Improved Efficiency in Property Registration"}
                    subItems={[
                      {
                        href: "/business-reforms/c-of-o-procedure",
                        Icon: IconFileInvoice,
                        title: "Process of Obtaining C of O",
                      },
                      {
                        href: "/business-reforms/construction-permit-procedure",
                        Icon: IconFileLike,
                        title: "Process of Obtaining Construction Permit",
                      },
                      {
                        href: "/business-reforms/c-of-o-statistics",
                        Icon: IconFileAnalytics,
                        title: "C of O Statistics",
                      },
                    ]}
                  />
                  <MenuItem
                    href="/business-reforms/right-of-way"
                    Icon={IconChecklist}
                    title="Right of Way"
                    description="Right of Way Permit Application Process"
                  />

                  <SubMenu
                    Icon={IconFrame}
                    title="PPP Framework"
                    description={"Development of an Effective PPP Framework"}
                    subItems={[
                      {
                        href: "#",
                        Icon: IconGavel,
                        title: "PPP Coordinating Unit / Legal Mandate",
                      },
                      {
                        href: "#",
                        Icon: IconListDetails,
                        title: "List of PPP Screen Projects",
                      },
                      {
                        href: "#",
                        Icon: IconHazeMoon,
                        title: "Climate Adaptation & Mitigation Report",
                      },
                      {
                        href: "#",
                        Icon: IconPresentationAnalytics,
                        title: "PPP Project Detailed Page",
                      },
                    ]}
                  />
                  <SubMenu
                    Icon={IconCashRegister}
                    title="Official Fees & Procedures"
                    description={
                      "Increased Transparency of Official Fees and Procedures"
                    }
                    subItems={[
                      {
                        href: "#",
                        Icon: IconHomeDollar,
                        title: "Business Premises Regulation & Procedure",
                      },
                      {
                        href: "#",
                        Icon: IconWritingSign,
                        title: "Signage Agency",
                      },
                      {
                        href: "#",
                        Icon: IconCarSuv,
                        title: "Vehicle Inspection Process & Procedure",
                      },
                      {
                        href: "/business-reforms/eia-guidelines",
                        Icon: IconBuildingSkyscraper,
                        title:
                          "Ministry of Environment Processes & Guideline for EIA",
                      },
                      {
                        href: "#",
                        Icon: IconEaseInOutControlPoints,
                        title: "Survey Plan Process and Procedure",
                      },
                    ]}
                  />
                  <SubMenu
                    Icon={IconCurrencyNaira}
                    title="Fees Levies for Interstate Trade"
                    description={
                      "Increased Transparency of Fees levies for Interstate Trade"
                    }
                    subItems={[
                      {
                        href: "/business-reforms/grm-procedure",
                        Icon: IconProgress,
                        title: "Process for Grieviance & Redress Mechanism",
                      },
                      {
                        href: "/business-reforms/trade-fees-schedule",
                        Icon: IconListTree,
                        title: "Schedule of Trade related Fees & Levies",
                      },
                      {
                        href: "#",
                        Icon: IconReportMoney,
                        title: "Export Promotion Committee Budget for 2024",
                      },
                      {
                        href: "#",
                        Icon: IconBuildingAirport,
                        title: "State Export Strategy and Guidelines",
                      },
                    ]}
                  />
                </div>
              </div>
            </NavigationMenuContent>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/business-licensing" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Business Licensing & Tender
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/procedures-guidelines" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Procedures & Guidelines
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/publications" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Publications
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
