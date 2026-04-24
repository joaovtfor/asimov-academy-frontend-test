"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

type Direction = "up" | "down" | "left" | "right";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const getDirectionOffset = (dir: Direction) => {
    switch (dir) {
      case "up":
        return { y: 30, x: 0 };
      case "down":
        return { y: -30, x: 0 };
      case "left":
        return { x: 30, y: 0 };
      case "right":
        return { x: -30, y: 0 };
      default:
        return { y: 30, x: 0 };
    }
  };

  const offset = getDirectionOffset(direction);

  const initial = {
    opacity: 0,
    ...(shouldReduceMotion ? { x: 0, y: 0 } : offset),
  };

  const whileInView = {
    opacity: 1,
    x: 0,
    y: 0,
  };

  const transition = {
    delay: delay,
    type: (shouldReduceMotion ? "tween" : "spring") as "tween" | "spring",
    duration: shouldReduceMotion ? 0.3 : 0.8,
    bounce: shouldReduceMotion ? 0 : 0.3,
  };

  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      viewport={{ once: true, margin: "-50px" }}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
