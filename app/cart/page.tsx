"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Trash2, ShoppingCart, ChevronLeft, Minus, Plus, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/components/ui/use-toast"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, subtotal } = useCart()
  const { toast } = useToast()
  const router = useRouter()
  const [isUpdating, setIsUpdating] = useState<Record<string, boolean>>({})

  // Calculate shipping cost
  const shippingCost = subtotal > 20 ? 0 : 2
  const total = subtotal + shippingCost

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return

    setIsUpdating((prev) => ({ ...prev, [id]: true }))

    // Simulate a slight delay for better UX
    setTimeout(() => {
      updateQuantity(id, newQuantity)
      setIsUpdating((prev) => ({ ...prev, [id]: false }))
    }, 300)
  }

  const handleRemoveItem = (id: string, name: string) => {
    removeItem(id)
    toast({
      title: "تمت إزالة المنتج",
      description: `تم إزالة "${name}" من سلة التسوق`,
    })
  }

  const handleClearCart = () => {
    clearCart()
    toast({
      title: "تم تفريغ السلة",
      description: "تم إزالة جميع المنتجات من سلة التسوق",
    })
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto">
          <ShoppingCart className="h-16 w-16 mx-auto mb-4 text-gray-400" />
          <h1 className="text-2xl font-bold mb-2">سلة التسوق فارغة</h1>
          <p className="text-gray-600 mb-6">لم تقم بإضافة أي منتجات إلى سلة التسوق بعد.</p>
          <Link href="/offers">
            <Button className="mx-auto">تصفح العروض</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">سلة التسوق</h1>
        <span className="text-gray-500">{items.length} منتج</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
            <div className="p-4 bg-gray-50 border-b flex justify-between items-center">
              <h2 className="font-bold">المنتجات</h2>
              <Button variant="ghost" size="sm" onClick={handleClearCart} className="text-red-600 h-8">
                <Trash2 className="h-4 w-4 mr-1" />
                تفريغ السلة
              </Button>
            </div>

            <div className="divide-y">
              {items.map((item) => (
                <div key={item.id} className="p-4">
                  <div className="flex gap-4">
                    <div className="w-20 h-20 flex-shrink-0">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-medium">{item.name}</h3>
                        <div className="text-right">
                          <div className="font-bold text-blue-900">{(item.price * item.quantity).toFixed(2)} د.ك</div>
                          {item.originalPrice && (
                            <div className="text-sm text-gray-500 line-through">
                              {(item.originalPrice * item.quantity).toFixed(2)} د.ك
                            </div>
                          )}
                        </div>
                      </div>

                      {item.code && (
                        <div className="text-sm text-blue-900 mt-1">
                          كود الخصم: <span className="font-bold">{item.code}</span>
                        </div>
                      )}

                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center border rounded-md">
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                            disabled={isUpdating[item.id]}
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <div className="w-10 text-center relative">
                            {isUpdating[item.id] ? (
                              <RefreshCw className="h-4 w-4 mx-auto animate-spin" />
                            ) : (
                              <span>{item.quantity}</span>
                            )}
                          </div>
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                            disabled={isUpdating[item.id]}
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => handleRemoveItem(item.id, item.name)}
                          className="text-red-600 text-sm flex items-center"
                        >
                          <Trash2 className="h-4 w-4 mr-1" />
                          إزالة
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <Link href="/offers">
              <Button variant="outline" className="flex items-center">
                <ChevronLeft className="h-4 w-4 mr-2" />
                متابعة التسوق
              </Button>
            </Link>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-20">
            <h2 className="text-xl font-bold mb-4">ملخص الطلب</h2>

            <div className="space-y-3 mb-4">
              <div className="flex justify-between">
                <span>المجموع الفرعي</span>
                <span>{subtotal.toFixed(2)} د.ك</span>
              </div>
              <div className="flex justify-between">
                <span>رسوم الشحن</span>
                {shippingCost === 0 ? (
                  <span className="text-green-600">مجاناً</span>
                ) : (
                  <span>{shippingCost.toFixed(2)} د.ك</span>
                )}
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between font-bold text-lg">
                <span>الإجمالي</span>
                <span>{total.toFixed(2)} د.ك</span>
              </div>
            </div>

            {shippingCost === 0 && (
              <Alert className="bg-green-50 border-green-200 text-green-800 mb-4">
                <AlertDescription>تهانينا! لقد حصلت على شحن مجاني لأن طلبك تجاوز 20 د.ك</AlertDescription>
              </Alert>
            )}

            {shippingCost > 0 && (
              <Alert className="bg-blue-50 border-blue-200 text-blue-800 mb-4">
                <AlertDescription>أضف {(20 - subtotal).toFixed(2)} د.ك أخرى للحصول على شحن مجاني</AlertDescription>
              </Alert>
            )}

            <Button className="w-full mb-4" size="lg" onClick={() => router.push("/shipping")}>
              متابعة إلى الشحن
            </Button>

            <div className="text-center text-sm text-gray-500">
              بالضغط على "متابعة إلى الشحن"، أنت توافق على{" "}
              <Link href="/terms" className="text-blue-900 hover:underline">
                الشروط والأحكام
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
