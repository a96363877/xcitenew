"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingCart, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { useToast } from "@/components/ui/use-toast"

const featuredProducts = [
  {
    id: "1",
    name: "iPhone 16 Pro Max",
    image: "/placeholder.svg?height=300&width=300",
    price: 499.9,
    originalPrice: 549.9,
    rating: 4.8,
    reviewCount: 245,
    category: "mobiles",
  },
  {
    id: "2",
    name: "سماعات سوني اللاسلكية",
    image: "/placeholder.svg?height=300&width=300",
    price: 89.9,
    originalPrice: 119.9,
    rating: 4.5,
    reviewCount: 187,
    category: "accessories",
  },
  {
    id: "3",
    name: "لابتوب ماك بوك برو",
    image: "/placeholder.svg?height=300&width=300",
    price: 799.9,
    originalPrice: 899.9,
    rating: 4.9,
    reviewCount: 320,
    category: "computers",
  },
  {
    id: "4",
    name: "ساعة أبل الذكية",
    image: "/placeholder.svg?height=300&width=300",
    price: 199.9,
    originalPrice: 229.9,
    rating: 4.7,
    reviewCount: 156,
    category: "accessories",
  },
  {
    id: "5",
    name: "سماعات ايربودز برو",
    image: "/placeholder.svg?height=300&width=300",
    price: 129.9,
    originalPrice: 149.9,
    rating: 4.6,
    reviewCount: 210,
    category: "accessories",
  },
  {
    id: "6",
    name: "تلفزيون سامسونج QLED",
    image: "/placeholder.svg?height=300&width=300",
    price: 699.9,
    originalPrice: 799.9,
    rating: 4.8,
    reviewCount: 178,
    category: "electronics",
  },
]

export default function FeaturedProducts() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { addItem } = useCart()
  const { toast } = useToast()
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({})

  const productsPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 4,
  }

  const getVisibleProducts = () => {
    // Responsive logic for different screen sizes
    const isMobile = window.innerWidth < 640
    const isTablet = window.innerWidth >= 640 && window.innerWidth < 1024

    const count = isMobile ? productsPerView.mobile : isTablet ? productsPerView.tablet : productsPerView.desktop

    return featuredProducts.slice(currentIndex, currentIndex + count)
  }

  const nextSlide = () => {
    const isMobile = window.innerWidth < 640
    const isTablet = window.innerWidth >= 640 && window.innerWidth < 1024

    const count = isMobile ? productsPerView.mobile : isTablet ? productsPerView.tablet : productsPerView.desktop

    setCurrentIndex((prev) => (prev + count >= featuredProducts.length ? 0 : prev + 1))
  }

  const prevSlide = () => {
    const isMobile = window.innerWidth < 640
    const isTablet = window.innerWidth >= 640 && window.innerWidth < 1024

    const count = isMobile ? productsPerView.mobile : isTablet ? productsPerView.tablet : productsPerView.desktop

    setCurrentIndex((prev) => (prev === 0 ? featuredProducts.length - count : prev - 1))
  }

  const handleAddToCart = (product) => {
    setLoadingStates((prev) => ({ ...prev, [product.id]: true }))

    setTimeout(() => {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.image,
        originalPrice: product.originalPrice,
      })

      toast({
        title: "تمت الإضافة إلى السلة",
        description: `تم إضافة "${product.name}" إلى سلة التسوق`,
      })

      setLoadingStates((prev) => ({ ...prev, [product.id]: false }))
    }, 500)
  }

  return (
    <div className="relative">
      <div className="flex overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${-currentIndex * (100 / productsPerView.desktop)}%)` }}
        >
          {featuredProducts.map((product) => (
            <div key={product.id} className="w-full sm:w-1/2 lg:w-1/4 flex-shrink-0 p-3">
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 h-full product-card">
                <div className="relative mb-4 group">
                  <Link href={`/product/${product.id}`}>
                    <div className="aspect-square relative overflow-hidden rounded-md">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>
                  <button className="absolute top-2 right-2 p-1.5 bg-white/80 backdrop-blur-sm rounded-full opacity-70 hover:opacity-100 transition-opacity">
                    <Heart className="h-5 w-5 text-gray-600" />
                  </button>
                  {product.originalPrice > product.price && (
                    <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% خصم
                    </div>
                  )}
                </div>

                <Link href={`/product/${product.id}`} className="block">
                  <h3 className="font-medium text-lg mb-1 line-clamp-2 h-14">{product.name}</h3>
                </Link>

                <div className="flex items-center mb-2">
                  <div className="flex items-center text-amber-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="ml-1 text-sm font-medium">{product.rating}</span>
                  </div>
                  <span className="mx-2 text-gray-300">|</span>
                  <span className="text-sm text-gray-600">{product.reviewCount} تقييم</span>
                </div>

                <div className="flex items-center mb-4">
                  <span className="font-bold text-lg">{product.price} د.ك</span>
                  {product.originalPrice > product.price && (
                    <span className="text-gray-500 line-through mr-2 text-sm">{product.originalPrice} د.ك</span>
                  )}
                </div>

                <Button
                  onClick={() => handleAddToCart(product)}
                  className="w-full"
                  disabled={loadingStates[product.id]}
                >
                  {loadingStates[product.id] ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      جاري الإضافة...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <ShoppingCart className="h-4 w-4 ml-2" />
                      أضف إلى السلة
                    </span>
                  )}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white shadow-md rounded-full z-10"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-white shadow-md rounded-full z-10"
        onClick={nextSlide}
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
    </div>
  )
}
