"use client";
import Image from "next/image";
import { Button } from "./shadcn/button";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { PenTool, User } from "lucide-react";
import Logo from "./Logo";
import NavItem from "./NavItem";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setVisible(currentScrollY < lastScrollY.current || currentScrollY < 20);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`border-b border-border-strong bg-bg-primary bg-pattern-diagonal fixed w-full transition-transform duration-200 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="flex justify-between screen-max-width-wrapper bg-bg-primary">
        <NavItem>
          <Link href="/" className="z-50" onClick={() => setOpen(false)}>
            <Logo className="text-accent w-8 h-8" />
          </Link>
        </NavItem>

        <div className="hidden sm:flex items-center">
          <NavItem>
            <Link href="/#case-studies">Work</Link>
          </NavItem>
          <NavItem>
            <Link href="/about">About</Link>
          </NavItem>
          <NavItem>
            <Link href="https://calendly.com/lylapitajen/discovery-call">Book a call</Link>
          </NavItem>
        </div>
        <button
          className="block relative sm:hidden z-50 h-6 w-6"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`absolute block h-[3px] w-7 bg-fg-secondary transition-all duration-300 rounded-sm ${
              open ? "-translate-y-2 top-1/2 rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute block h-[3px] w-7 bg-fg-secondary transition-all duration-300 rounded-sm ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute block h-[3px] w-7 bg-fg-secondary transition-all duration-300 rounded-sm ${
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
              className="flex items-center gap-2 text-fg-primary text-2xl font-medium"
              onClick={() => setOpen(false)}
            >
              <User className="text-fg-secondary" />
              About
            </Link>
            <Link
              href="/#case-studies"
              className="flex items-center gap-2 text-fg-primary text-2xl font-medium"
              onClick={() => setOpen(false)}
            >
              <PenTool className="text-fg-secondary" />
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
