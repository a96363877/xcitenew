"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { ArrowLeft, CheckCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function KnetPaymentGateway() {
  const router = useRouter()
  const [stage, setStage] = useState("loading") // loading, form, processing, success

  // Simulate loading the KNET payment gateway
  useEffect(() => {
    const timer = setTimeout(() => {
      setStage("form")
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setStage("processing")

    // Simulate payment processing
    setTimeout(() => {
      setStage("success")
    }, 3000)
  }

  const handleReturn = () => {
    router.push("/checkout/success")
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-blue-900 p-4 text-white text-center">
          <h1 className="text-xl font-bold">بوابة الدفع KNET</h1>
        </div>

        {stage === "loading" && (
          <div className="p-8 text-center">
            <Loader2 className="h-12 w-12 animate-spin mx-auto text-blue-900 mb-4" />
            <p className="text-gray-600">جاري تحميل بوابة الدفع...</p>
          </div>
        )}

        {stage === "form" && (
          <div className="p-6">
            <div className="flex justify-center mb-6">
              <Image
                src="/placeholder.svg?height=60&width=120"
                alt="KNET Logo"
                width={120}
                height={60}
                className="h-12 w-auto"
              />
            </div>

            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">رقم البطاقة</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="0000 0000 0000 0000"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">تاريخ الانتهاء</label>
                    <input type="text" className="w-full p-2 border rounded-md" placeholder="MM/YY" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">الرقم السري</label>
                    <input type="password" className="w-full p-2 border rounded-md" placeholder="****" required />
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-md">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">المبلغ:</span>
                    <span className="font-bold">45.900 د.ك</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">رقم المرجع:</span>
                    <span>KW123456789</span>
                  </div>
                </div>

                <Button type="submit" className="w-full bg-blue-900 hover:bg-blue-800">
                  تأكيد الدفع
                </Button>

                <div className="text-center text-xs text-gray-500 mt-4">
                  بالضغط على "تأكيد الدفع"، أنت توافق على شروط وأحكام KNET
                </div>
              </div>
            </form>
          </div>
        )}

        {stage === "processing" && (
          <div className="p-8 text-center">
            <Loader2 className="h-12 w-12 animate-spin mx-auto text-blue-900 mb-4" />
            <p className="font-medium mb-2">جاري معالجة الدفع</p>
            <p className="text-gray-600 text-sm">يرجى عدم إغلاق هذه النافذة أو تحديث الصفحة</p>
          </div>
        )}

        {stage === "success" && (
          <div className="p-8 text-center">
            <CheckCircle className="h-16 w-16 mx-auto text-green-600 mb-4" />
            <h2 className="text-xl font-bold mb-2">تمت عملية الدفع بنجاح</h2>
            <p className="text-gray-600 mb-6">تم خصم مبلغ 45.900 د.ك من حسابك</p>
            <p className="text-sm text-gray-500 mb-4">رقم العملية: KW987654321</p>
            <Button onClick={handleReturn} className="flex items-center mx-auto">
              <ArrowLeft className="h-4 w-4 mr-2" />
              العودة إلى المتجر
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
