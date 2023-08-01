import React from "react";
import "./globals.css";

export const metadata = {
  title: "Stats of Our Own",
  description: "A statistics page based on the website Archive Of Our Own",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
