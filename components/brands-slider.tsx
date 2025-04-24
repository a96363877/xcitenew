"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const brands = [
  { id: 1, name: "Apple", logo: "/placeholder.svg?height=80&width=120" },
  { id: 2, name: "Samsung", logo: "/placeholder.svg?height=80&width=120" },
  { id: 3, name: "Sony", logo: "/placeholder.svg?height=80&width=120" },
  { id: 4, name: "LG", logo: "/placeholder.svg?height=80&width=120" },
  { id: 5, name: "Dyson", logo: "/placeholder.svg?height=80&width=120" },
  { id: 6, name: "Philips", logo: "/placeholder.svg?height=80&width=120" },
  { id: 7, name: "Huawei", logo: "/placeholder.svg?height=80&width=120" },
  { id: 8, name: "Dell", logo: "/placeholder.svg?height=80&width=120" },
]

export default function BrandsSlider() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    const container = containerRef.current
    if (!container) return

    const scrollAmount = 200
    const newPosition = direction === "left" ? scrollPosition - scrollAmount : scrollPosition + scrollAmount

    container.scrollTo({
      left: newPosition,
      behavior: "smooth",
    })

    setScrollPosition(newPosition)
  }

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="flex overflow-x-auto scrollbar-hide py-4 px-2 -mx-2 scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {brands.map((brand) => (
          <div key={brand.id} className="flex-shrink-0 w-40 mx-4">
            <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 h-32 flex items-center justify-center">
              <Image
                src={brand.logo || "/placeholder.svg"}
                alt={brand.name}
                width={120}
                height={80}
                className="max-h-20 w-auto object-contain"
              />
            </div>
            <p className="text-center mt-2 font-medium">{brand.name}</p>
          </div>
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white shadow-md rounded-full z-10"
        onClick={() => scroll("left")}
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-white shadow-md rounded-full z-10"
        onClick={() => scroll("right")}
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
    </div>
  )
}
