import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "REMYNX — Time Awareness System",
    template: "%s | REMYNX",
  },
  description:
    "REMYNX is a Time Awareness System that helps ambitious people track and reflect on their days — not just their tasks. Turn wasted time into intentional living.",
  keywords: [
    "time awareness",
    "productivity",
    "daily tracking",
    "intentional living",
    "REMYNX",
    "achievement logging",
    "life dashboard",
  ],
  authors: [{ name: "REMYNX" }],
  openGraph: {
    title: "REMYNX — Time Awareness System",
    description:
      "REMYNX helps you track and reflect on your days — not your tasks. Built for ambitious people who want to live with intention.",
    url: "https://remynx.app",
    siteName: "REMYNX",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "REMYNX — Time Awareness System",
    description:
      "Track your days. Not your tasks. REMYNX is a Time Awareness System for ambitious people.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
