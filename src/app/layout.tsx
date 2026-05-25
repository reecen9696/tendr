import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  title: "tendr — Price a tender in 30 minutes, not three days",
  description:
    "Drop in the drawings, scope and your pricing sheet. tendr does the takeoff and writes the quote — so you can put a price on every job that comes in.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={hanken.variable}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
