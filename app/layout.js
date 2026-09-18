import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playFair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "BPS Legal — Criminal & Cyber Law Advocate in Delhi",
    template: "%s | BPS Legal",
  },
  description: "Trusted legal guidance for individuals, businesses, and NRIs across India — specializing in Criminal Law and Cyber Law.",
  metadataBase: new URL("https://bps-legal.vercel.app")
}


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playFair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
