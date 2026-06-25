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
    return `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${url}`;
  }
  return url;
}
