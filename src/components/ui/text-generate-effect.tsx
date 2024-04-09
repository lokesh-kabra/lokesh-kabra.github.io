"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  let wordsArray = words.split(" ");
  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          opacity: 1,
        },
        {
          duration: 2,
          delay: stagger(0.2),
          ease: "easeInOut",
        }
      );
    }
  }, [isInView]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              initial={{
                opacity: 0,
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              key={word + idx}
              className="dark:text-white text-black opacity-0"
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className=" dark:text-white text-black text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
