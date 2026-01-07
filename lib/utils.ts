import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function strapiImageUrl({ url }: { url: string }) {
  if (url.startsWith("/")) {
    return `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${url}`;
  }
  return url;
}
