"use client"

import { useState, useEffect, useRef } from "react"
import { X, ShoppingBag, Tag, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"
import { motion } from "framer-motion"
import { useCart } from "@/context/cart-context"
import { toast } from "@/components/ui/use-toast"

// Special offer product data
const specialOffer = {
  id: "special-offer-iphone16",
  name: "مكيف هواء سبليت هايسنس، 14400 وحدة حرارية بريطانية، AS-18CT4SXATG01S – ابيض",
  description: "Information on Hisense Split Air Conditioner, 14400 BTU, AS-18CT4SXATG01S – White  ",
  price: 139.9,
  originalPrice: 150.9,
  discount: 15,
  image: "/mkff.webp",
  code: "WELCOME15",
  expiryDate: "2024-05-30",
}

export default function OfferPopup() {
  const [isOpen, setIsOpen] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const { addItem } = useCart()
  const router = useRouter()
  const hasAddedToCartRef = useRef(false)

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

  const handleAddToCart = () => {
    if (hasAddedToCartRef.current) return

    setIsLoading(true)
    hasAddedToCartRef.current = true

    // Add the special offer product to cart
    setTimeout(() => {
      addItem({
        id: specialOffer.id,
        name: specialOffer.name,
        price: specialOffer.price,
        quantity: 1,
        image: specialOffer.image,
        originalPrice: specialOffer.originalPrice,
        discount: specialOffer.discount,
        code: specialOffer.code,
      })

      // Show success toast
      toast({
        title: "تمت الإضافة إلى السلة",
        description: "تم إضافة العرض الخاص إلى سلة التسوق",
        variant: "default",
      })

      setIsLoading(false)
      setIsOpen(false)

      // Navigate to cart
      router.push("/cart")
    }, 800)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[550px] p-0 overflow-hidden border-0 shadow-2xl">
        <div className="relative">
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90 z-10" />

          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10 z-0">
            <div
              className="absolute inset-0 bg-repeat"
              style={{
                backgroundImage:
                  'url(\'data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fillOpacity="1" fillRule="evenodd"%3E%3Ccircle cx="3" cy="3" r="3"/%3E%3Ccircle cx="13" cy="13" r="3"/%3E%3C/g%3E%3C/svg%3E\')',
              }}
            />
          </div>

          <DialogClose className="absolute right-4 top-4 rounded-full bg-white/10 backdrop-blur-sm p-1.5 opacity-80 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none z-20 text-white">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>

          <div className="relative z-10 p-6 text-white">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              {/* Product Image */}
              <div className="w-full md:w-1/2 flex justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 relative overflow-hidden">
                    <Image
                      src={specialOffer.image || "/placeholder.svg"}
                      alt="iPhone 16 Plus"
                      width={240}
                      height={240}
                      className="object-contain mx-auto"
                    />
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, duration: 0.4, type: "spring" }}
                      className="absolute -top-2 -right-2 bg-red-600 text-white text-sm font-bold rounded-full w-16 h-16 flex items-center justify-center rotate-12"
                    >
                      <span>-15%</span>
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Offer Details */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="inline-block bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-bold mb-4">
                    عرض حصري
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{specialOffer.name}</h3>

                  <p className="mb-4 text-white/80">{specialOffer.description}</p>

                  <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                    <Tag className="h-4 w-4" />
                    <span className="text-sm">
                      كود الخصم:{" "}
                      <span className="font-bold bg-white/20 px-2 py-0.5 rounded ml-1">{specialOffer.code}</span>
                    </span>
                  </div>

                  <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">العرض ساري حتى {specialOffer.expiryDate}</span>
                  </div>

                  <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
                    <div className="text-2xl font-bold">{specialOffer.price} د.ك</div>
                    <div className="text-lg text-white/70 line-through">{specialOffer.originalPrice} د.ك</div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      onClick={handleAddToCart}
                      disabled={isLoading}
                      className="bg-white text-blue-900 hover:bg-white/90 font-bold"
                      size="lg"
                    >
                      {isLoading ? (
                        "جاري الإضافة..."
                      ) : (
                        <>
                          <ShoppingBag className="mr-2 h-5 w-5" />
                          أضف إلى السلة
                        </>
                      )}
                    </Button>

                    <Link href="/offers" className="w-full sm:w-auto">
                      <Button
                        onClick={() => setIsOpen(false)}
                        variant="outline"
                        className="border-white/30 text-white hover:bg-white/10 hover:text-white w-full"
                        size="lg"
                      >
                        عرض جميع العروض
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
