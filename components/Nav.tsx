"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Logo from "./Logo";
import NavItem from "./NavItem";

const links = [
  { href: "/#case-studies", label: "Work" },
  { href: "/about", label: "About" },
  { href: "https://calendly.com/lylapitajen/discovery-call", label: "Book a call" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 0);
      setVisible(currentScrollY < lastScrollY.current || currentScrollY < 20);
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`z-50 w-full bg-pattern-diagonal transition-transform duration-200 ${
        open ? "fixed inset-0 flex flex-col" : scrolled ? "fixed border-y" : "relative border-y"
      } ${!open && scrolled && !visible ? "-translate-y-full" : "translate-y-0"}`}
    >
      {/* Nav bar */}
      <nav className="flex justify-between w-full screen-max-width-wrapper bg-bg-primary">
        <NavItem>
          <Link href="/" onClick={() => setOpen(false)}>
            <Logo className="text-accent w-8 h-8" />
          </Link>
        </NavItem>

        <div className="hidden sm:flex">
          {links.map(({ href, label }) => (
            <NavItem key={href}>
              <Link href={href}>{label}</Link>
            </NavItem>
          ))}
        </div>

        <NavItem className="sm:hidden border-l h-auto">
          <button
            className="flex flex-col justify-center gap-[5px] w-5 h-5"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-full bg-fg-secondary transition-all duration-200 origin-center ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-fg-secondary transition-all duration-200 ${
                open ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-fg-secondary transition-all duration-200 origin-center ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </NavItem>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="flex-1 flex flex-col sm:hidden animate-in slide-in-from-top-4 fade-in duration-200">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} className="border-b first:border-t p-tile" onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <div className="flex-1 bg-pattern-diagonal" />
        </div>
      )}
    </header>
  );
}
