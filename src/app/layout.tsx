import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./ui/nav";
import { ThemeProvider } from "./ui/themeProvider";
import Head from 'next/head';

const defaultFont = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kenneth Tso - Software Engineer",
  description: "Kenneth Tso Software Engineer Website",
};

// Runs before first paint to set data-theme, preventing flash of wrong theme.
const noFoucScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.setAttribute('data-theme','light');}else if(!t&&window.matchMedia('(prefers-color-scheme: light)').matches){document.documentElement.setAttribute('data-theme','light');}}catch(e){}})();`;

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
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFoucScript }} />
      </head>
      <body className={defaultFont.className}>
        <ThemeProvider>
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
