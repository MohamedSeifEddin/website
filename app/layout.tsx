import "./globals.css";
import { ReactNode } from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Kyno | Business Analysis Professional",
  description:
    "Business Analysis portfolio showcasing expertise in functional analysis, applied computer science, and IT solutions.",
  keywords:
    "business analysis, functional analysis, applied computer science, portfolio",
  authors: [{ name: "Kyno" }],
  creator: "Kyno",
  themeColor: "#0891b2",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-gray-100 text-gray-900 font-sans antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
