import type { Metadata } from "next";
import localFont from "next/font/local";
import { Libre_Franklin } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";

// Display face — used for headings.
const kitSans = localFont({
  src: "./fonts/KitSans-Bold.woff2",
  weight: "700",
  style: "normal",
  variable: "--font-kit-sans",
  display: "swap",
});

// Body face.
const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-libre",
  display: "swap",
});

export const metadata: Metadata = {
  title: "tendr — Price a tender in 30 minutes, not three days",
  description:
    "AI takeoff and tender pricing for Australian subcontractors. Forward in the RFQ and drawings; tendr prices the job from your own rates and drafts the methodology, ready for your estimator to review and sign off.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${kitSans.variable} ${libreFranklin.variable}`}>
      <body>
        {children}
        <Analytics />
        <Script id="hotjar" strategy="afterInteractive">
          {`(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:6717969,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
        </Script>
      </body>
    </html>
  );
}
