import type { Metadata } from "next";
import { Poppins, JetBrains_Mono } from "next/font/google"; 
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins", 
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "ZeroDay Test | Cybersecurity Lab",
  description: "Advanced cybersecurity testing environment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${jetbrainsMono.variable}`}>
      <body className=" font-poppins antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}