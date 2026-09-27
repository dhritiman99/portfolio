
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/features/theme/providers/ThemeProvider";
import { Header } from "@/features/layout/components/header";
import QueryProvider from "@/providers/QueryProvider";
import { Footer2 } from "@/features/layout/components/footer2";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryProvider>
      <html
        suppressHydrationWarning
        lang="en"
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
        <body className="min-h-full flex flex-col">
          <ThemeProvider>
            <Header />
            {children}
            <Footer2/>
          </ThemeProvider>
        </body>
      </html>
    </QueryProvider>
  );
}
