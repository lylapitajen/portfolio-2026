"use client";
import Image from "next/image";
import { Button } from "./shadcn/button";
import Link from "next/link";
import { useState } from "react";
import { PenTool, User } from "lucide-react";

type Props = {
  theme?: "dark" | "light";
};

export default function Nav({ theme = "light" }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <nav className="screen-max-width-wrapper flex items-center justify-between mx-auto py-4">
        <Link href="/" className="z-50" onClick={() => setOpen(false)}>
          <Image src="/lp-logo.svg" alt="Lyla Pitajen Logo" width={32} height={32} />
        </Link>

        <div
          className={`hidden sm:flex items-center gap-6 ${
            theme === "light" ? "text-content-muted" : "text-neutral-200"
          }`}
        >
          <Link href="/#case-studies">Case Studies</Link>
          <Link href="/about">About</Link>
          {/* <Link href="/about">Blogs</Link> */}
          <Button>
            <a href="https://calendly.com/lylapitajen/discovery-call" target="_blank" rel="noopener noreferrer">
              Book a call
            </a>
          </Button>
        </div>
        <button
          className="block relative sm:hidden z-50 h-6 w-6"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`absolute block h-[3px] w-7 bg-content-muted transition-all duration-300 rounded-sm ${
              open ? "-translate-y-2 top-1/2 rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute block h-[3px] w-7 bg-content-muted transition-all duration-300 rounded-sm ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute block h-[3px] w-7 bg-content-muted transition-all duration-300 rounded-sm ${
              open ? "-translate-y-2 top-1/2 -rotate-45" : "translate-y-2"
            }`}
          />
        </button>
        {open && (
          <div
            className={`mobile-menu-slide fixed inset-0 bg-white flex flex-col gap-8 pt-24 pb-12 px-6 text-xl sm:hidden ${
              open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <Link
              href="/about"
              className="flex items-center gap-2 text-content-default text-2xl font-medium"
              onClick={() => setOpen(false)}
            >
              <User className="text-content-muted" />
              About
            </Link>
            <Link
              href="/#case-studies"
              className="flex items-center gap-2 text-content-default text-2xl font-medium"
              onClick={() => setOpen(false)}
            >
              <PenTool className="text-content-muted" />
              Case Studies
            </Link>
            <Button className="mt-auto" size="lg">
              Book a call
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}
