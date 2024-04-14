"use client";

import Image from "next/image";
import { Tabs } from "../ui/tabs";
import { TextGenerateEffect } from "../ui/text-generate-effect";

export function TabsDemo() {
  const speaking = `In addition to our core services in web and app development, branding, SEO, and Figma UI design, I also offer workshops and sessions on a variety of topics. With expertise in full stack development, entrepreneurship, and many more areas, I share insights and best practices to help individuals and businesses succeed in the digital world.
  
My workshops and sessions are designed to be interactive and informative, providing participants with practical skills and knowledge that they can apply immediately. Whether it's learning the latest trends in full stack development or gaining valuable insights into entrepreneurship, my goal is to empower others to achieve their goals and drive positive change.
  
By sharing my expertise and experiences, I aim to inspire others to pursue their passions and unlock their full potential. Whether you're looking to enhance your technical skills or embark on a new entrepreneurial journey, my workshops and sessions are designed to guide you every step of the way.`

  const webApp = `Web 6 App Development: Specializing in sleek, functional web applications, I create sites and mobile apps that not only look great but also work seamlessly. Whether it's an e-commerce platform or a content management system, I deliver projects with precision and excellence, tailored to meet your business needs.
  
AI Development: At the forefront of AI innovation, I develop intelligent solutions that drive value and growth. From natural language processing to predictive analytics, my AI services are designed to enhance efficiency and unlock new possibilities for businesses across industries.
  
IoT Development: Transforming the way we interact with technology, I specialize in IoT development. From smart home devices to industrial solutions, I create interconnected systems that analyze and act on data in real-time, driving innovation and enhancing user experiences.`

  const branding = `In the realm of technology and business, I lead a multifaceted team that excels not only in coding and development but also in the art of branding. Together, we blend creativity with strategy to craft compelling brand identities that resonate with audiences. Our collaborative approach ensures that every aspect of branding, from design to messaging, aligns seamlessly with the client's vision and goals.

With a keen understanding of market trends and consumer behavior, we create brands that stand out in competitive landscapes. Our holistic approach to branding encompasses everything from logo design and visual identity to brand voice and storytelling. The result is a cohesive brand experience that leaves a lasting impression and drives meaningful engagement.`

  const seo = `In the digital arena, I lead a versatile team proficient not only in web and app development and branding but also in the intricate art of search engine optimization (SEO). Our combined efforts ensure that the digital products we create not only look impressive but also perform exceptionally well in search engine rankings.

With a deep understanding of SEO best practices and algorithms, we optimize websites and apps to achieve higher visibility and drive organic traffic. From keyword research to on-page and off-page optimization, we employ a comprehensive approach to improve search engine rankings and enhance the overall user experience.
  
Our goal is to help businesses establish a strong online presence and reach their target audience effectively. By staying abreast of the latest SEO trends and techniques, we ensure that our clients stay ahead of the curve in the ever-evolving digital landscape.`

  const interfacee = `In the realm of digital innovation, I lead a dynamic team that excels not only in web and app development, branding, and search engine optimization (SEO) but also in Figma UI design. Our comprehensive approach to design ensures that every digital product we create is not only visually appealing but also intuitive and user-friendly.

With expertise in Figma, we create stunning UI designs that bring digital experiences to life. From wireframes to high-fidelity mockups, we meticulously craft every detail to align with the client's brand and vision. Our goal is to create designs that not only look beautiful but also enhance the overall user experience, driving engagement and loyalty.
  
By combining our skills in development, branding, SEO, and Figma UI design, we offer a complete suite of services that empower businesses to thrive in the digital landscape. Whether it's creating a new website, developing a mobile app, or refreshing a brand identity, we have the expertise and creativity to bring ideas to fruition.`

  const tabs = [
    {
      title: "Web & App Development",
      value: "web-app",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Web, App, AI/ML, IoT Development</p>
          <TextGenerateEffect words={webApp} />
        </div>
      ),
    },
    {
      title: "Branding",
      value: "branding",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Branding</p>
          <TextGenerateEffect words={branding} />
        </div>
      ),
    },
    {
      title: "SEO",
      value: "seo",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Search Engine Optimisation</p>
          <TextGenerateEffect words={seo} />
        </div>
      ),
    },
    {
      title: "Interface Design",
      value: "interface",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Cool Designs</p>
          <TextGenerateEffect words={interfacee} />
        </div>
      ),
    },
    {
      title: "Sessions",
      value: "sessions",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>I Speak!</p>
          <TextGenerateEffect words={speaking} />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[100vh] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src="/wae.png"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
