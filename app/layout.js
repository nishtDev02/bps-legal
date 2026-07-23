import { Playfair_Display, Roboto } from "next/font/google";

const playFair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playFair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
