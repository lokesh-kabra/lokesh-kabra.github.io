"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Hobby",
    description:
      `In my leisure time, I indulge in a variety of activities that bring me joy and relaxation. I am an avid chess player, finding both challenge and solace in the strategic depths of the game. Swimming is another passion of mine, offering not only physical rejuvenation but also a sense of freedom in the water.

      When it's time to unwind, I often find myself immersed in the world of Spiderman movies. The thrilling adventures of this iconic superhero never fail to captivate me, providing a perfect escape into a world of heroism and excitement.`,
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Hobby
      </div>
    ),
  },
  {
    title: "Team",
    description:
      `In my professional endeavors, I am fortunate to work within a dynamic team that shares my passion for excellence and innovation. Together, we leverage our diverse skills and expertise to tackle complex challenges and deliver outstanding results.

      Our collaborative approach extends beyond individual projects, as we constantly strive to learn from each other and grow together. By fostering a culture of open communication and mutual respect, we ensure that every team member's voice is heard and valued.
      
      With a shared commitment to creativity and efficiency, we push the boundaries of what's possible, consistently exceeding expectations and driving positive change. Our team is not just a group of individuals; we are a cohesive unit, united in our vision and dedicated to achieving our goals together.`,
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/wae.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Experience",
    description:
      `With a rich and varied background spanning 4 years in development, 2 years in branding, and 6 months in SEO, I bring a wealth of experience to every project I undertake. My journey in the digital realm has been marked by a passion for innovation and a commitment to excellence, driving me to constantly push the boundaries of what's possible. I have had the privilege of working on more than 25 projects, each one a unique opportunity to learn and grow.

      In addition to my work in development and branding, I have also delved into the world of app development, creating apps that are not only user-friendly but also highly functional. While the specifics of these apps are confidential, they have been well-received by users, with each app garnering more than 10,000 downloads. My experience in conducting sessions has further honed my communication skills, allowing me to effectively share my knowledge and expertise with others.`,
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Experience
      </div>
    ),
  },
  // {
  //   title: "Interest",
  //   description:
  //     "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
  //   content: (
  //     <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
  //       Running out of content
  //     </div>
  //   ),
  // },
];
export function MoreSections() {
  return (
    <div className="">
      <StickyScroll content={content} />
    </div>
  );
}
