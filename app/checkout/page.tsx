"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, CreditCard, Landmark, Wallet, Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart()
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [shippingInfo, setShippingInfo] = useState({
    fullName: "",
    address: "",
    city: "",
    phone: "",
    email: "",
  })

  // If cart is empty, redirect to home
  useEffect(() => {
    if (items.length === 0) {
      router.push("/")
    }
  }, [items.length, router])

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission delay
    setTimeout(() => {
      setIsLoading(false)
      setStep(2)
    }, 1000)
  }

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false)
      // Redirect to success page
      router.push("/checkout/success")
      // Clear cart after successful checkout
      clearCart()
    }, 1500)
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto">
          <ShoppingCart className="h-16 w-16 mx-auto mb-4 text-gray-400" />
          <h1 className="text-2xl font-bold mb-2">سلة التسوق فارغة</h1>
          <p className="text-gray-600 mb-6">لم تقم بإضافة أي منتجات إلى سلة التسوق بعد.</p>
          <Link href="/offers">
            <Button>تصفح العروض</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">إتمام الطلب</h1>
        <p className="text-gray-600">أنت على بعد خطوات قليلة من إتمام طلبك</p>
      </div>

      <div className="flex justify-center mb-8">
        <div className="flex items-center">
          <div
            className={`rounded-full h-10 w-10 flex items-center justify-center ${step >= 1 ? "bg-blue-900 text-white" : "bg-gray-200 text-gray-600"}`}
          >
            1
          </div>
          <div className={`h-1 w-16 ${step >= 2 ? "bg-blue-900" : "bg-gray-200"}`}></div>
          <div
            className={`rounded-full h-10 w-10 flex items-center justify-center ${step >= 2 ? "bg-blue-900 text-white" : "bg-gray-200 text-gray-600"}`}
          >
            2
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {step === 1 && (
            <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
              <h2 className="text-xl font-bold mb-6">معلومات الشحن</h2>

              <form onSubmit={handleShippingSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <Label htmlFor="fullName">الاسم الكامل</Label>
                    <Input
                      id="fullName"
                      value={shippingInfo.fullName}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, fullName: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">رقم الهاتف</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={shippingInfo.phone}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">البريد الإلكتروني</Label>
                    <Input
                      id="email"
                      type="email"
                      value={shippingInfo.email}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="city">المدينة</Label>
                    <Input
                      id="city"
                      value={shippingInfo.city}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="address">العنوان</Label>
                    <Input
                      id="address"
                      value={shippingInfo.address}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold">طريقة الشحن</h3>
                  <RadioGroup defaultValue="standard" className="space-y-3">
                    <div className="flex items-start p-3 border rounded-lg">
                      <RadioGroupItem value="standard" id="standard-shipping" className="mt-1 ml-2" />
                      <Label htmlFor="standard-shipping" className="flex-1">
                        <div className="font-medium">التوصيل القياسي</div>
                        <div className="text-sm text-gray-600">2-3 أيام عمل</div>
                        <div className="text-sm font-medium text-green-600 mt-1">مجاناً للطلبات فوق 20 د.ك</div>
                      </Label>
                      <div className="font-bold">2.000 د.ك</div>
                    </div>

                    <div className="flex items-start p-3 border rounded-lg">
                      <RadioGroupItem value="express" id="express-shipping" className="mt-1 ml-2" />
                      <Label htmlFor="express-shipping" className="flex-1">
                        <div className="font-medium">التوصيل السريع</div>
                        <div className="text-sm text-gray-600">خلال 24 ساعة</div>
                      </Label>
                      <div className="font-bold">5.000 د.ك</div>
                    </div>
                  </RadioGroup>
                </div>

                <div className="mt-8">
                  <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                    {isLoading ? "جاري المعالجة..." : "متابعة إلى الدفع"}
                  </Button>
                </div>
              </form>
            </div>
          )}

          {step === 2 && (
            <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
              <h2 className="text-xl font-bold mb-6">طريقة الدفع</h2>

              <form onSubmit={handlePaymentSubmit}>
                <div className="mb-6">
                  <RadioGroup
                    defaultValue="card"
                    value={paymentMethod}
                    onValueChange={setPaymentMethod}
                    className="space-y-3"
                  >
                    <div className="flex items-center p-3 border rounded-lg">
                      <RadioGroupItem value="card" id="payment-card" className="ml-2" />
                      <Label htmlFor="payment-card" className="flex items-center">
                        <CreditCard className="h-5 w-5 ml-2" />
                        <span>بطاقة ائتمان</span>
                      </Label>
                    </div>

                    <div className="flex items-center p-3 border rounded-lg">
                      <RadioGroupItem value="bank" id="payment-bank" className="ml-2" />
                      <Label htmlFor="payment-bank" className="flex items-center">
                        <Landmark className="h-5 w-5 ml-2" />
                        <span>تحويل بنكي</span>
                      </Label>
                    </div>

                    <div className="flex items-center p-3 border rounded-lg">
                      <RadioGroupItem value="cash" id="payment-cash" className="ml-2" />
                      <Label htmlFor="payment-cash" className="flex items-center">
                        <Wallet className="h-5 w-5 ml-2" />
                        <span>الدفع عند الاستلام</span>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="mb-6">
                  {paymentMethod === "card" && (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="card-number">رقم البطاقة</Label>
                        <Input id="card-number" placeholder="0000 0000 0000 0000" required />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiry">تاريخ الانتهاء</Label>
                          <Input id="expiry" placeholder="MM/YY" required />
                        </div>
                        <div>
                          <Label htmlFor="cvv">رمز الأمان (CVV)</Label>
                          <Input id="cvv" placeholder="123" required />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="card-name">الاسم على البطاقة</Label>
                        <Input id="card-name" required />
                      </div>
                    </div>
                  )}

                  {paymentMethod === "bank" && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-bold mb-2">تفاصيل الحساب البنكي:</h4>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <span className="font-medium">اسم البنك:</span> بنك الكويت الوطني
                        </li>
                        <li>
                          <span className="font-medium">اسم الحساب:</span> شركة اكسايت للإلكترونيات
                        </li>
                        <li>
                          <span className="font-medium">رقم الحساب:</span> 1234567890
                        </li>
                        <li>
                          <span className="font-medium">IBAN:</span> KW81NBOK0000000000001234567890
                        </li>
                      </ul>
                      <p className="mt-4 text-sm">
                        بعد إتمام التحويل، يرجى إرسال إيصال التحويل إلى البريد الإلكتروني: payments@xcite.com
                      </p>
                    </div>
                  )}

                  {paymentMethod === "cash" && (
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                      <h4 className="font-bold mb-2">ملاحظات هامة:</h4>
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>يرجى تجهيز المبلغ المطلوب بالضبط عند الاستلام</li>
                        <li>قد تكون هناك رسوم إضافية للدفع عند الاستلام (2 د.ك)</li>
                        <li>غير متاح للمنتجات الكبيرة أو الثقيلة</li>
                      </ul>
                    </div>
                  )}
                </div>

                <div className="flex justify-between mt-8">
                  <Button type="button" variant="outline" onClick={() => setStep(1)} className="flex items-center">
                    <ArrowRight className="h-4 w-4 ml-2" />
                    العودة
                  </Button>
                  <Button type="submit" className="min-w-[150px]" disabled={isLoading}>
                    {isLoading ? "جاري المعالجة..." : "إتمام الطلب"}
                  </Button>
                </div>
              </form>
            </div>
          )}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-20">
            <h2 className="text-xl font-bold mb-4">ملخص الطلب</h2>

            <div className="space-y-4 mb-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3 py-2 border-b last:border-0">
                  <div className="w-16 h-16 flex-shrink-0">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-sm">{item.name}</h3>
                    <div className="flex items-center mt-1">
                      <span className="text-sm">
                        {item.quantity} x {item.price} د.ك
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Separator className="my-4" />

            <div className="space-y-3 mb-4">
              <div className="flex justify-between">
                <span>المجموع الفرعي</span>
                <span>{subtotal.toFixed(2)} د.ك</span>
              </div>
              <div className="flex justify-between">
                <span>رسوم الشحن</span>
                <span>2.000 د.ك</span>
              </div>
              {paymentMethod === "cash" && (
                <div className="flex justify-between">
                  <span>رسوم الدفع عند الاستلام</span>
                  <span>2.000 د.ك</span>
                </div>
              )}
              <Separator className="my-2" />
              <div className="flex justify-between font-bold text-lg">
                <span>الإجمالي</span>
                <span>{(subtotal + 2 + (paymentMethod === "cash" ? 2 : 0)).toFixed(2)} د.ك</span>
              </div>
            </div>

            {step === 2 && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 mt-4">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 ml-2 mt-0.5" />
                  <div>
                    <p className="font-medium text-green-800">معلومات الشحن</p>
                    <p className="text-sm text-gray-700 mt-1">{shippingInfo.fullName}</p>
                    <p className="text-sm text-gray-700">
                      {shippingInfo.address}, {shippingInfo.city}
                    </p>
                    <p className="text-sm text-gray-700">{shippingInfo.phone}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
