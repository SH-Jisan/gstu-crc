import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Come for Road Child (CRC) | Official Platform & Transparency Portal",
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
    title: "Come for Road Child (CRC) | Official Platform",
    description:
      "The World Will Be Free from Street Children by Connected Together. Founded 5 June 2016 at GSTU.",
    url: "https://gstu-crc.org",
    siteName: "Come for Road Child (CRC)",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 text-slate-900 min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
