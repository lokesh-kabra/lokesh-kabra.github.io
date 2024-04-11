"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Join",
    },
    {
      text: "in",
    },
    {
      text: "the revolution",
    },
    {
      text: "with",
    },
    {
      text: "Diligent :)oder.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
      Crafting a brighter future through the fusion of technology and spirituality.
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button onClick={() => window.open("https://linktr.ee/lokesh_kabra", '__blank')} className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Contact Me
        </button>
      </div>
    </div>
  );
}
