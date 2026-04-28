import type { Metadata } from "next";
import { Poppins, JetBrains_Mono } from "next/font/google"; 
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import CustomCursor from "@/components/layout/CustomCursor";
import ScrollToTop from "@/components/layout/ScrollToTop";
// security layer for right click and keyboard shortcut prevention
import SecurityLayer from "@/components/SecurityLayer"; 

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
  title: "ZeroDay Test || Bangladesh’s First Crowdsourced Bug Bounty Platform.",
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
        <SecurityLayer/>
        {/* <CustomCursor /> */}
        <Navbar />
        <main>{children}</main>
        <ScrollToTop />
        <Footer/>
      </body>
    </html>
  );
}