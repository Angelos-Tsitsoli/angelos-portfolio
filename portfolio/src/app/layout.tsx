import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientScripts from "./Components/ClientScripts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aggelos Tsitsoli Portfolio",
  description: "Aggelos Tsitsoli Portfolio",
  icons: {
    // primary icon served from /public
    // use the user's AT.png placed in public/
    icon: "/ATimg.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* explicit favicon link to ensure browsers load the provided image */}
        <link rel="icon" href="/ATimg.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <ClientScripts />
      </body>
    </html>
  );
}
