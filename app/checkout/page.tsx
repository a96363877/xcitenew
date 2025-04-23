"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, Check, ArrowRight, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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

              <Tabs defaultValue="card" className="w-full" onValueChange={setPaymentMethod}>
                <TabsList className="grid grid-cols-3 mb-6">
                  <TabsTrigger value="card">بطاقات الائتمان</TabsTrigger>
                  <TabsTrigger value="bank">التحويل البنكي</TabsTrigger>
                  <TabsTrigger value="apple">ابل باي</TabsTrigger>
                </TabsList>

                <TabsContent value="card" className="p-4">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/2">
                      <h3 className="text-xl font-bold mb-4">الدفع ببطاقات الائتمان</h3>
                      <p className="mb-4">
                        نقبل جميع بطاقات الائتمان الرئيسية. يتم معالجة المدفوعات بشكل آمن من خلال بوابة دفع مشفرة لضمان
                        حماية معلوماتك المالية.
                      </p>
                      <div className="flex flex-wrap gap-4 mb-6">
                        <Image
                          src="/visa.svg"
                          alt="Visa"
                          width={80}
                          height={50}
                          className="h-10 w-auto object-contain"
                        />
                        <Image
                          src="/master.svg"
                          alt="Mastercard"
                          width={80}
                          height={50}
                          className="h-10 w-auto object-contain"
                        />
                        <Image
                          src="/amex.svg"
                          alt="American Express"
                          width={80}
                          height={50}
                          className="h-10 w-auto object-contain"
                        />
                        <Image
                          src="/knet.png"
                          alt="KNET"
                          width={80}
                          height={50}
                          className="h-10 w-auto object-contain"
                        />
                      </div>
                      <div className="flex items-center text-green-600 mb-4">
                        <Shield className="h-5 w-5 ml-2" />
                        <span className="text-sm font-medium">جميع المعاملات مؤمنة ومشفرة</span>
                      </div>
                    </div>
                    <div className="md:w-1/2">
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
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="bank" className="p-4">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/2">
                      <h3 className="text-xl font-bold mb-4">التحويل البنكي</h3>
                      <p className="mb-4">
                        يمكنك إجراء تحويل بنكي مباشر إلى حسابنا. يرجى ملاحظة أن المنتجات لن يتم شحنها حتى يتم تأكيد
                        استلام المبلغ في حسابنا.
                      </p>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
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
                          <li>
                            <span className="font-medium">SWIFT:</span> NBOKWKWK
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="md:w-1/2">
                      <div className="border rounded-lg p-4 bg-gray-50">
                        <h4 className="font-bold mb-4">كيفية إتمام التحويل البنكي</h4>
                        <ol className="list-decimal list-inside space-y-2 text-sm">
                          <li>أضف المنتجات إلى سلة التسوق</li>
                          <li>انتقل إلى صفحة الدفع</li>
                          <li>اختر "التحويل البنكي" كطريقة الدفع</li>
                          <li>ستظهر لك تفاصيل الحساب البنكي</li>
                          <li>قم بإجراء التحويل من حسابك البنكي</li>
                          <li>أرسل إلينا إيصال التحويل عبر البريد الإلكتروني مع رقم الطلب</li>
                          <li>سنقوم بتأكيد استلام المبلغ وشحن طلبك</li>
                        </ol>
                      </div>
                      <div className="mt-4">
                        <Label htmlFor="transfer-receipt">إيصال التحويل (اختياري)</Label>
                        <Input id="transfer-receipt" type="file" className="mt-1" />
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="apple" className="p-4">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/2">
                      <h3 className="text-xl font-bold mb-4">الدفع باستخدام ابل باي</h3>
                      <p className="mb-4">
                        يمكنك الدفع بسهولة وأمان باستخدام ابل باي. هذه الطريقة متاحة فقط لمستخدمي أجهزة ابل.
                      </p>
                      <div className="flex justify-center mb-6">
                        <Image
                          src="/placeholder.svg?height=80&width=120"
                          alt="Apple Pay"
                          width={120}
                          height={80}
                          className="h-16 w-auto object-contain"
                        />
                      </div>
                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                        <h4 className="font-bold mb-2">مميزات الدفع باستخدام ابل باي:</h4>
                        <ul className="list-disc list-inside space-y-2 text-sm">
                          <li>سرعة وسهولة في إتمام عملية الدفع</li>
                          <li>أمان عالي لمعلوماتك المالية</li>
                          <li>لا حاجة لإدخال تفاصيل البطاقة في كل مرة</li>
                          <li>تأكيد الدفع باستخدام بصمة الإصبع أو Face ID</li>
                        </ul>
                      </div>
                    </div>
                    <div className="md:w-1/2">
                      <div className="border rounded-lg p-4 bg-gray-50 h-full flex flex-col justify-center items-center">
                        <div className="text-center mb-6">
                          <h4 className="font-bold mb-4">جاهز للدفع باستخدام ابل باي؟</h4>
                          <p className="text-sm text-gray-600 mb-6">
                            عند النقر على زر "إتمام الطلب"، سيتم توجيهك إلى نافذة ابل باي لإتمام عملية الدفع.
                          </p>
                          <Button
                            className="w-full bg-black hover:bg-gray-800 text-white"
                            onClick={() => {
                              setPaymentMethod("apple")
                            }}
                          >
                            <Image
                              src="/placeholder.svg?height=24&width=60"
                              alt="Apple Pay"
                              width={60}
                              height={24}
                              className="h-6 w-auto"
                            />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="flex justify-between mt-8">
                <Button type="button" variant="outline" onClick={() => setStep(1)} className="flex items-center">
                  <ArrowRight className="h-4 w-4 ml-2" />
                  العودة
                </Button>
                <Button type="submit" className="min-w-[150px]" disabled={isLoading} onClick={handlePaymentSubmit}>
                  {isLoading ? "جاري المعالجة..." : "إتمام الطلب"}
                </Button>
              </div>
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
