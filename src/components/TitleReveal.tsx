import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TitleRevealProps {
  children: string;
  className?: string;
  id?: string;
  as?: "h2" | "h3";
}

export default function TitleReveal({
  children,
  className = "",
  id,
  as: Component = "h2",
}: TitleRevealProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!headingRef.current) return;

    const tween = gsap.fromTo(
      headingRef.current,
      {
        opacity: 0,
        clipPath: "inset(0 0 100% 0)",
      },
      {
        opacity: 1,
        clipPath: "inset(0 0 0% 0)",
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          once: true,
        },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [children]);

  return (
    <Component
      ref={headingRef}
      id={id}
      className={className}
      style={{ display: "block", willChange: "clip-path, opacity" }}
    >
      {children}
    </Component>
  );
}
