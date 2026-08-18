"use client";

import { useEffect, useMemo, useState } from "react";
import { cn, extractHeadings } from "@/lib/utils";

type Props = {
  content: string;
  className?: string;
};

export default function TableOfContents({ content, className }: Props) {
  const headings = useMemo(() => extractHeadings(content), [content]);
  const [activeId, setActiveId] = useState<string | null>(headings[0]?.id ?? null);

  useEffect(() => {
    const elements = headings
      .map((heading) => document.getElementById(heading.id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const lastHeading = headings[headings.length - 1];
    const isAtBottom = () => window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isAtBottom()) {
          setActiveId(lastHeading.id);
          return;
        }
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "0px 0px -70% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));

    const handleScroll = () => {
      if (isAtBottom()) {
        setActiveId(lastHeading.id);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <div className={cn(className, "border-r")}>
      <div className="sticky top-0 overflow-hidden text-sm">
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            className={cn(
              "font-sans block border-b px-tile py-4 text-fg-primary hover:bg-bg-element-hover",
              heading.level === 3 && "pl-12 text-fg-secondary",
              activeId === heading.id && "bg-accent/10 text-accent font-semibold border-l-accent border-l-2"
            )}
          >
            {heading.text}
          </a>
        ))}
      </div>
    </div>
  );
}
