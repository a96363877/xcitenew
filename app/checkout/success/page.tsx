import Link from "next/link"
import { Check, Package, Printer, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function SuccessPage() {
  const orderNumber = "XC-" + Math.floor(100000 + Math.random() * 900000)
  const orderDate = new Date().toLocaleDateString("ar-EG")

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <div className="text-center mb-6">
            <div className="bg-green-100 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <Check className="h-10 w-10 text-green-600" />
            </div>

            <h1 className="text-2xl font-bold mb-2">تم تأكيد طلبك بنجاح!</h1>
            <p className="text-gray-600">شكراً لك على طلبك. سنرسل لك تأكيداً بالبريد الإلكتروني مع تفاصيل الطلب.</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="flex justify-between mb-2">
              <span className="font-medium">رقم الطلب:</span>
              <span>{orderNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">تاريخ الطلب:</span>
              <span>{orderDate}</span>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="font-bold text-lg mb-3">تفاصيل الطلب</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>سماعات لاسلكية Sony WH-1000XM4</span>
                <span>89.99 د.ك</span>
              </div>
              <div className="flex justify-between">
                <span>هاتف iPhone 13 Pro - 256GB</span>
                <span>349.99 د.ك</span>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between">
                <span>المجموع الفرعي</span>
                <span>439.98 د.ك</span>
              </div>
              <div className="flex justify-between">
                <span>رسوم الشحن</span>
                <span>5.00 د.ك</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>الخصم</span>
                <span>- 10.00 د.ك</span>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between font-bold">
                <span>الإجمالي</span>
                <span>434.98 د.ك</span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="font-bold text-lg mb-3">معلومات الشحن</h2>
            <div className="bg-blue-50 rounded-lg p-4 flex items-start">
              <Package className="h-5 w-5 text-blue-900 ml-3 mt-0.5" />
              <div>
                <p className="font-medium">سيتم شحن طلبك خلال 1-3 أيام عمل</p>
                <p className="text-sm text-gray-600 mt-1">
                  سيتم إرسال تحديثات حالة الطلب إلى بريدك الإلكتروني وهاتفك المحمول
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="outline" className="flex items-center">
              <Printer className="h-4 w-4 ml-2" />
              طباعة الإيصال
            </Button>
            <Link href="/" className="w-full sm:w-auto">
              <Button className="w-full flex items-center">
                <ArrowRight className="h-4 w-4 ml-2" />
                العودة للتسوق
              </Button>
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="font-bold text-lg mb-4 text-center">منتجات قد تعجبك</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((item) => (
              <Link key={item} href="#" className="text-center group">
                <div className="border rounded-lg p-2 mb-2 group-hover:border-blue-900 transition-colors">
                  <div className="aspect-square bg-gray-100 rounded-md mb-2"></div>
                  <h3 className="text-sm font-medium truncate">منتج مقترح {item}</h3>
                  <p className="text-sm font-bold text-blue-900">79.99 د.ك</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
