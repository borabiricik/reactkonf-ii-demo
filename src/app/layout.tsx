"use client";

import { HeroUIProvider } from "@heroui/react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="p-4">
        <header className="flex items-center justify-end">
          <Link href="https://bursa.dev" target="_blank">
          <Image
            src="/images/bbt.png"
            alt="BBT Logo"
            width={100}
            height={30}
            priority
          /></Link>
        </header>
        <HeroUIProvider>{children}</HeroUIProvider>
        </div>
      </body>
    </html>
  );
}
