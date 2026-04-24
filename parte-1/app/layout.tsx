import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const positivusFont = Space_Grotesk({
  variable: "--font-positivus",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Positivus",
  description: "Navigating the digital landscape for success",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${positivusFont.variable} font-sans h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-dark">{children}</body>
    </html>
  );
}
