"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const quoteAvatarFiles = [
  "quote-avatar-1.svg",
  "quote-avatar-2.svg",
  "quote-avatar-3.svg",
  "quote-avatar-4.svg",
  "quote-avatar-5.svg",
];

export default function QuoteAvatar() {
  const [avatar, setAvatar] = useState(quoteAvatarFiles[0]);

  useEffect(() => {
    setAvatar(quoteAvatarFiles[Math.floor(Math.random() * quoteAvatarFiles.length)]);
  }, []);

  return <Image src={`/quote-avatars/${avatar}`} alt="" width={64} height={64} unoptimized />;
}
