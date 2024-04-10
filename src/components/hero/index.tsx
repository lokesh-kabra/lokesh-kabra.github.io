"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "D Labs",
    link: "https://dilatelabs.com",
    thumbnail:
      "/dlabs.png",
  },
  {
    title: "We Are Engineer",
    link: "https://weareengineer.com",
    thumbnail:
      "/wae.png",
  },
  {
    title: "Market Zi",
    link: "https://app.marketzi.com",
    thumbnail:
      "/marketzi.png",
  },
  {
    title: "Impresiot",
    link: "https://impresiot.com",
    thumbnail:
      "/impresiot.png",
  },
  {
    title: "Bloggers Fest",
    link: "https://blogger-fest-frontend.vercel.app/",
    thumbnail:
      "/bfest.png",
  },
  
  
  {
    title: "Labs Platform",
    link: "https://labs.dilatelabs.com",
    thumbnail:
      "/labsd.png",
  },
  {
    title: "3D Housemap",
    link: "https://3-d-housemap-new-rho.vercel.app/",
    thumbnail:
      "/3dhousemap.png",
  },
  {
    title: "iEditor X",
    link: "https://ieditor-x.vercel.app/",
    thumbnail:
      "/editorx.png",
  },
  {
    title: "Pay Per Reel",
    link: "https://payperreel.vercel.app/",
    thumbnail:
      "/ppr.png",
  },
  {
    title: "Confidential Project 3",
    link: "/",
    thumbnail:
      "",
  },
  {
    title: "Confidential Project 4",
    link: "/",
    thumbnail:
      "",
  },
];
