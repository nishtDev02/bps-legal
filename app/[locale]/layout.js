import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BPS Legal",
  description: "A website for lawyer",
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  console.log(locale);
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        {/* <TopBar /> */}
        <Navbar locale={locale} />
      </div>

      {children}

      <Footer locale={locale} />
      
    </>
  );
}
