import Image from "next/image";
import { Button } from "./shadcn/button";
import Link from "next/link";
import NavMobileMenu from "./NavMobileMenu";

export default function Nav() {
  return (
    <header>
      <nav className="flex items-center justify-between mx-auto py-4">
        <Link href="/">
          <Image
            src="/lp-logo.svg"
            alt="Lyla Pitajen Logo"
            width={32}
            height={32}
          />
        </Link>

        <div className="hidden items-center gap-6 text-content-muted sm:flex">
          <Link href="/#case-studies">Case Studies</Link>
          <Link href="/about">About</Link>
          {/* <Link href="/about">Blogs</Link> */}
          <Button>
            <a
              href="https://calendly.com/lylapitajen/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a call
            </a>
          </Button>
        </div>
        <div className="sm:hidden">
          <NavMobileMenu />
        </div>
      </nav>
    </header>
  );
}
