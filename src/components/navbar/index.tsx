"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/utils/cn";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="D:) Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#web-mobile-dev">Web & App Development</HoveredLink>
            <HoveredLink href="#interface-design">Interface Design</HoveredLink>
            <HoveredLink href="#seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="#branding">Branding</HoveredLink>
            <HoveredLink href="#sessions">Sessions</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="D:) Products">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="D Labs"
              href="https://dilatelabs.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="A project on healthcare aims to connect small & medium scale laboratories."
            />
            <ProductItem
              title="We Are Engineer"
              href="https://weareengineer.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Responsible for betterment in engineering."
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="D:) More">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#hobby">Hobby</HoveredLink>
            <HoveredLink href="#team">Team</HoveredLink>
            <HoveredLink href="#experience">Experience</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
