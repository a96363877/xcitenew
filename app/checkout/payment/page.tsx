"use client"

import type React from "react"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, CreditCard, Shield, Check, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import OtpInput from "@/components/otp-input"

export default function PaymentPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const paymentMethod = searchParams.get("method") || "credit-card"

  const [cardNumber, setCardNumber] = useState("")
  const [cardName, setCardName] = useState("")
  const [expiryDate, setExpiryDate] = useState("")
  const [cvv, setCvv] = useState("")
  const [showOtp, setShowOtp] = useState(false)
  const [otp, setOtp] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
    const matches = v.match(/\d{4,16}/g)
    const match = (matches && matches[0]) || ""
    const parts = []

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }

    if (parts.length) {
      return parts.join(" ")
    } else {
      return value
    }
  }

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")

    if (v.length >= 3) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`
    }

    return value
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate processing delay
    setTimeout(() => {
      setIsProcessing(false)
      setShowOtp(true)
    }, 2000)
  }

  const handleOtpSubmit = () => {
    setIsProcessing(true)

    // Simulate processing delay
    setTimeout(() => {
      setIsProcessing(false)
      setIsComplete(true)

      // Redirect to success page after 2 seconds
      setTimeout(() => {
        router.push("/checkout/success")
      }, 2000)
    }, 2000)
  }

  const renderPaymentForm = () => {
    if (paymentMethod === "credit-card") {
      return (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="cardNumber">رقم البطاقة</Label>
            <div className="relative">
              <Input
                id="cardNumber"
                value={cardNumber}
                onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                placeholder="0000 0000 0000 0000"
                maxLength={19}
                className="pl-10 mt-1"
                required
              />
              <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div>
            <Label htmlFor="cardName">الاسم على البطاقة</Label>
            <Input
              id="cardName"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              placeholder="الاسم كما يظهر على البطاقة"
              className="mt-1"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="expiryDate">تاريخ الانتهاء</Label>
              <Input
                id="expiryDate"
                value={expiryDate}
                onChange={(e) => setExpiryDate(formatExpiryDate(e.target.value))}
                placeholder="MM/YY"
                maxLength={5}
                className="mt-1"
                required
              />
            </div>
            <div>
              <Label htmlFor="cvv">رمز الأمان (CVV)</Label>
              <Input
                id="cvv"
                value={cvv}
                onChange={(e) => setCvv(e.target.value.replace(/[^0-9]/g, ""))}
                placeholder="123"
                maxLength={4}
                className="mt-1"
                required
              />
            </div>
          </div>

          <div className="flex items-center text-green-600 text-sm">
            <Shield className="h-4 w-4 ml-2" />
            <span>جميع المعاملات مؤمنة ومشفرة</span>
          </div>

          <Button type="submit" className="w-full" size="lg" disabled={isProcessing}>
            {isProcessing ? (
              <span className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                جاري المعالجة...
              </span>
            ) : (
              "تأكيد الدفع"
            )}
          </Button>
        </form>
      )
    } else if (paymentMethod === "knet") {
      return (
        <div className="text-center">
          <Image
            src="/placeholder.svg?height=100&width=200"
            alt="KNET"
            width={200}
            height={100}
            className="mx-auto mb-6"
          />
          <p className="mb-6">سيتم تحويلك إلى صفحة الدفع الخاصة بكي نت لإتمام عملية الدفع</p>
          <Button className="w-full" size="lg" onClick={handleSubmit} disabled={isProcessing}>
            {isProcessing ? (
              <span className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                جاري التحويل...
              </span>
            ) : (
              "الانتقال إلى صفحة الدفع"
            )}
          </Button>
        </div>
      )
    } else if (paymentMethod === "bank-transfer") {
      return (
        <div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <h3 className="font-bold mb-2">تفاصيل الحساب البنكي:</h3>
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

          <div className="mb-6">
            <p className="mb-4">يرجى تحويل المبلغ المطلوب إلى الحساب المذكور أعلاه، ثم إرسال إيصال التحويل إلينا.</p>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <p className="text-gray-500 mb-2">قم بإرفاق إيصال التحويل</p>
              <Button variant="outline" className="mx-auto">
                تحميل الإيصال
              </Button>
            </div>
          </div>

          <Button className="w-full" size="lg" onClick={handleSubmit} disabled={isProcessing}>
            {isProcessing ? (
              <span className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                جاري المعالجة...
              </span>
            ) : (
              "تأكيد الطلب"
            )}
          </Button>
        </div>
      )
    } else if (paymentMethod === "cash-on-delivery") {
      return (
        <div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
            <h3 className="font-bold mb-2">ملاحظات هامة:</h3>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>سيتم إضافة رسوم إضافية قدرها 2 د.ك للدفع عند الاستلام</li>
              <li>يرجى تجهيز المبلغ المطلوب بالضبط عند الاستلام</li>
              <li>في حال عدم التواجد عند التوصيل، سيتم إلغاء الطلب</li>
            </ul>
          </div>

          <Button className="w-full" size="lg" onClick={handleSubmit} disabled={isProcessing}>
            {isProcessing ? (
              <span className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                جاري المعالجة...
              </span>
            ) : (
              "تأكيد الطلب"
            )}
          </Button>
        </div>
      )
    }

    return null
  }

  const renderOtpVerification = () => {
    return (
      <div className="text-center">
        <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <Shield className="h-8 w-8 text-blue-900" />
        </div>

        <h2 className="text-xl font-bold mb-2">التحقق من الدفع</h2>
        <p className="text-gray-600 mb-6">
          لقد أرسلنا رمز التحقق إلى رقم هاتفك المسجل. يرجى إدخال الرمز لتأكيد عملية الدفع.
        </p>

        <div className="mb-6">
          <OtpInput length={6} onComplete={setOtp} />
        </div>

        <div className="flex items-center justify-center text-sm mb-6">
          <Clock className="h-4 w-4 ml-1 text-gray-500" />
          <span className="text-gray-500">ينتهي الرمز خلال: 02:59</span>
        </div>

        <Button className="w-full" size="lg" onClick={handleOtpSubmit} disabled={isProcessing || otp.length !== 6}>
          {isProcessing ? (
            <span className="flex items-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              جاري التحقق...
            </span>
          ) : (
            "تأكيد الرمز"
          )}
        </Button>

        <p className="text-sm text-gray-500 mt-4">
          لم تستلم الرمز؟ <button className="text-blue-900 hover:underline">إعادة إرسال</button>
        </p>
      </div>
    )
  }

  const renderPaymentComplete = () => {
    return (
      <div className="text-center">
        <div className="bg-green-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <Check className="h-8 w-8 text-green-600" />
        </div>

        <h2 className="text-xl font-bold mb-2">تمت عملية الدفع بنجاح</h2>
        <p className="text-gray-600 mb-6">جاري تحويلك إلى صفحة تأكيد الطلب...</p>

        <div className="flex justify-center">
          <svg
            className="animate-spin h-8 w-8 text-blue-900"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      </div>
    )
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
        <Link href="/checkout" className="text-blue-900 hover:underline">
          إتمام الطلب
        </Link>
        <span className="mx-2">/</span>
        <span className="font-medium">الدفع</span>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          {isComplete ? (
            renderPaymentComplete()
          ) : showOtp ? (
            renderOtpVerification()
          ) : (
            <>
              <h1 className="text-2xl font-bold mb-6 text-center">إتمام عملية الدفع</h1>
              {renderPaymentForm()}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
