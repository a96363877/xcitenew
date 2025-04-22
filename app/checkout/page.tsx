"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, CreditCard, Landmark, Wallet, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { useRouter } from "next/navigation"

const cartItems = [
  {
    id: 1,
    name: "سماعات لاسلكية Sony WH-1000XM4",
    price: 89.99,
    quantity: 1,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "هاتف iPhone 13 Pro - 256GB",
    price: 349.99,
    quantity: 1,
    image: "/placeholder.svg?height=80&width=80",
  },
]

export default function CheckoutPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [paymentMethod, setPaymentMethod] = useState("credit-card")

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = 5.0
  const discount = 10.0
  const total = subtotal + shipping - discount

  const handleContinue = () => {
    if (step === 1) {
      setStep(2)
      window.scrollTo(0, 0)
    } else if (step === 2) {
      router.push(`/checkout/payment?method=${paymentMethod}`)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-6">
        <Link href="/" className="text-blue-900 hover:underline flex items-center">
          <ChevronRight className="h-4 w-4 ml-1" />
          الرئيسية
        </Link>
        <span className="mx-2">/</span>
        <Link href="/cart" className="text-blue-900 hover:underline">
          سلة التسوق
        </Link>
        <span className="mx-2">/</span>
        <span className="font-medium">إتمام الطلب</span>
      </div>

      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">إتمام الطلب</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
            <div className="flex items-center mb-4">
              <div className="bg-blue-900 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <h2 className="text-xl font-bold mr-3">معلومات الشحن</h2>
            </div>

            {step === 1 ? (
              <div className="grid gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">الاسم الأول</Label>
                    <Input id="firstName" placeholder="الاسم الأول" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">الاسم الأخير</Label>
                    <Input id="lastName" placeholder="الاسم الأخير" className="mt-1" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">البريد الإلكتروني</Label>
                  <Input id="email" type="email" placeholder="البريد الإلكتروني" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="phone">رقم الهاتف</Label>
                  <Input id="phone" placeholder="رقم الهاتف" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="address">العنوان</Label>
                  <Input id="address" placeholder="العنوان" className="mt-1" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city">المدينة</Label>
                    <Input id="city" placeholder="المدينة" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="area">المنطقة</Label>
                    <Input id="area" placeholder="المنطقة" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="block">القطعة</Label>
                    <Input id="block" placeholder="القطعة" className="mt-1" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="street">الشارع</Label>
                    <Input id="street" placeholder="الشارع" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="house">المنزل</Label>
                    <Input id="house" placeholder="المنزل" className="mt-1" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="notes">ملاحظات إضافية (اختياري)</Label>
                  <Input id="notes" placeholder="ملاحظات إضافية" className="mt-1" />
                </div>
              </div>
            ) : (
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">محمد أحمد</p>
                    <p className="text-sm text-gray-600">mohamed@example.com</p>
                    <p className="text-sm text-gray-600">+965 9876 5432</p>
                    <p className="text-sm text-gray-600">منطقة حولي، قطعة 5، شارع 10، منزل 15</p>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => setStep(1)}>
                    تعديل
                  </Button>
                </div>
              </div>
            )}
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center mb-4">
              <div
                className={`${
                  step >= 2 ? "bg-blue-900 text-white" : "bg-gray-200 text-gray-500"
                } w-8 h-8 rounded-full flex items-center justify-center font-bold`}
              >
                2
              </div>
              <h2 className="text-xl font-bold mr-3">طريقة الدفع</h2>
            </div>

            {step === 2 && (
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="grid gap-4">
                <div
                  className={`border rounded-lg p-4 ${paymentMethod === "credit-card" ? "border-blue-900 bg-blue-50" : ""}`}
                >
                  <div className="flex items-start">
                    <RadioGroupItem id="credit-card" value="credit-card" className="mt-1" />
                    <Label htmlFor="credit-card" className="flex flex-col mr-3 cursor-pointer">
                      <div className="flex items-center">
                        <CreditCard className="h-5 w-5 ml-2 text-blue-900" />
                        <span className="font-medium">بطاقة ائتمان</span>
                      </div>
                      <span className="text-sm text-gray-600 mt-1">Visa, Mastercard, American Express</span>
                    </Label>
                    <div className="flex gap-2 mr-auto">
                      <Image
                        src="/placeholder.svg?height=30&width=40"
                        alt="Visa"
                        width={40}
                        height={30}
                        className="h-6 w-auto"
                      />
                      <Image
                        src="/placeholder.svg?height=30&width=40"
                        alt="Mastercard"
                        width={40}
                        height={30}
                        className="h-6 w-auto"
                      />
                      <Image
                        src="/placeholder.svg?height=30&width=40"
                        alt="Amex"
                        width={40}
                        height={30}
                        className="h-6 w-auto"
                      />
                    </div>
                  </div>
                </div>

                <div
                  className={`border rounded-lg p-4 ${paymentMethod === "knet" ? "border-blue-900 bg-blue-50" : ""}`}
                >
                  <div className="flex items-start">
                    <RadioGroupItem id="knet" value="knet" className="mt-1" />
                    <Label htmlFor="knet" className="flex flex-col mr-3 cursor-pointer">
                      <div className="flex items-center">
                        <Image
                          src="/placeholder.svg?height=30&width=40"
                          alt="KNET"
                          width={40}
                          height={30}
                          className="h-5 w-auto ml-2"
                        />
                        <span className="font-medium">كي نت</span>
                      </div>
                      <span className="text-sm text-gray-600 mt-1">الدفع المباشر عبر البطاقة المصرفية</span>
                    </Label>
                  </div>
                </div>

                <div
                  className={`border rounded-lg p-4 ${paymentMethod === "bank-transfer" ? "border-blue-900 bg-blue-50" : ""}`}
                >
                  <div className="flex items-start">
                    <RadioGroupItem id="bank-transfer" value="bank-transfer" className="mt-1" />
                    <Label htmlFor="bank-transfer" className="flex flex-col mr-3 cursor-pointer">
                      <div className="flex items-center">
                        <Landmark className="h-5 w-5 ml-2 text-blue-900" />
                        <span className="font-medium">تحويل بنكي</span>
                      </div>
                      <span className="text-sm text-gray-600 mt-1">التحويل المباشر إلى حسابنا البنكي</span>
                    </Label>
                  </div>
                </div>

                <div
                  className={`border rounded-lg p-4 ${paymentMethod === "cash-on-delivery" ? "border-blue-900 bg-blue-50" : ""}`}
                >
                  <div className="flex items-start">
                    <RadioGroupItem id="cash-on-delivery" value="cash-on-delivery" className="mt-1" />
                    <Label htmlFor="cash-on-delivery" className="flex flex-col mr-3 cursor-pointer">
                      <div className="flex items-center">
                        <Wallet className="h-5 w-5 ml-2 text-blue-900" />
                        <span className="font-medium">الدفع عند الاستلام</span>
                      </div>
                      <span className="text-sm text-gray-600 mt-1">الدفع نقداً عند استلام الطلب</span>
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            )}
          </div>
        </div>

        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-20">
            <h2 className="text-xl font-bold mb-4">ملخص الطلب</h2>

            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-md w-20 h-20 object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-600">الكمية: {item.quantity}</p>
                    <p className="font-bold">{item.price.toFixed(2)} د.ك</p>
                  </div>
                </div>
              ))}
            </div>

            <Separator className="my-4" />

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>المجموع الفرعي</span>
                <span>{subtotal.toFixed(2)} د.ك</span>
              </div>
              <div className="flex justify-between">
                <span>رسوم الشحن</span>
                <span>{shipping.toFixed(2)} د.ك</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>الخصم</span>
                <span>- {discount.toFixed(2)} د.ك</span>
              </div>
            </div>

            <Separator className="my-4" />

            <div className="flex justify-between font-bold text-lg mb-6">
              <span>الإجمالي</span>
              <span>{total.toFixed(2)} د.ك</span>
            </div>

            <div className="flex items-center text-green-600 text-sm mb-6">
              <Shield className="h-4 w-4 ml-2" />
              <span>جميع المعاملات مؤمنة ومشفرة</span>
            </div>

            <Button className="w-full" size="lg" onClick={handleContinue}>
              {step === 1 ? "متابعة إلى الدفع" : "إتمام الطلب"}
            </Button>

            {step === 2 && (
              <p className="text-center text-sm text-gray-500 mt-4">
                بالضغط على "إتمام الطلب"، أنت توافق على{" "}
                <Link href="/terms" className="text-blue-900 hover:underline">
                  الشروط والأحكام
                </Link>{" "}
                و{" "}
                <Link href="/privacy" className="text-blue-900 hover:underline">
                  سياسة الخصوصية
                </Link>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
