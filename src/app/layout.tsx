import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppOverlay from "./components/WhatsAppOverlay";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Naresh Bakers Menu",
  description: "Naresh Bakers Menu",
  manifest: "/manifest.ts",
  themeColor: "#ec2127",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icons/apple-touch-icon.png" />
        <meta name="theme-color" content="#ec2127" id="theme-color-meta"></meta>
      </head>
      <body className={outfit.variable}>
        <Header />
        <WhatsAppOverlay />
        {children}
        <Footer />
      </body>
    </html>
  );
}
