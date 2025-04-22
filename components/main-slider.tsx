"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    image: "/placeholder.svg?height=400&width=1200",
    title: "خصم اضافي 10 د.ك",
    subtitle: "على منتجات دايسون",
    code: "APR10",
    bgColor: "bg-blue-900",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=400&width=1200",
    title: "خصومات حتى 50%",
    subtitle: "على الأجهزة المنزلية",
    code: "HOME50",
    bgColor: "bg-red-700",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=400&width=1200",
    title: "عروض الهواتف",
    subtitle: "أحدث الموديلات بأفضل الأسعار",
    code: "MOBILE25",
    bgColor: "bg-green-700",
  },
]

export default function MainSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${currentSlide * -100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className={`min-w-full relative ${slide.bgColor}`}>
              <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 text-white text-center md:text-right mb-6 md:mb-0">
                    <div className="inline-block bg-yellow-400 text-blue-900 px-3 py-1 rounded-md mb-4">إضافي فقط!</div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">{slide.title}</h2>
                    <p className="text-xl mb-4">{slide.subtitle}</p>
                    <div className="bg-red-600 inline-block px-4 py-2 rounded-md text-white font-bold text-xl">
                      {slide.code}
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <Image
                      src={slide.image || "/placeholder.svg"}
                      alt={slide.title}
                      width={600}
                      height={300}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}
