import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Diligent :)oder",
  description: `In this journey of life, I find myself immersed in the pursuit of self-discovery and personal growth, guided by my devotion to Krsna and a deep-rooted commitment to self-obedience and the acquisition of knowledge. I am a self-taught individual, resilient in the face of challenges, and adept at coding, much like a chess player strategizing each move.

  Beyond the digital realm, I embrace the physical challenge of the gym and the intellectual journey of entrepreneurship. However, my aspirations reach far beyond the present moment. I envision a future where science and innovation coexist in harmony, driving positive change and love.
  
  In this quest, I am surrounded by good-hearted individuals who inspire me with their integrity and positivity, making me strive to be a beacon of inspiration myself (Lokesh Kabra).`,
  openGraph: {
    images: '/lokesh.jpeg',
    description: `In this journey of life, I find myself immersed in the pursuit of self-discovery and personal growth, guided by my devotion to Krsna and a deep-rooted commitment to self-obedience and the acquisition of knowledge. I am a self-taught individual, resilient in the face of challenges, and adept at coding, much like a chess player strategizing each move.

    Beyond the digital realm, I embrace the physical challenge of the gym and the intellectual journey of entrepreneurship. However, my aspirations reach far beyond the present moment. I envision a future where science and innovation coexist in harmony, driving positive change and love.
    
    In this quest, I am surrounded by good-hearted individuals who inspire me with their integrity and positivity, making me strive to be a beacon of inspiration myself (Lokesh Kabra).`,
    title: 'Diligent :)oder'
  },
  twitter: {
    images: '/lokesh.jpeg',
    card: 'summary_large_image',
    creator: '@onlydevotee369',
    description:  `In this journey of life, I find myself immersed in the pursuit of self-discovery and personal growth, guided by my devotion to Krsna and a deep-rooted commitment to self-obedience and the acquisition of knowledge. I am a self-taught individual, resilient in the face of challenges, and adept at coding, much like a chess player strategizing each move.

    Beyond the digital realm, I embrace the physical challenge of the gym and the intellectual journey of entrepreneurship. However, my aspirations reach far beyond the present moment. I envision a future where science and innovation coexist in harmony, driving positive change and love.
    
    In this quest, I am surrounded by good-hearted individuals who inspire me with their integrity and positivity, making me strive to be a beacon of inspiration myself (Lokesh Kabra).`,
    site: 'https://diligentcoder.tech',
    title: 'Diligent :)oder',
    creatorId: '@onlydevotee369'
  }
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
