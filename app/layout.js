import { Playfair_Display, Roboto } from "next/font/google";

const playFair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playFair.variable} ${roboto.variable}`}>
      <body>{children}</body>
    </html>
  );
}
