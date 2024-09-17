import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./ui/nav";
import Head from 'next/head';

const defaultFont = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kenneth Tso - Software Engineer",
  description: "Kenneth Tso Software Engineer Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <Head>
        <title>Kenneth Tso - Software Engineer</title>
        <meta name="description" content="Kenneth Tso's Portfolio Website" />
      </Head>
      <body className={defaultFont.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
