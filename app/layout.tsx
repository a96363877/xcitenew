import type React from "react"
import type { Metadata } from "next"
import { Cairo } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/context/cart-context"
import { Toaster } from "@/components/ui/toaster"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Script from "next/script"
import OfferPopup from "@/components/offer-popup"

// Use Cairo font for better Arabic support
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-cairo",
})

export const metadata: Metadata = {
  title: "Xcite - Online Shopping",
  description: "Shop electronics, appliances, mobiles and more",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
         
      <body className="font-cairo min-h-screen flex flex-col bg-white">
        <CartProvider>
          <Header/>
          <main className="flex-grow ">{children}</main>
          <Footer/>
          <Toaster />
          <OfferPopup/>
        </CartProvider>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=AW-17036437498`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17036437498');
          `}
        </Script>
      </body>
    </html>
  )
}
