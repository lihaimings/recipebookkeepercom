import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: {
    default: "Recipe Bookkeeper - Organize recipes with ease",
    template: "%s | Recipe Bookkeeper",
  },
  description: "Recipe Bookkeeper is a web-based application designed to help home cooks, chefs, and food bloggers manage their recipe collections efficiently. It provides",
  keywords: ["Home Cooking Recipes", "Meal Planning Apps", "Grocery List Generator"],
  authors: [{ name: "Recipe Bookkeeper" }],
  creator: "Recipe Bookkeeper",
  publisher: "Recipe Bookkeeper",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Recipe Bookkeeper",
    title: "Recipe Bookkeeper - Organize recipes with ease",
    description: "Recipe Bookkeeper is a web-based application designed to help home cooks, chefs, and food bloggers manage their recipe collections efficiently. It provides",
  },
  twitter: {
    card: "summary_large_image",
    title: "Recipe Bookkeeper - Organize recipes with ease",
    description: "Recipe Bookkeeper is a web-based application designed to help home cooks, chefs, and food bloggers manage their recipe collections efficiently. It provides",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
