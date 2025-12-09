"use client";
import Link from "next/link";
import { Button } from "./shadcn/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./shadcn/dropdown-menu";
import { Menu, PenTool, TextAlignStart, Heart } from "lucide-react";
import { useState } from "react";

export default function NavMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Menu className="h-3 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-64" align="end">
          <DropdownMenuItem>
            <PenTool className="text-neutral-400 mr-1" />
            <Link href="/#case-studies" className="text-lg font-medium">
              Case Studies
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Heart className="text-neutral-400 mr-1" />
            <Link href="/about" className="text-lg font-medium">
              About
            </Link>
          </DropdownMenuItem>
          {/* <DropdownMenuItem>
            <TextAlignStart className="text-neutral-400 mr-1" />
            <Link href="/blogs" className="text-lg font-medium">
              Blogs
            </Link>
          </DropdownMenuItem> */}
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Button className="w-full">
              <a
                href="https://calendly.com/lylapitajen/discovery-call"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a call
              </a>
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
