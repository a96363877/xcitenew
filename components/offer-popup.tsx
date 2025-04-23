"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"

export default function OfferPopup() {
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    // Check if the popup has been shown before
    const hasShownPopup = localStorage.getItem("hasShownOfferPopup")

    if (!hasShownPopup) {
      // Show popup after 3 seconds
      const timer = setTimeout(() => {
        setIsOpen(true)
        // Set flag in localStorage to avoid showing again in the same session
        localStorage.setItem("hasShownOfferPopup", "true")
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">عروض حصرية لفترة محدودة!</DialogTitle>
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogHeader>
        <div className="bg-blue-900 text-white p-4 rounded-lg">
          <div className="flex flex-col items-center">
            <div className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-md mb-4 font-bold">عرض حصري</div>
            <h3 className="text-2xl font-bold mb-2">خصم 15% على جميع المنتجات</h3>
            <p className="mb-4">
              استخدم الكود: <span className="font-bold">WELCOME15</span>
            </p>
            <img
              src="/0069289_iphone-16-plus.webp"
              alt="Special Offer"
              width={300}
              height={200}
              className="mb-4 rounded-md"
            />
            <p className="text-sm mb-4">العرض ساري حتى نهاية الشهر</p>
            <div className="flex gap-4">
              <Button
                onClick={() => setIsOpen(false)}
                variant="outline"
                className="bg-white text-blue-900 hover:bg-gray-100"
              >
                تسوق الآن
              </Button>
              <Link href="/offers">
                <Button onClick={() => setIsOpen(false)} className="bg-red-600 hover:bg-red-700 text-white">
                  عرض جميع العروض
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
