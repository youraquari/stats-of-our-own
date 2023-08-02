import React from "react";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";

const title = "Stats of Our Own";
const description =
  "A smart statistics page for Archive of Our Own (AO3) writers.";

export const metadata: Metadata = {
  title: title,
  description: description,
  keywords: ["AO3", "An Archive of Our Own", "Statistics"],
  creator: "youraquari",
  openGraph: {
    type: "website",
    url: "https://stats-of-our-own.vercel.app/",
    title: title,
    description: description,
    siteName: title,
    images: "/og.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
