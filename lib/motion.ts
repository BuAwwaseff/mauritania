"use client";

import { animate, cubicBezier, remove, stagger, type JSAnimation } from "animejs";

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

type MotionTarget = HTMLElement | SVGElement;
type MotionTargets = MotionTarget | ArrayLike<MotionTarget>;
type RevealVariant = "up" | "scale" | "divider";

export const motionTokens = {
  duration: {
    fast: 220,
    base: 420,
    slow: 760,
    loop: 28000,
  },
  easing: {
    standard: "easeOutCubic",
    entrance: cubicBezier(0.22, 1, 0.36, 1),
    linear: "linear",
  },
  distance: {
    sm: 14,
    md: 20,
  },
} as const;

function toArray(targets: MotionTargets) {
  if (typeof (targets as MotionTarget).style !== "undefined") {
    return [targets as MotionTarget];
  }

  return Array.from(targets as ArrayLike<MotionTarget>);
}

export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia(reducedMotionQuery).matches;
}

export function stopAnimation(targets: MotionTargets) {
  remove(targets);
}

export function setVisible(targets: MotionTargets) {
  for (const target of toArray(targets)) {
    target.style.opacity = "1";
    target.style.transform = "none";
    target.style.filter = "none";
  }
}

export function prepareReveal(targets: MotionTargets, variant: RevealVariant = "up") {
  if (prefersReducedMotion()) {
    setVisible(targets);
    return;
  }

  for (const target of toArray(targets)) {
    target.style.opacity = "0";

    if (variant === "scale") {
      target.style.transform = "translate3d(0, -14px, 0) scale(0.985)";
      continue;
    }

    if (variant === "divider") {
      target.style.transform = "scaleX(0.4)";
      target.style.transformOrigin = "center";
      continue;
    }

    target.style.transform = "translate3d(0, 20px, 0)";
  }
}

export function observeOnce(
  element: Element,
  onEnter: () => void,
  options: { rootMargin?: string; threshold?: number } = {},
) {
  if (typeof window === "undefined") return () => undefined;

  if (prefersReducedMotion() || typeof IntersectionObserver === "undefined") {
    onEnter();
    return () => undefined;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;

      observer.disconnect();
      onEnter();
    },
    {
      rootMargin: options.rootMargin ?? "0px 0px -12% 0px",
      threshold: options.threshold ?? 0.2,
    },
  );

  observer.observe(element);
  return () => observer.disconnect();
}

export function revealUp(
  targets: MotionTargets,
  options: {
    delay?: number;
    duration?: number;
    staggerMs?: number;
    distance?: number;
  } = {},
) {
  if (prefersReducedMotion()) {
    setVisible(targets);
    return null;
  }

  return animate(targets, {
    opacity: [0, 1],
    translateY: [options.distance ?? motionTokens.distance.md, 0],
    duration: options.duration ?? motionTokens.duration.base,
    delay:
      options.staggerMs && options.staggerMs > 0
        ? stagger(options.staggerMs, { start: options.delay ?? 0 })
        : (options.delay ?? 0),
    ease: motionTokens.easing.entrance,
  });
}

export function revealScale(
  targets: MotionTargets,
  options: {
    delay?: number;
    duration?: number;
  } = {},
) {
  if (prefersReducedMotion()) {
    setVisible(targets);
    return null;
  }

  return animate(targets, {
    opacity: [0, 1],
    translateY: [-14, 0],
    scale: [0.985, 1],
    duration: options.duration ?? motionTokens.duration.base,
    delay: options.delay ?? 0,
    ease: motionTokens.easing.entrance,
  });
}

export function revealDivider(
  targets: MotionTargets,
  options: {
    delay?: number;
  } = {},
) {
  if (prefersReducedMotion()) {
    setVisible(targets);
    return null;
  }

  return animate(targets, {
    opacity: [0, 1],
    scaleX: [0.4, 1],
    duration: motionTokens.duration.slow,
    delay: options.delay ?? 0,
    ease: motionTokens.easing.entrance,
  });
}

export function marqueeTrack(
  targets: MotionTargets,
  options: {
    from?: string;
    to?: string;
    duration?: number;
  } = {},
) {
  if (prefersReducedMotion()) {
    setVisible(targets);
    return null;
  }

  return animate(targets, {
    translateX: [options.from ?? "0%", options.to ?? "-50%"],
    duration: options.duration ?? motionTokens.duration.loop,
    ease: motionTokens.easing.linear,
    loop: true,
  });
}

export function pauseAnimation(animation: JSAnimation | null | undefined) {
  animation?.pause();
}
