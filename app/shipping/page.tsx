"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Truck, ShoppingCart, Trash2 } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { Separator } from "@/components/ui/separator"

export default function ShippingPage() {
  const { items, removeItem, updateQuantity, subtotal } = useCart()
  const router = useRouter()

  // If cart is empty, show a message and redirect to home after a delay
  useEffect(() => {
    if (items.length === 0) {
      const timer = setTimeout(() => {
        router.push("/")
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [items.length, router])

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
          <p className="mt-4 text-sm text-gray-500">سيتم توجيهك إلى الصفحة الرئيسية خلال 5 ثوانٍ...</p>
        </div>
      </div>
    )
  }

  const handleProceedToCheckout = () => {
    router.push("/checkout")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">الشحن والتوصيل</h1>
        <p className="text-gray-600">مراجعة المنتجات واختيار طريقة الشحن</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">المنتجات في سلة التسوق</h2>

            {items.map((item) => (
              <div key={item.id} className="flex gap-4 py-4 border-b last:border-0">
                <div className="w-20 h-20 flex-shrink-0">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  {item.originalPrice && (
                    <div className="flex items-center mt-1">
                      <span className="text-gray-500 line-through text-sm mr-2">{item.originalPrice} د.ك</span>
                      <span className="text-red-600 font-bold">{item.price} د.ك</span>
                    </div>
                  )}
                  {item.code && (
                    <div className="text-sm text-blue-900 mt-1">
                      كود الخصم: <span className="font-bold">{item.code}</span>
                    </div>
                  )}
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center mb-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center border rounded-md"
                    >
                      -
                    </button>
                    <span className="mx-2 w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center border rounded-md"
                    >
                      +
                    </button>
                  </div>
                  <button onClick={() => removeItem(item.id)} className="text-red-600 text-sm flex items-center">
                    <Trash2 className="h-4 w-4 mr-1" />
                    إزالة
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">خيارات الشحن</h2>

            <div className="space-y-4">
              <div className="flex items-start p-4 border rounded-lg">
                <input
                  type="radio"
                  id="standard-shipping"
                  name="shipping-option"
                  className="mt-1 mr-2"
                  defaultChecked
                />
                <label htmlFor="standard-shipping" className="flex-1">
                  <div className="font-medium">التوصيل القياسي</div>
                  <div className="text-sm text-gray-600">2-3 أيام عمل</div>
                  <div className="text-sm font-medium text-green-600 mt-1">مجاناً للطلبات فوق 20 د.ك</div>
                </label>
                <div className="font-bold">2.000 د.ك</div>
              </div>

              <div className="flex items-start p-4 border rounded-lg">
                <input type="radio" id="express-shipping" name="shipping-option" className="mt-1 mr-2" />
                <label htmlFor="express-shipping" className="flex-1">
                  <div className="font-medium">التوصيل السريع</div>
                  <div className="text-sm text-gray-600">خلال 24 ساعة</div>
                </label>
                <div className="font-bold">5.000 د.ك</div>
              </div>

              <div className="flex items-start p-4 border rounded-lg">
                <input type="radio" id="store-pickup" name="shipping-option" className="mt-1 mr-2" />
                <label htmlFor="store-pickup" className="flex-1">
                  <div className="font-medium">استلام من المتجر</div>
                  <div className="text-sm text-gray-600">متاح خلال ساعات عمل المتجر</div>
                  <div className="text-sm font-medium text-green-600 mt-1">مجاناً</div>
                </label>
                <div className="font-bold">0.000 د.ك</div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
            <div className="flex items-start">
              <Truck className="h-5 w-5 text-blue-900 ml-3 mt-0.5" />
              <div>
                <p className="font-medium">معلومات هامة عن الشحن</p>
                <p className="text-sm text-gray-700 mt-1">
                  يتم شحن جميع الطلبات من مخازننا في الكويت. الأوقات المذكورة للتوصيل هي تقديرية وقد تختلف حسب المنطقة
                  والظروف.
                </p>
              </div>
            </div>
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
                <span>2.000 د.ك</span>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between font-bold text-lg">
                <span>الإجمالي</span>
                <span>{(subtotal + 2).toFixed(2)} د.ك</span>
              </div>
            </div>

            <Button className="w-full mb-4" size="lg" onClick={handleProceedToCheckout}>
              متابعة إلى الدفع
            </Button>

            <div className="text-center text-sm text-gray-500">
              بالضغط على "متابعة إلى الدفع"، أنت توافق على{" "}
              <Link href="/terms" className="text-blue-900 hover:underline">
                الشروط والأحكام
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-center">الأسئلة الشائعة حول الشحن والتوصيل</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>كيف يمكنني تتبع طلبي؟</AccordionTrigger>
            <AccordionContent>
              يمكنك تتبع طلبك بسهولة من خلال الدخول إلى حسابك على موقعنا أو تطبيقنا، والانتقال إلى قسم "طلباتي"، ثم
              النقر على رقم الطلب الذي ترغب في تتبعه. ستظهر لك معلومات مفصلة عن حالة طلبك وموقعه الحالي.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>ما هي مدة التوصيل المتوقعة؟</AccordionTrigger>
            <AccordionContent>
              تختلف مدة التوصيل حسب موقعك والمنتجات التي طلبتها. بشكل عام، نقدم خدمة التوصيل في نفس اليوم للمنتجات
              المتوفرة في المخزون والمناطق القريبة، وخلال 1-3 أيام عمل للمناطق الأخرى.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>هل يمكنني تغيير عنوان التوصيل بعد تقديم الطلب؟</AccordionTrigger>
            <AccordionContent>
              نعم، يمكنك تغيير عنوان التوصيل طالما أن طلبك لم يتم شحنه بعد. للقيام بذلك، يرجى الاتصال بخدمة العملاء في
              أقرب وقت ممكن وتزويدهم برقم طلبك والعنوان الجديد.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
