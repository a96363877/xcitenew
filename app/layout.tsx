import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import OfferPopup from "@/components/offer-popup"


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
      <body>
          <OfferPopup />
          <Header />
          <main>{children}</main>
          <Footer />
      </body>
    </html>
  )
}
