/** @format */
"use client";

import { useState } from "react";
import { Nav } from "./ui/nav";

type Props = {};

import {
  ShoppingCart,
  LayoutDashboard,
  UsersRound,
  Settings,
  ChevronRight,
  Monitor,
  BarChart
} from "lucide-react";
import { Button } from "./ui/button";

import { useWindowWidth } from "@react-hook/window-size";

export default function SideNavbar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className="relative min-w-[80px] border-r pr-6  pb-10 pt-24 ">
      {!mobileWidth && (
        <div className="absolute right-[-20px] top-7">
          <Button
            onClick={toggleSidebar}
            variant="secondary"
            className=" rounded-full p-2"
          >
            <ChevronRight />
          </Button>
        </div>
      )}
      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Dashboard",
            href: "/",
            icon: LayoutDashboard,
            variant: "default"
          },
          {
            title: "Company",
            href: "/company",
            icon: UsersRound,
            variant: "ghost"
          },
          {
            title: "Tech Team",
            href: "/techteam",
            icon: Monitor,
            variant: "ghost"
          },
          {
            title: "Department",
            href: "/department",
            icon: BarChart,
            variant: "ghost"
          },
          {
            title: "Building",
            href: "/building",
            icon: BarChart,
            variant: "ghost"
          },
          {
            title: "Add Company",
            href: "/addcompany",
            icon: BarChart,
            variant: "ghost"
          },
          {
            title: "Branch",
            href: "/branch",
            icon: BarChart,
            variant: "ghost"
          },
          {
            title: "Location",
            href: "/location",
            icon: BarChart,
            variant: "ghost"
          },
          {
            title: "Non Tech Team",
            href: "/nontechteam",
            icon: BarChart,
            variant: "ghost"
          },
          {
            title: "Role and Permission",
            href: "/roleandpermission",
            icon: BarChart,
            variant: "ghost"
          },
        ]}
      />
    </div>
  );
}
