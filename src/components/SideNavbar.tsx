/** @format */
"use client";

import { useState } from "react";
import { Nav } from "./ui/nav";

import {
  LayoutDashboard,
  PlusCircle,
  Users,
  Code,
  UserCheck,
  Briefcase,
  Building,
  MapPin,
  GitBranch,
  Lock,
  ChevronRight,
} from "lucide-react";
import { Button } from "./ui/button";
import { useWindowWidth } from "@react-hook/window-size";

type Props = {};

export default function SideNavbar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className="relative min-w-[80px] border-r pr-6 pb-10 pt-24">
      {!mobileWidth && (
        <div className="absolute right-[-20px] top-7">
          <Button
            onClick={toggleSidebar}
            variant="secondary"
            className="rounded-full p-2"
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
            variant: "default",
          },
          {
            title: "Add Company",
            href: "/addcompany",
            icon: PlusCircle, // Changed to PlusCircle
            variant: "ghost",
          },
          {
            title: "Teams",
            href: "/teams",
            icon: Users, // Changed to Users
            variant: "ghost",
          },
          {
            title: "Tech Team",
            href: "/techteam",
            icon: Code, // Changed to Code
            variant: "ghost",
          },
          {
            title: "Non Tech Team",
            href: "/nontechteam",
            icon: UserCheck, // Changed to UserCheck
            variant: "ghost",
          },
          {
            title: "Department",
            href: "/department",
            icon: Briefcase, // Changed to Briefcase
            variant: "ghost",
          },
          {
            title: "Building",
            href: "/building",
            icon: Building, // Changed to Building
            variant: "ghost",
          },
          {
            title: "Branch",
            href: "/branch",
            icon: GitBranch, // Changed to MapPin
            variant: "ghost",
          },
          {
            title: "Location",
            href: "/location",
            icon: MapPin, // Changed to MapPin (same as Branch, you can change if needed)
            variant: "ghost",
          },
          {
            title: "Role and Permission",
            href: "/roleandpermission",
            icon: Lock, // Changed to Lock
            variant: "ghost",
          },
        ]}
      />
    </div>
  );
}
