import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const outfit = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Urban Market",
  description: "Marketplace for sports enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
