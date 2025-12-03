import Image from "next/image";
import { Button } from "./button";
import Link from "next/link";

export default function Nav() {
  return (
    <header>
      <nav className="flex items-center justify-between mx-auto py-4">
        <Image src="/lp-logo.svg" alt="Logo" width={32} height={32} />
        <div className="flex items-center gap-6 text-neutral-700">
          <Link href="/">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/about">Blogs</Link>
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
      </nav>
    </header>
  );
}
