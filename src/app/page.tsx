import { TextGenerateEffectDemo } from "@/components/description";
import { Footer } from "@/components/footer";
import { HeroParallaxDemo } from "@/components/hero";
import { ItsMe } from "@/components/itsme";
import { MoreSections } from "@/components/more-sections";
import { NavbarDemo } from "@/components/navbar";
import { TabsDemo } from "@/components/tabs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavbarDemo />
      <HeroParallaxDemo />
      <TextGenerateEffectDemo />
      <ItsMe />
      <TabsDemo />
      <MoreSections />
      <Footer />
    </>
  );
}
