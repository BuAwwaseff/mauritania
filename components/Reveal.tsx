"use client";

import { useEffect, useRef, type ReactNode } from "react";
import {
  observeOnce,
  pauseAnimation,
  prepareReveal,
  revealUp,
  setVisible,
  stopAnimation,
} from "@/lib/motion";

export function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    prepareReveal(element, "up");

    let animation: ReturnType<typeof revealUp> = null;
    const cleanup = observeOnce(element, () => {
      animation = revealUp(element, { delay });
    });

    return () => {
      pauseAnimation(animation);
      stopAnimation(element);
      setVisible(element);
      cleanup();
    };
  }, [delay]);

  return (
    <div ref={ref} className={`reveal-target ${className}`.trim()}>
      {children}
    </div>
  );
}

export function StaggerReveal({
  children,
  amount = 0.16,
  className = "",
}: {
  children: ReactNode;
  amount?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const targets = Array.from(element.children).filter(
      (child): child is HTMLElement => child instanceof HTMLElement,
    );

    if (!targets.length) return;

    for (const target of targets) {
      prepareReveal(target, "up");
    }

    let animation: ReturnType<typeof revealUp> = null;
    const cleanup = observeOnce(
      element,
      () => {
        animation = revealUp(targets, { staggerMs: 90 });
      },
      { threshold: amount },
    );

    return () => {
      pauseAnimation(animation);
      stopAnimation(targets);
      setVisible(targets);
      cleanup();
    };
  }, [amount]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
