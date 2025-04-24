"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const slides = [
  {
    id: 1,
    image: "/placeholder.svg?height=500&width=1200",
    title: "خصم اضافي 10 د.ك",
    subtitle: "على منتجات دايسون",
    description: "استمتع بأداء فائق مع أحدث منتجات دايسون",
    code: "APR10",
    bgColor: "from-blue-900 to-blue-800",
    textColor: "text-white",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=500&width=1200",
    title: "خصومات حتى 50%",
    subtitle: "على الأجهزة المنزلية",
    description: "اكتشف مجموعة واسعة من الأجهزة المنزلية بأفضل الأسعار",
    code: "HOME50",
    bgColor: "from-red-700 to-red-600",
    textColor: "text-white",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=500&width=1200",
    title: "عروض الهواتف",
    subtitle: "أحدث الموديلات بأفضل الأسعار",
    description: "اكتشف أحدث الهواتف الذكية بخصومات حصرية",
    code: "MOBILE25",
    bgColor: "from-green-700 to-green-600",
    textColor: "text-white",
  },
]

export default function MainSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextSlide = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }, [isAnimating])

  const prevSlide = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }, [isAnimating])

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 6000)

    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg">
      <div
        className="flex transition-transform duration-500 ease-in-out h-[300px] md:h-[400px] lg:h-[500px]"
        style={{ transform: `translateX(${currentSlide * -100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className={`min-w-full relative bg-gradient-to-r ${slide.bgColor}`}>
            <div className="container mx-auto px-4 h-full">
              <div className="flex flex-col md:flex-row items-center h-full">
                <div className="md:w-1/2 text-center md:text-right z-10 py-8 md:py-0">
                  <div className="animate-slideUp">
                    <div className="inline-block bg-yellow-400 text-blue-900 px-3 py-1 rounded-md mb-4 font-bold">
                      عرض حصري
                    </div>
                    <h2 className={`text-3xl md:text-5xl font-bold mb-2 ${slide.textColor}`}>{slide.title}</h2>
                    <p className={`text-xl md:text-2xl mb-2 ${slide.textColor}`}>{slide.subtitle}</p>
                    <p className={`text-sm md:text-base mb-4 ${slide.textColor} opacity-80`}>{slide.description}</p>
                    <div className="bg-red-600 inline-block px-4 py-2 rounded-md text-white font-bold text-xl mb-4">
                      {slide.code}
                    </div>
                    <div>
                      <Button size="lg" className="bg-white text-blue-900 hover:bg-white/90">
                        تسوق الآن
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 relative h-full flex items-center justify-center">
                  <Image
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    width={600}
                    height={400}
                    className="w-full h-auto max-h-full object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full z-10 shadow-md"
        onClick={prevSlide}
        disabled={isAnimating}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full z-10 shadow-md"
        onClick={nextSlide}
        disabled={isAnimating}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === currentSlide ? "bg-white w-6" : "bg-white/50",
            )}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true)
                setCurrentSlide(index)
                setTimeout(() => setIsAnimating(false), 500)
              }
            }}
          />
        ))}
      </div>
    </div>
  )
}
