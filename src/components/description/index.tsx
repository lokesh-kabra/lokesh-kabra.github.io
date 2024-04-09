"use client";
import Image from "next/image";
import { Spotlight } from "../ui/Spotlight";
import { SparklesCore } from "../ui/sparkles";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `In this journey of life, I find myself immersed in the pursuit of self-discovery and personal growth, guided by my devotion to Krsna and a deep-rooted commitment to self-obedience and the acquisition of knowledge. I am a self-taught individual, resilient in the face of challenges, and adept at coding, much like a chess player strategizing each move.

Beyond the digital realm, I embrace the physical challenge of the gym and the intellectual journey of entrepreneurship. However, my aspirations reach far beyond the present moment. I envision a future where science and innovation coexist in harmony, driving positive change and love.

In this quest, I am surrounded by good-hearted individuals who inspire me with their integrity and positivity, making me strive to be a beacon of inspiration myself.
`;

export function TextGenerateEffectDemo() {
    return (
        <div className="relative m-20">

            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                About Me
            </h1>

            <div className="flex lg:flex-row flex-col">
                <TextGenerateEffect words={words} />
                <Image
                    height="400"
                    width="400"
                    src="/lokesh.jpeg"
                    className="ml-5 h-[25rem] w-[25rem] inset-0"
                    alt="me"
                />
            </div>
            <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={1200}
                className="w-full h-full"
                particleColor="#FFFFFF"
            />
        </div>
    )
}
