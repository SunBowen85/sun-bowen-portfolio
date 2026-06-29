"use client";

import {
  motion,
  useInView,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";

type Segment = {
  text: string;
  className?: string;
};

type WordsPullUpProps = {
  text: string;
  className?: string;
  showAsterisk?: boolean;
};

type WordsPullUpMultiStyleProps = {
  segments: Segment[];
  className?: string;
};

const wordTransition = {
  duration: 0.82,
  ease: [0.16, 1, 0.3, 1] as const,
};

export function WordsPullUp({
  text,
  className = "",
  showAsterisk = false,
}: WordsPullUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const words = text.split(" ");

  return (
    <div ref={ref} className={className}>
      {words.map((word, index) => {
        const isLast = index === words.length - 1;

        return (
          <motion.span
            key={`${word}-${index}`}
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ ...wordTransition, delay: index * 0.08 }}
            className="relative inline-block"
          >
            {word}
            {showAsterisk && isLast ? (
              <sup className="absolute -right-[0.28em] top-[0.62em] text-[0.31em] leading-none">
                *
              </sup>
            ) : null}
            {isLast ? "" : "\u00a0"}
          </motion.span>
        );
      })}
    </div>
  );
}

export function WordsPullUpMultiStyle({
  segments,
  className = "",
}: WordsPullUpMultiStyleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const words = segments.flatMap((segment) =>
    segment.text.split(" ").map((word) => ({
      word,
      className: segment.className,
    })),
  );

  return (
    <div ref={ref} className={className}>
      {words.map(({ word, className: wordClassName }, index) => (
        <motion.span
          key={`${word}-${index}`}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ ...wordTransition, delay: index * 0.06 }}
          className={`inline-block ${wordClassName ?? ""}`}
        >
          {word}
          {index === words.length - 1 ? "" : "\u00a0"}
        </motion.span>
      ))}
    </div>
  );
}

export function ScrollTextReveal({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.82", "end 0.22"],
  });
  const letters = Array.from(text);

  return (
    <p
      ref={ref}
      className="mx-auto mt-12 max-w-3xl text-xs leading-7 text-[#DEDBC8] sm:text-sm md:text-base md:leading-8"
    >
      {letters.map((letter, index) => (
        <AnimatedLetter
          key={`${letter}-${index}`}
          index={index}
          total={letters.length}
          progress={scrollYProgress}
        >
          {letter}
        </AnimatedLetter>
      ))}
    </p>
  );
}

function AnimatedLetter({
  children,
  index,
  total,
  progress,
}: {
  children: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const charProgress = index / total;
  const opacity = useTransform(
    progress,
    [Math.max(0, charProgress - 0.1), Math.min(1, charProgress + 0.05)],
    [0.2, 1],
  );

  return (
    <motion.span style={{ opacity }}>
      {children === " " ? "\u00a0" : children}
    </motion.span>
  );
}
