import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "@/components/general/NavbarWrapper";
import { AuthProvider } from "@/components/general/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wordnest",
  description: "WordNest is a sleek and responsive blog web app built for sharing thoughts, stories, and ideas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-7xl mx-auto p-6 sm:p-2 md:p-4`}
        >
          <NavbarWrapper />
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
