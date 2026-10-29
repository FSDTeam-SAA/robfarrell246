import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import MainProviders from "@/Providers/MainProviders";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "VisionBeforeLease | Retail Portfolio Overview",
  description: "Retail portfolio management and spatial AI analytics dashboard for landlords and brokers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.className}>
      <body className="min-h-screen bg-[#F7F8F6] text-slate-800 antialiased selection:bg-blue-500/20 selection:text-blue-700">
        <MainProviders>{children}</MainProviders>
      </body>
    </html>
  );
}
