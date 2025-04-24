"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    name: "أحمد محمد",
    avatar: "/placeholder.svg?height=100&width=100",
    role: "مهندس برمجيات",
    content:
      "تجربة تسوق رائعة! المنتجات أصلية وذات جودة عالية، والتوصيل كان سريعاً جداً. سأعود للتسوق مرة أخرى بالتأكيد.",
    rating: 5,
  },
  {
    id: 2,
    name: "سارة علي",
    avatar: "/placeholder.svg?height=100&width=100",
    role: "مصممة جرافيك",
    content:
      "أنا زبونة دائمة في اكسايت. أسعارهم تنافسية والعروض دائماً مميزة. خدمة العملاء ممتازة ويستجيبون بسرعة لأي استفسار.",
    rating: 4,
  },
  {
    id: 3,
    name: "محمد عبدالله",
    avatar: "/placeholder.svg?height=100&width=100",
    role: "طبيب",
    content: "اشتريت لابتوب جديد وكانت التجربة سلسة من البداية للنهاية. المنتج وصل بحالة ممتازة والتغليف كان آمناً جداً.",
    rating: 5,
  },
  {
    id: 4,
    name: "فاطمة حسين",
    avatar: "/placeholder.svg?height=100&width=100",
    role: "معلمة",
    content: "أفضل موقع للتسوق الإلكتروني في الكويت. مجموعة واسعة من المنتجات وأسعار معقولة. أنصح به بشدة!",
    rating: 5,
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <div className="relative">
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={cn(
                "transition-all duration-500 absolute inset-0",
                activeIndex === index ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none",
              )}
            >
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8 relative">
                <div className="absolute top-6 right-8 text-blue-100">
                  <Quote className="h-24 w-24 rotate-180" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="relative h-16 w-16 rounded-full overflow-hidden border-4 border-white shadow-md">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="mr-4">
                      <h3 className="font-bold text-lg">{testimonial.name}</h3>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                    <div className="flex ml-auto">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "h-5 w-5",
                            i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300",
                          )}
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-700 text-lg leading-relaxed">{testimonial.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 space-x-2 space-x-reverse">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                activeIndex === index ? "bg-blue-600 w-6" : "bg-gray-300",
              )}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full z-10"
        onClick={prevTestimonial}
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full z-10"
        onClick={nextTestimonial}
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
    </div>
  )
}
