import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Barry Song's Portfolio",
    template: "%s | Barry Song's Portfolio",
  },
  description: "Barry Song's Portfolio",
  keywords: [
    "Barry Song",
    "Barry Song's blog",
    "Barry Song's website",
    "Barry Song's portfolio",
    "Barry Song's projects",
    "Barry Song's thoughts",
    "Barry Song's experiences",
    "Barry Song's life",
    "Barry Song's career",
    "Barry Song's skills",
  ],
  openGraph: {
    title: "Barry Song's Portfolio",
    description: "Barry Song's Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Site preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barry Song's Portfolio",
    description: "Barry Song's Portfolio",
    images: ["/og.png"],
  },
  authors: [{ name: "Barry Song" }],
  creator: "Barry Song",
  publisher: "Barry Song",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        style={{
          fontFamily: "var(--font-inter)",
        }}
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
