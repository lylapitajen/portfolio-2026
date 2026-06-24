import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "./shadcn/tooltip";

export default function Footer() {
  return (
    <footer className="border-t bg-pattern-diagonal">
      <div className="screen-max-width-wrapper bg-bg-primary flex flex-col border-x sm:flex-row sm:justify-between gap-2  py-4 text-fg-tertiary text-sm px-tile">
        <div className="flex gap-2 items-center">
          Designed in
          <Tooltip>
            <TooltipTrigger asChild>
              <Image src="/figma-logo.svg" alt="Figma logo" height={8} width={8} />
            </TooltipTrigger>
            <TooltipContent>Figma</TooltipContent>
          </Tooltip>
          and built with
          <div className="flex items-center gap-1">
            <Tooltip>
              <TooltipTrigger asChild>
                <Image src="/nextjs-logo.svg" alt="Next.js logo" height={16} width={16} />
              </TooltipTrigger>
              <TooltipContent>Next.js</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Image src="/tailwind-logo.svg" alt="TailwindCSS logo" height={16} width={16} />
              </TooltipTrigger>
              <TooltipContent>TailwindCSS</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Image src="/shadcn-logo.svg" alt="Shadcn logo" height={16} width={16} />
              </TooltipTrigger>
              <TooltipContent>Shadcn</TooltipContent>
            </Tooltip>
          </div>
        </div>
        <p>© Lyla Pitajen </p>
      </div>
    </footer>
  );
}
