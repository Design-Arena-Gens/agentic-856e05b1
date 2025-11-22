import type { Metadata } from "next";
import { Cairo, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";

const headingFont = Cairo({
  subsets: ["arabic"],
  variable: "--font-heading",
  weight: ["400", "600", "700"]
});

const bodyFont = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"]
});

export const metadata: Metadata = {
  title: "استوديو النور | تصميم وتطوير مواقع ويب احترافية",
  description:
    "استوديو النور يبني مواقع إلكترونية سريعة، متجاوبة، وذات تجربة مستخدم مميزة. حلول رقمية متكاملة لشركتك أو مشروعك الناشئ."
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="bg-slate-950 text-slate-50 antialiased">{children}</body>
    </html>
  );
}
