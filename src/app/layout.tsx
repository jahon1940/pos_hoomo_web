import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import I18nProvider from "@/components/I18nProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";

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
  description:
    "Tovarlar, mijozlar, kassa, moliya va boshqa ko'p ma'lumotlarni hisobga olish - barchasi bitta oddiy va qulay dasturda",
  icons: {
    icon: "/favicon.png", // PNG favicon
  },
  openGraph: {
    title: "Hoomo - Do'kon boshqaruvi uchun professional yechim",
    description:
      "Tovarlar, mijozlar, kassa, moliya va boshqa ko'p ma'lumotlarni hisobga olish - barchasi bitta oddiy va qulay dasturda",
    url: "https://hoomo-service.vercel.app/",
    siteName: "Hoomo service",
    images: [
      {
        url: "/favicon.png", // Telegramda ko‘rinadigan rasm
        width: 600,
        height: 315,
        alt: "Hoomo img",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Hoomo - Do'kon boshqaruvi uchun professional yechim",
    description:
      "Tovarlar, mijozlar, kassa, moliya va boshqa ko'p ma'lumotlarni hisobga olish - barchasi bitta oddiy va qulay dasturda",
    images: ["/favicon.png"],
  },
  other: {
    author: "Abbosbek Qodirov", // shu yerda yoziladi
  },
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
            <ToastContainer
              position="top-center"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            <Header />
            {children}
            <Footer />
          </LanguageProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
