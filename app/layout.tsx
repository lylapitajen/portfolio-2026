import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Lyla Pitajen | Product & Design System Designer",
  description: "Lyla Pitajen's Portfolio",
};

const InterFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const IBMPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function Layout({ children }: Props) {
  return (
    <html lang="en">
      <body className={`${IBMPlexMono.variable} ${InterFont.variable} antialiased`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
