"use client";

import { useEffect, useRef } from "react";
import {
  observeOnce,
  pauseAnimation,
  prepareReveal,
  revealDivider,
  setVisible,
  stopAnimation,
} from "@/lib/motion";

export default function SectionDivider() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    prepareReveal(element, "divider");

    let animation: ReturnType<typeof revealDivider> = null;
    const cleanup = observeOnce(
      element,
      () => {
        animation = revealDivider(element);
      },
      { rootMargin: "0px 0px -8% 0px" },
    );

    return () => {
      pauseAnimation(animation);
      stopAnimation(element);
      setVisible(element);
      cleanup();
    };
  }, []);

  return (
    <div className="section-divider">
      <div className="container-main">
        <div ref={ref} className="section-divider__line" />
      </div>
    </div>
  );
}
