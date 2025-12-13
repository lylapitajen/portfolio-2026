import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "@/app/globals.css";

const DMSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

type Props = Readonly<{
  children: React.ReactNode;
  navTheme?: "light" | "dark";
  backgroundColor?: string;
}>;

export default function Layout({ children, navTheme, backgroundColor }: Props) {
  return (
    <html lang="en">
      <body className={`${DMSans.variable} antialiased`}>
        <div style={{ backgroundColor: backgroundColor }}>
          <Nav theme={navTheme} />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
