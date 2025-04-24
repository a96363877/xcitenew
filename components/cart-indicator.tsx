"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function CartIndicator() {
  const { totalItems } = useCart()
  const [isAnimating, setIsAnimating] = useState(false)
  const [prevTotalItems, setPrevTotalItems] = useState(totalItems)

  // Animate when items are added to cart
  useEffect(() => {
    if (totalItems > prevTotalItems) {
      setIsAnimating(true)
      const timer = setTimeout(() => setIsAnimating(false), 500)
      return () => clearTimeout(timer)
    }
    setPrevTotalItems(totalItems)
  }, [totalItems, prevTotalItems])

  return (
    <Link href={'/cart'}>
    <Button variant="ghost" size="icon" className="relative">
      <ShoppingCart className={cn("h-5 w-5", isAnimating && "text-blue-600")} />
      {totalItems > 0 && (
        <Badge
          className={cn(
            "absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-red-600 text-white transition-transform duration-300",
            isAnimating && "animate-[ping_0.5s_ease-in-out]",
          )}
        >
          {totalItems}
        </Badge>
      )}
    </Button>
    </Link>
  )
}
