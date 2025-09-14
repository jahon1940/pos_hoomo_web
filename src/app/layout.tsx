import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import I18nProvider from "@/components/I18nProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hoomo - Do'kon boshqaruvi uchun professional yechim",
  description: "Tovarlar, mijozlar, kassa, moliya va boshqa ko'p ma'lumotlarni hisobga olish - barchasi bitta oddiy va qulay dasturda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <I18nProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
