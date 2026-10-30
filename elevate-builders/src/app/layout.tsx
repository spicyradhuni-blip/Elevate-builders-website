import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Elevate Builders | Construction Subcontracting & Manpower Supply | Saudi Arabia",
    template: "%s | Elevate Builders",
  },
  description: "Elevate Builders provides civil, MEP, finishing & fit-out subcontracting and skilled manpower supply across the Kingdom of Saudi Arabia. Request a quotation for your project.",
  keywords: ["construction subcontractor Saudi Arabia", "MEP subcontractor KSA", "civil works Saudi Arabia", "fit-out contractor", "construction manpower supply Saudi Arabia"],
  openGraph: {
    title: "Elevate Builders | Premium Construction Subcontracting in Saudi Arabia",
    description: "Civil, MEP, finishing works and workforce solutions for main contractors across the Kingdom.",
    url: "https://www.elevatebuilders.com.sa",
    siteName: "Elevate Builders",
    locale: "en_SA",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}