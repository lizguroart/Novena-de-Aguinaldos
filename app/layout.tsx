import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Novena de Aguinaldo Kawaii",
  description: "Una hermosa versión interactiva, tierna y navideña de la Novena de Aguinaldo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-contain bg-center bg-no-repeat`}
        style={{ backgroundImage: "url('/fondo-novena.gif')" }}
      >
        {children}
      </body>
    </html>
  );
}
