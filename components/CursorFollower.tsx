"use client";

import { useEffect, useRef } from "react";

export default function CursorFollower() {
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only execute on desktop/devices with fine pointer (mouse) and without prefers-reduced-motion
    if (typeof window === "undefined") return;

    const hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!hasFinePointer || prefersReducedMotion) {
      return;
    }

    const follower = followerRef.current;
    if (!follower) return;

    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    let isVisible = false;
    let animationFrameId: number;

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        currentX = mouseX;
        currentY = mouseY;
        follower.classList.add("is-visible");
      }
    };

    const onMouseEnter = () => {
      isVisible = true;
      follower.classList.add("is-visible");
    };

    const onMouseLeave = () => {
      isVisible = false;
      follower.classList.remove("is-visible");
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Exclude forms, inputs, textareas, selects, WhatsApp float, and configurator controls
      const isExcluded = Boolean(
        target.closest(
          "input, textarea, select, form, .contact-form, .whatsapp-float, .config-card"
        )
      );

      if (isExcluded) {
        follower.classList.remove("is-hovering");
        return;
      }

      // Detect interactive elements (links, buttons, CTAs)
      const isInteractive = Boolean(
        target.closest("a, button, [role='button'], .btn")
      );

      if (isInteractive) {
        follower.classList.add("is-hovering");
      } else {
        follower.classList.remove("is-hovering");
      }
    };

    const render = () => {
      if (isVisible) {
        // Smooth interpolation with gentle inertia (0.18 factor)
        currentX = lerp(currentX, mouseX, 0.18);
        currentY = lerp(currentY, mouseY, 0.18);

        // Hardware accelerated translation
        follower.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseover", onMouseOver, { passive: true });

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseover", onMouseOver);
    };
  }, []);

  return <div ref={followerRef} className="cursor-follower" aria-hidden="true" />;
}
