import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  const [year, month, day] = dateString.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export function strapiImageUrl({ url }: { url: string }) {
  if (url.startsWith("/")) {
    return `${process.env.STRAPI_API_URL_LOCAL}${url}`;
  }
  return url;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function stripMarkdownInline(text: string): string {
  return text
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/_([^_]+)_/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .trim();
}

export type MarkdownHeading = {
  level: 2 | 3;
  text: string;
  id: string;
};

export function extractHeadings(markdown: string): MarkdownHeading[] {
  const headingRegex = /^(#{2,3})\s+(.*)$/gm;
  const headings: MarkdownHeading[] = [];
  const slugCounts = new Map<string, number>();
  let match: RegExpExecArray | null;

  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length as 2 | 3;
    const text = stripMarkdownInline(match[2]);
    const baseSlug = slugify(text);
    const count = slugCounts.get(baseSlug) ?? 0;
    slugCounts.set(baseSlug, count + 1);
    const id = count === 0 ? baseSlug : `${baseSlug}-${count + 1}`;
    headings.push({ level, text, id });
  }

  return headings;
}
