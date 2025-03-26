import type React from "react";
import { Tajawal } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "مستر بروبر كلين | خدمات تنظيف احترافية",
  description: "خدمات تنظيف احترافية للمنازل والشركات",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body className={tajawal.className}>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

import "./globals.css";
