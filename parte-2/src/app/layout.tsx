import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Aprenda Python e IA | Asimov Academy",
  description: "O curso mais prático do Brasil para quem quer entrar em tecnologia sem enrolação. Aprenda Python do zero e construa projetos reais com Inteligência Artificial.",
  keywords: ["Python", "Inteligência Artificial", "Curso de Programação", "Asimov Academy", "Aprender a programar", "Data Science"],
  openGraph: {
    title: "Aprenda Python e IA | Asimov Academy",
    description: "O curso mais prático do Brasil para quem quer entrar em tecnologia sem enrolação.",
    siteName: "Asimov Academy",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aprenda Python e IA | Asimov Academy",
    description: "O curso mais prático do Brasil para quem quer entrar em tecnologia sem enrolação.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}
