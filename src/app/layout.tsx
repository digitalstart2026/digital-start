"use client";
import "./globals.css";
import Footer from "../components/Layout/footer/Footer";
import Header from "@/components/Layout/Header";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            enableSystem={false}
            defaultTheme="light"
          >
            {/* ---------------------Header Starts-----------------  */}
            <Header />
            {/* ---------------------Header Ends-------------------  */}
            {children}
            {/* ---------------------Footer Starts-----------------  */}
            <Footer />
            {/* ---------------------Footer Ends-----------------  */}
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
