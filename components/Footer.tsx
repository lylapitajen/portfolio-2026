import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "./shadcn/tooltip";

export default function Footer() {
  return (
    <footer className="flex justify-between py-6 mt-24 border-t text-neutral-500 text-sm">
      <div className="flex gap-2 items-center">
        Designed on
        <Tooltip>
          <TooltipTrigger asChild>
            <Image
              src="/figma-logo.svg"
              alt="Figma logo"
              height={8}
              width={8}
            />
          </TooltipTrigger>
          <TooltipContent>Figma</TooltipContent>
        </Tooltip>
        and built with
        <div className="flex items-center gap-1">
          <Tooltip>
            <TooltipTrigger asChild>
              <Image
                src="/nextjs-logo.svg"
                alt="Next.js logo"
                height={16}
                width={16}
              />
            </TooltipTrigger>
            <TooltipContent>Next.js</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Image
                src="/tailwind-logo.svg"
                alt="TailwindCSS logo"
                height={16}
                width={16}
              />
            </TooltipTrigger>
            <TooltipContent>TailwindCSS</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Image
                src="/shadcn-logo.svg"
                alt="Shadcn logo"
                height={16}
                width={16}
              />
            </TooltipTrigger>
            <TooltipContent>Shadcn</TooltipContent>
          </Tooltip>
        </div>
      </div>
      <p>© Lyla Pitajen </p>
    </footer>
  );
}
