"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, CreditCard, Check, ArrowRight, Shield, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useToast } from "@/components/ui/use-toast"

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart()
  const router = useRouter()
  const { toast } = useToast()
  const [step, setStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [isApplePayAvailable, setIsApplePayAvailable] = useState(false)
  const [shippingInfo, setShippingInfo] = useState({
    fullName: "",
    address: "",
    city: "",
    phone: "",
    email: "",
  })

  // Check if Apple Pay is available
  useEffect(() => {
    // This is a simple check - in a real app, you'd use the Apple Pay JS API
    const checkApplePayAvailability = () => {
      // Check if we're on a device that might support Apple Pay
      const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      const isAppleDevice = /iPhone|iPad|iPod|Mac/.test(navigator.userAgent)

      setIsApplePayAvailable(isSafari && isAppleDevice)
    }

    checkApplePayAvailability()
  }, [])

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

    // Handle different payment methods
    if (paymentMethod === "knet") {
      // Redirect to KNET payment gateway
      toast({
        title: "جاري التحويل إلى بوابة الدفع KNET",
        description: "سيتم تحويلك إلى صفحة الدفع KNET لإتمام عملية الدفع",
      })

      // Simulate redirect delay
      setTimeout(() => {
        // In a real app, you would redirect to the actual KNET payment URL
        window.location.href = "/knet-payment-gateway"
      }, 1500)
      return
    }

    if (paymentMethod === "apple" && !isApplePayAvailable) {
      setIsLoading(false)
      toast({
        title: "خطأ في الدفع",
        description: "خدمة Apple Pay غير متوفرة على هذا الجهاز. يرجى اختيار طريقة دفع أخرى.",
        variant: "destructive",
      })
      return
    }

    // For credit card and available Apple Pay, proceed normally
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
                      <div className="flex ml-auto gap-2">
                        <Image
                          src="/visa.svg"
                          alt="Visa"
                          width={36}
                          height={24}
                          className="h-6 w-auto"
                        />
                        <Image
                          src="/master.svg"
                          alt="Mastercard"
                          width={36}
                          height={24}
                          className="h-6 w-auto"
                        />
                        <Image
                          src="/amex.svg"
                          alt="Amex"
                          width={36}
                          height={24}
                          className="h-6 w-auto"
                        />
                      </div>
                    </div>

                    <div className="flex items-center p-3 border rounded-lg">
                      <RadioGroupItem value="knet" id="payment-knet" className="ml-2" />
                      <Label htmlFor="payment-knet" className="flex items-center">
                        <img
                          src="/knet.png"
                          alt="KNET"
                          width={36}
                          height={24}
                          className="h-6 w-auto ml-2"
                        />
                        <span>كي نت (KNET)</span>
                      </Label>
                    </div>

                    <div className="flex items-center p-3 border rounded-lg">
                      <RadioGroupItem value="apple" id="payment-apple" className="ml-2" />
                      <Label htmlFor="payment-apple" className="flex items-center">
                        <Image
                          src="/applepay.svg"
                          alt="Apple Pay"
                          width={36}
                          height={24}
                          className="h-6 w-auto ml-2"
                        />
                        <span>ابل باي (Apple Pay)</span>
                      </Label>
                      {!isApplePayAvailable && (
                        <div className="ml-auto">
                          <span className="text-amber-600 text-sm flex items-center">
                            <AlertTriangle className="h-4 w-4 ml-1" />
                            غير متوفر على هذا الجهاز
                          </span>
                        </div>
                      )}
                    </div>
                  </RadioGroup>
                </div>

                {paymentMethod === "card" && (
                  <div className="space-y-4 mb-6">
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
                    <div className="flex items-center text-green-600 mt-2">
                      <Shield className="h-4 w-4 ml-1" />
                      <span className="text-sm">جميع المعاملات مؤمنة ومشفرة</span>
                    </div>
                  </div>
                )}

                {paymentMethod === "knet" && (
                  <Alert className="bg-blue-50 border-blue-200 text-blue-800 mb-6">
                    <AlertDescription>سيتم تحويلك إلى بوابة الدفع KNET لإتمام عملية الدفع بشكل آمن.</AlertDescription>
                  </Alert>
                )}

                {paymentMethod === "apple" && (
                  <>
                    {isApplePayAvailable ? (
                      <div className="text-center mb-6">
                        <Button className="w-full bg-black hover:bg-gray-800 text-white h-12">
                          <Image
                            src="/placeholder.svg?height=24&width=60"
                            alt="Apple Pay"
                            width={60}
                            height={24}
                            className="h-6 w-auto"
                          />
                        </Button>
                        <p className="text-sm text-gray-600 mt-2">سيتم تأكيد الدفع باستخدام بصمة الإصبع أو Face ID</p>
                      </div>
                    ) : (
                      <Alert className="bg-amber-50 border-amber-200 text-amber-800 mb-6">
                        <AlertDescription>
                          خدمة Apple Pay غير متوفرة على هذا الجهاز. يرجى اختيار طريقة دفع أخرى.
                        </AlertDescription>
                      </Alert>
                    )}
                  </>
                )}

                <div className="flex justify-between mt-8">
                  <Button type="button" variant="outline" onClick={() => setStep(1)} className="flex items-center">
                    <ArrowRight className="h-4 w-4 ml-2" />
                    العودة
                  </Button>
                  <Button
                    type="submit"
                    className="min-w-[150px]"
                    disabled={isLoading || (paymentMethod === "apple" && !isApplePayAvailable)}
                  >
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
                    <img
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
              <Separator className="my-2" />
              <div className="flex justify-between font-bold text-lg">
                <span>الإجمالي</span>
                <span>{(subtotal + 2).toFixed(2)} د.ك</span>
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
