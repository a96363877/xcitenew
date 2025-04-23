"use client"

import { useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { CheckCircle, Package, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"

export default function CheckoutSuccessPage() {
  const router = useRouter()
  const { items } = useCart()

  // If there are no items and no order ID in the URL, redirect to home
  useEffect(() => {
    if (items.length === 0) {
      const timer = setTimeout(() => {
        router.push("/")
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [items.length, router])

  // Generate a random order number
  const orderNumber = Math.floor(10000000 + Math.random() * 90000000)

  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-md mx-auto">
        <div className="bg-green-100 rounded-full p-4 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
          <CheckCircle className="h-16 w-16 text-green-600" />
        </div>

        <h1 className="text-3xl font-bold mb-2">تم تأكيد طلبك بنجاح!</h1>
        <p className="text-gray-600 mb-6">شكراً لك على الطلب. سنقوم بإرسال تأكيد إلى بريدك الإلكتروني.</p>

        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="flex justify-between mb-4">
            <span className="font-medium">رقم الطلب:</span>
            <span className="font-bold">{orderNumber}</span>
          </div>

          <div className="flex justify-between mb-4">
            <span className="font-medium">حالة الطلب:</span>
            <span className="text-green-600 font-medium">تم التأكيد</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium">موعد التسليم المتوقع:</span>
            <span>خلال 2-3 أيام عمل</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/orders">
            <Button variant="outline" className="flex items-center">
              <Package className="h-4 w-4 ml-2" />
              تتبع طلبك
            </Button>
          </Link>

          <Link href="/">
            <Button className="flex items-center">
              <Home className="h-4 w-4 ml-2" />
              العودة للرئيسية
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
