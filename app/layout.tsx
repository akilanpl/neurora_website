import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });

export const metadata: Metadata = {
  title: "Neurora — AI-Powered Cancer Diagnostics",
  description: "Neurora is building next-generation digital pathology tools for faster, smarter cancer detection and clinical review.",
  keywords: ["Neurora", "digital pathology", "AI diagnostics", "cancer diagnostics", "healthcare AI", "virtual staining"],
  metadataBase: new URL("https://neurora.ai"),
  openGraph: {
    title: "Neurora — Advancing Cancer Diagnostics Through AI",
    description: "Premium AI-powered pathology platform for hospitals, pathologists, and research teams.",
    url: "https://neurora.ai",
    siteName: "Neurora",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Neurora", description: "The Future of Digital Pathology" },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="en" className="scroll-smooth"><body className={`${inter.variable} ${geist.variable} antialiased`}>{children}</body></html>;
}
