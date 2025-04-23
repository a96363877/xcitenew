import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import OfferPopup from "@/components/offer-popup"
import { CartProvider } from "@/context/cart-context"
import { Toaster } from "@/components/ui/toaster"


export const metadata: Metadata = {
  title: "Xcite - Online Shopping",
  description: "Shop electronics, appliances, mobiles and more",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" dir="ltr">
      <body >
          <CartProvider>
            <OfferPopup />
            <Header />
            <main>{children}</main>
            <Footer />
            <Toaster />
          </CartProvider>
      </body>
    </html>
  )
}
