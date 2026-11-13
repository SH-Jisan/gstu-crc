import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import AosInit from "@/components/AosInit";
import VersionTracker from "@/components/VersionTracker";
import versionData from "@/version.json";

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
    default: "CRC | GSTU Branch",
    template: "%s | CRC",
  },
  description:
    "Official digital platform of Come for Road Child (CRC), founded 5 June 2016 at Gopalganj Science and Technology University (GSTU). Discover Hatekhori Free School, governance hierarchy, emergency child safeguarding, and audited financial reports.",
  keywords: [
    "CRC",
    "GSTU CRC",
    "Come for Road Child",
    "Hatekhori School",
    "Street Children Bangladesh",
    "Gopalganj Science and Technology University",
    "Child Safeguarding",
    "NGO Donation Bangladesh",
  ],
  openGraph: {
    title: "CRC | GSTU Branch",
    description:
      "The World Will Be Free from Street Children by Connected Together. Founded 5 June 2016 at GSTU.",
    url: "https://gstu-crc.org",
    siteName: "CRC",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/icon.png?v=2", type: "image/png", sizes: "32x32" },
      { url: "/icon.png?v=2", type: "image/png", sizes: "192x192" },
      { url: "/favicon.ico?v=2", sizes: "any" },
    ],
    apple: [
      { url: "/apple-icon.png?v=2", type: "image/png", sizes: "180x180" },
    ],
    shortcut: "/icon.png?v=2",
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
        <meta name="application-version" content={versionData.tag} />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon.png?v=2" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon.png?v=2" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico?v=2" />
        <link rel="shortcut icon" href="/icon.png?v=2" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=2" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 text-slate-900 min-h-screen flex flex-col`}
      >
        <AosInit />
        <SmoothScroll />
        <VersionTracker />
        {children}
      </body>
    </html>
  );
}
