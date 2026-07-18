import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

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
  const {locale} = await params;
  // console.log(locale);
  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="min-h-screen">
        <Navbar locale={locale}/>
        {children}
        </div>
        
        </body>
    </html>
  );
}
