import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SiteHeader from "@/componets/site-header";

const inter = localFont({
  src: "./fonts/inter.ttf",
});

const ibm_mono = localFont({
  src: "./fonts/ibm-plex-500.ttf",
  variable: "--font-ibm-mono",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${ibm_mono.variable} antialiased`}>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
