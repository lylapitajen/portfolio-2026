import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "../components/Nav";
import Footer from "@/components/Footer";

const DMSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lyla Pitajen | Product Designer & UX Engineer",
  description: "Lyla Pitajen's UX and dev portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${DMSans.variable} antialiased`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
