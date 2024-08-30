import type { Metadata } from "next";
import { Sono } from "next/font/google";
import "./globals.css";
import Nav from "./ui/nav";

const defaultFont = Sono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kenneth Tso Portfolio Site",
  description: "Kenneth Tso Software Engineer Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={defaultFont.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
